import { useMemo, useState } from "react";
import { Plus, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { usePlanningItems, type PlanningItem, type PlanningSource } from "./usePlanningItems";
import ActivityForm from "./ActivityForm";
import ContentOriginBadge from "../../components/ContentOriginBadge";
import { addDays, daysInMonth, formatNL, isSameDay, monthName, startOfMonth, startOfWeek, toISODate, weekdayShort } from "../../lib/date";
import "./Planning.css";

type ViewMode = "dag" | "week" | "maand" | "agenda" | "tijdlijn";

const sourceLabel: Record<PlanningSource, string> = {
  opleiding: "Vanuit opleiding",
  persoonlijk: "Persoonlijk",
  outlook: "Outlook",
};

function itemsOnDay(items: PlanningItem[], day: Date) {
  return items.filter((i) => isSameDay(new Date(i.date), day));
}

function ItemPill({ item, onDelete }: { item: PlanningItem; onDelete?: () => void }) {
  return (
    <div className={`planning-item source-${item.source}`}>
      <span className="planning-item-dot" />
      <div className="planning-item-body">
        <div className="planning-item-title">{item.title}</div>
        {(item.startTime || item.endTime) && (
          <div className="planning-item-time">
            {item.startTime}
            {item.endTime ? ` - ${item.endTime}` : ""}
          </div>
        )}
      </div>
      {onDelete && item.source === "persoonlijk" && (
        <button className="planning-item-delete" onClick={onDelete} aria-label="Verwijder activiteit">
          <Trash2 size={13} />
        </button>
      )}
    </div>
  );
}

export default function Planning() {
  const { items, addPersonalActivity, removePersonalActivity, outlookConfigured } = usePlanningItems();
  const [view, setView] = useState<ViewMode>("week");
  const [cursor, setCursor] = useState(() => new Date());
  const [showForm, setShowForm] = useState(false);

  const weekStart = useMemo(() => startOfWeek(cursor), [cursor]);
  const weekDays = useMemo(() => Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)), [weekStart]);

  const monthStart = useMemo(() => startOfMonth(cursor), [cursor]);
  const monthDays = useMemo(() => {
    const total = daysInMonth(cursor);
    const leading = (monthStart.getDay() + 6) % 7;
    const cells: (Date | null)[] = Array(leading).fill(null);
    for (let d = 1; d <= total; d++) cells.push(new Date(cursor.getFullYear(), cursor.getMonth(), d));
    return cells;
  }, [cursor, monthStart]);

  function shift(amount: number) {
    if (view === "dag") setCursor((c) => addDays(c, amount));
    else if (view === "week") setCursor((c) => addDays(c, amount * 7));
    else setCursor((c) => new Date(c.getFullYear(), c.getMonth() + amount, 1));
  }

  return (
    <div className="planning">
      <div className="planning-header">
        <div>
          <h1>Planning</h1>
          <p>Alles vanuit de opleiding, je eigen agenda en Outlook op één plek.</p>
        </div>
        <button className="btn-primary" onClick={() => setShowForm((s) => !s)}>
          <Plus size={14} /> Activiteit toevoegen
        </button>
      </div>

      <div className="planning-legend">
        {(["opleiding", "persoonlijk", "outlook"] as PlanningSource[]).map((s) => (
          <span key={s} className={`legend-chip source-${s}`}>
            <span className="planning-item-dot" /> {sourceLabel[s]}
          </span>
        ))}
        {!outlookConfigured && (
          <span className="legend-note">
            <ContentOriginBadge origin="MOCKDATA" /> Outlook nog niet gekoppeld (Microsoft Entra ID/Graph ontbreekt)
          </span>
        )}
      </div>

      {showForm && (
        <div className="card planning-form-card">
          <ActivityForm
            onSubmit={(a) => {
              addPersonalActivity(a);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="planning-toolbar">
        <div className="view-switch">
          {(["dag", "week", "maand", "agenda", "tijdlijn"] as ViewMode[]).map((v) => (
            <button key={v} className={view === v ? "active" : ""} onClick={() => setView(v)}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
        {view !== "agenda" && view !== "tijdlijn" && (
          <div className="range-nav">
            <button onClick={() => shift(-1)} aria-label="Vorige">
              <ChevronLeft size={16} />
            </button>
            <span>
              {view === "maand" ? `${monthName(cursor)} ${cursor.getFullYear()}` : view === "dag" ? formatNL(cursor) : `${formatNL(weekStart)} - ${formatNL(addDays(weekStart, 6))}`}
            </span>
            <button onClick={() => shift(1)} aria-label="Volgende">
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {view === "dag" && (
        <div className="card">
          <h3 className="day-view-title">{formatNL(cursor)}</h3>
          <div className="day-items">
            {itemsOnDay(items, cursor).length === 0 && <p className="muted">Geen items op deze dag.</p>}
            {itemsOnDay(items, cursor).map((i) => (
              <ItemPill key={i.id} item={i} onDelete={() => removePersonalActivity(i.id)} />
            ))}
          </div>
        </div>
      )}

      {view === "week" && (
        <div className="week-grid">
          {weekDays.map((day) => (
            <div key={toISODate(day)} className="week-day card">
              <div className="week-day-header">
                <span>{weekdayShort(day)}</span>
                <span className="week-day-num">{day.getDate()}</span>
              </div>
              <div className="week-day-items">
                {itemsOnDay(items, day).map((i) => (
                  <ItemPill key={i.id} item={i} onDelete={() => removePersonalActivity(i.id)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "maand" && (
        <div className="card month-card">
          <div className="month-grid-header">
            {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="month-grid">
            {monthDays.map((day, idx) =>
              day ? (
                <div key={idx} className="month-cell">
                  <span className="month-cell-num">{day.getDate()}</span>
                  <div className="month-cell-dots">
                    {itemsOnDay(items, day).slice(0, 3).map((i) => (
                      <span key={i.id} className={`planning-item-dot source-${i.source}`} title={i.title} />
                    ))}
                  </div>
                </div>
              ) : (
                <div key={idx} className="month-cell empty" />
              ),
            )}
          </div>
        </div>
      )}

      {(view === "agenda" || view === "tijdlijn") && (
        <div className={view === "tijdlijn" ? "timeline card" : "card"}>
          {items.length === 0 && <p className="muted">Nog geen activiteiten.</p>}
          {items.map((i) => (
            <div key={i.id} className={view === "tijdlijn" ? "timeline-row" : undefined}>
              {view === "tijdlijn" && <span className={`timeline-dot source-${i.source}`} />}
              <div style={{ flex: 1 }}>
                <div className="planning-item-date">{formatNL(new Date(i.date))}</div>
                <ItemPill item={i} onDelete={() => removePersonalActivity(i.id)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
