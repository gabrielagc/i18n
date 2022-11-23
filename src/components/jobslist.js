import React, { useState } from "react";
import Job from "./job";
import {FormattedMessage} from 'react-intl';
import "./joblist.css";

var idioma = "";

const languaje = navigator.language;

  if (languaje.includes("es")){
    
      idioma = "espanol"
    
  }else if (languaje.includes("en")){
    
    idioma =  "english"
    
  }

  console.log(languaje)


const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 1000
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 1500
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 1600
    },
  ]);


  if(idioma === "espanol"){
    return (
      <div>
        <table className="table ">
          <thead className="thead-dark es">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                  <FormattedMessage id="Nombre del cargo"/>
              </th>
              <th scope="col">
                  <FormattedMessage id="Empresa"/>
              </th>
              <th scope="col">
                  <FormattedMessage id="Salario"/>
              </th>
              <th scope="col">
                  <FormattedMessage id="Ciudad"/>
              </th>
              <th scope="col">
                  <FormattedMessage id="Fecha de publicación"/>
              </th>
              <th scope="col">
                  <FormattedMessage id="No. de visitas"/>
              </th>
            </tr>
          </thead>
          <tbody>
            {console.log("Offers", offers)}
            {offers.map((e, i) => (
              <Job key={i} offer={e} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  else if(idioma === "english"){ return (
    <div>
      <table className="table en"  >
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">
            <FormattedMessage id="Position"/>
            </th>
            <th scope="col">
            <FormattedMessage id="Company"/>
            </th>

            <th scope="col">
            <FormattedMessage id="Salary"/>
            </th>
            <th scope="col">
            <FormattedMessage id="City"/>
            </th>
            <th scope="col">
            <FormattedMessage id="Publication date"/>
            </th>
            <th scope="col">
            <FormattedMessage id="Views"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
  }
};

export default JobsList;
