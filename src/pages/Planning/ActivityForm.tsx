import { useState } from "react";
import type { PersonalActivity } from "../../types/entities";
import { toISODate } from "../../lib/date";
import "./ActivityForm.css";

export default function ActivityForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: (activity: Omit<PersonalActivity, "id">) => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(() => toISODate(new Date()));
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [type, setType] = useState("Persoonlijk");
  const [priority, setPriority] = useState<PersonalActivity["priority"]>("gemiddeld");
  const [reminder, setReminder] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !date) return;
    onSubmit({
      title: title.trim(),
      description: description.trim() || undefined,
      date,
      startTime: startTime || undefined,
      endTime: endTime || undefined,
      type,
      priority,
      reminder,
    });
  }

  return (
    <form className="activity-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Titel
          <input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Bijv. Groepsoverleg" />
        </label>
      </div>

      <div className="form-row">
        <label>
          Omschrijving
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} />
        </label>
      </div>

      <div className="form-grid">
        <label>
          Datum
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>Persoonlijk</option>
            <option>Studie</option>
            <option>Groepswerk</option>
            <option>Afspraak</option>
          </select>
        </label>
        <label>
          Starttijd
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </label>
        <label>
          Eindtijd
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </label>
        <label>
          Prioriteit
          <select value={priority} onChange={(e) => setPriority(e.target.value as PersonalActivity["priority"])}>
            <option value="laag">Laag</option>
            <option value="gemiddeld">Gemiddeld</option>
            <option value="hoog">Hoog</option>
          </select>
        </label>
        <label className="checkbox-row">
          <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.target.checked)} />
          Herinnering
        </label>
      </div>

      <div className="form-actions">
        <button type="button" className="btn-ghost" onClick={onCancel}>
          Annuleren
        </button>
        <button type="submit" className="btn-primary">
          Activiteit opslaan
        </button>
      </div>
    </form>
  );
}
