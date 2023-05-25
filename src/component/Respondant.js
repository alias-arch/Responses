import React from "react";
import { useState } from "react";

const Respondant = (props) => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [organisme, setOrganisme] = useState('');
  const submitRespondant = (e) => {
    // remember to add a prop that changes the showResponse state when clicking on save inofs 
    e.preventDefault();
    if (!nom) {
      alert("Svp ajouter votre Nom")
      return
    }
    if (!email) {
      alert("Svp ajouter votre Email")
      return
    }
    if (!organisme) {
      alert("Svp ajouter votre Organisme")
      return

    }
    props.onAdd({ nom, email, organisme })
    setNom('');
    setEmail('');
    setOrganisme('');
    props.onSave();


  }
  return (
    <form className="add-from" onSubmit={submitRespondant}>
      <div className="form-control">
        <label>Nom</label>
        <input type="text" placeholder="Name" value={nom} onChange={(e) => { setNom(e.target.value) }} />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
      </div>
      <div className="form-control">
        <label>Organisme</label>
        <input type="text" placeholder="Organisme" value={organisme} onChange={(e) => { setOrganisme(e.target.value) }} />
      </div>
      <input type="submit" value="Save Info" className="btn btn-block" />
    </form>

  )
}

export default Respondant
