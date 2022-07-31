import React, { useState, useEffect } from "react";
import { contacts } from "../utils/Data";
  
const Top = () => {
  
  return (
    <section id="top" className="top">
        <div className="center-div">
            <img src="./images/portfolio_image.png" alt="image" />
            <div className="top-text">
                <h1>Issam Ahmed</h1>
                
                <div className="top-text-div">
                  <h3>Currently Developing</h3>
                  {contacts.map((contact) =>(
                      <a 
                        className="contact tooltip"
                        href={contact.link} 
                        target="_blank"
                        ><img 
                          src={contact.image} 
                          alt={contact.name} 
                          />
                        <span class="tooltiptext">{contact.name}</span>
                      </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Top;