import { Card } from "../../components/Card";
import ContentOriginBadge from "../../components/ContentOriginBadge";
import { officialMaterials } from "../../data/officialData";
import "./Materials.css";

const phaseOrder = ["Start", "De hele minor door", "Discover", "Define", "Develop", "Deliver"];

export default function Materials() {
  return (
    <div className="materials">
      <div className="materials-header">
        <div>
          <h1>Materialen & hulpmiddelen</h1>
          <p>
            De 18 hulpmiddelen (Word-templates) uit de studentenhandleiding, gegroepeerd per fase van de Double
            Diamond. Bron:{" "}
            <a href="https://fabianb88.github.io/minor-ce-studentenhandleiding/materialen.html" target="_blank" rel="noreferrer">
              studentenhandleiding - materialen
            </a>
            .
          </p>
        </div>
        <ContentOriginBadge origin="OFFICIAL_CONTENT" />
      </div>

      {phaseOrder.map((phase) => {
        const items = officialMaterials.filter((m) => m.phase === phase);
        if (items.length === 0) return null;
        return (
          <div key={phase} className="materials-phase">
            <h2>{phase}</h2>
            <div className="materials-grid">
              {items.map((m) => (
                <Card key={m.id} className="material-card">
                  <div className="material-code">{m.code}</div>
                  <div className="material-title">{m.title}</div>
                  <p className="material-desc">{m.description}</p>
                  <div className="material-deliverable">
                    <span>Wat lever je op</span>
                    <p>{m.deliverable}</p>
                  </div>
                  <p className="material-note">
                    De downloadbare Word-bestanden zelf staan alleen in de officiele studentenhandleiding — hier
                    tonen we titel en doel zodat je weet welk hulpmiddel je nodig hebt.
                  </p>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
