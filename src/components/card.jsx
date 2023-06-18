import React, { useState } from "react";
import { Card, ButtonGroup, ToggleButton } from "react-bootstrap";
import data from "../../dados2.json";
import "../App.css";

const Cards = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "⭐ Tendêcias", value: "1" },
    { name: "✏️ Escrita", value: "2" },
    { name: "💻 Código", value: "3" },
    { name: "🖼️ Imagem", value: "4" },
    { name: "📽️ Video", value: "5" },
    { name: "🔉 Audio", value: "6" },
    { name: "🎨 Design", value: "7" },
    { name: "💬 Assistente", value: "8" },
    { name: "✅ Produtividade", value: "9" },
  ];

  return (
    <>
      
      <div className="bGroup">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={"light"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </div>
      <div className="post-feed">
        {data.map((item, index) => (
          <Card
            key={index}
            className="article post-card post tag-video featured keep-ratio"
          >
            {/* <a className="post-card-image-link" href={item.href} target="_blank">
            <Card.Img className="post-card-image" src={item.imgSrc} alt={item.imgAlt} loading="lazy" />
          </a> */}
            <Card.Body className="post-card-content">
              {/* <a className="post-card-content-link" href={item.href} target="_blank"> */}
              <Card.Header className="post-card-header">
                <Card.Title className="post-card-title">{item.Titulo}</Card.Title>
              </Card.Header>
              <Card.Footer className="post-card-meta">
                <div className="post-card-tags">
                  {item.featured && "⭐ Featured"}
                  {item.Categoria && (
                    <span className="post-card-primary-tag">{item.Categoria}</span>
                  )}
                </div>
              </Card.Footer>
              <Card.Text className="post-card-excerpt">{item.Resumo}</Card.Text>
              {/* </a> */}
              {/* <a className="lmk" href={item.href} target="_blank">Learn More</a> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
