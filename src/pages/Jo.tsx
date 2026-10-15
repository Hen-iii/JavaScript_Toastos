import { Button, Card, Col, Row } from "react-bootstrap";
import type { Pizza } from "../types/Pizza";
import { useState } from "react";
import { initPizza } from "./Pizzak";
import { toast } from "react-toastify";

const App = () => {
  const [allPizza, setAllPizza] = useState<Array<Pizza>>(initPizza);

  const [nev, setNev] = useState<string>("");
  const [leiras, setLeiras] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [kep, setKep] = useState<string>("");

  const generateCard = (p: Pizza) => {
    return (
      <Card key={p.nev} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={p.kep} />

        <Card.Body>
          <Card.Title>{p.nev}</Card.Title>
          <Card.Text>{p.leiras}</Card.Text>
          <Card.Text>{p.ar} Ft</Card.Text>

          <Card.Footer>
            <Button
              variant="danger"
              onClick={() => del(p)}
            >
              Törlés
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  };

  const submit = () => {
    const ujpizza: Pizza = {
      nev: nev,
      leiras: leiras,
      ar: ar,
      kep: kep
    };

    if (ar < 1000) {
      toast.error("Hibás összeg")
      alert("Hiba! Túl olcsó pizza!");
    } else {
      setAllPizza([...allPizza, ujpizza]);
    toast.success("Sikeres hozzáadás");
    }
  };

  const del = (pizza: Pizza) => {
    setAllPizza(allPizza.filter((p) => p !== pizza));
    toast.error("Sikeres törlés!");
  };

  return (
    <>
      <Row>
        <Col>
          {allPizza.map((p) => generateCard(p))}
        </Col>

        <Col>
          <input
            type="text"
            value={nev}
            onChange={(e) => setNev(e.target.value)}
            placeholder="Név"
          />
          <br />

          <input
            type="text"
            value={leiras}
            onChange={(e) => setLeiras(e.target.value)}
            placeholder="Leírás"
          />
          <br />

          <input
            type="number"
            value={ar}
            onChange={(e) => setAr(Number(e.target.value))}
            placeholder="Ár"
          />
          <br />

          <input
            type="text"
            value={kep}
            onChange={(e) => setKep(e.target.value)}
            placeholder="Kép"
          />
          <br />

          <Button onClick={submit}>Hozzáadás</Button>
        </Col>
      </Row>
    </>
  );
};
//npm i react-toastify
export default App;