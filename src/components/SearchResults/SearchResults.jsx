import React from "react";
import "./search-results.css";
import Card from "../Cards/Cards";

function SearchResults(props) {
  return (
    <section className="search-results">
      <div className="search-results__wraper">
        <h2 className="search-results__tittle">Resultados de la búsqueda</h2>
        <div className="search-results__cards">
          <Card
            pic="https://s3-alpha-sig.figma.com/img/4957/e141/913be15f4578b8bf783bb0006de83c18?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i70DGQ8DFtajUMmFhEpSS0c53AA6bKC8Ydd1ie3EQGOUiCWCYY2eL27O~-8u9ECvodQ62Lbfat~TEIA5aGaoOoqBgL-fKK3TJx4rIsYGLfonT3TYeobMSnC4sL8Em1-2TfAr6V2EZ8Jkk53i1F8k56jC4kkCSox6K89X5orOPdINYgJanhlKzU3Z4Ja0l~acD~g24zmYqP0CHNDbf1fw8~YYppuou7d~9~aN8Nd9m068ruoeiMUvt9rB0MQP8h82EtTRDJFfimEc-KlhbG30N8bjAnFV3Qdbf7dWrfEkbZ2ql~L-fENPJ8TfTTwEaT2JkXISK5pjOXA4arDDw82hXg__"
            date="4 de noviembre de 2020"
            tittle="Todo el mundo necesita un lugar de reflexión en la naturaleza."
            description='Desde que leí el influyente libro de Richard Louv, "El último niño en el bosque", la idea de tener un "lugar de reflexión" especial para mi se me ha quedado grabada. Este consejo, que...'
            source="treehugger"
            loggedIn={props.loggedIn}
          />
          <Card
            pic="https://s3-alpha-sig.figma.com/img/4997/f747/6375f12d441c75d31f63eb3c64372a52?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I5Q5drGrV7hMuvwjISOfIqhYgWtooP45YlyxDevHVcaIYx0Q7ez4AyasB24644ihuECDqZSnZkjD12dqtgezs4TKXF26AuqzNFSUp2Jz6vIjyh5vFaQKttl2Rn5KSkOBmBWL9kIODdZTuQUgZ7FB~JlsO9gIIenGlyfdplXRkkBnwcDa4Jk~yU92iKFGmslYF5CKDr3NTd-rRKKXb1Ml2NdL8mMdGGUIttFm03z8LrehXSFAUnELJwn79ghJ75rYPesNj4VPQxqI45rjY1q-pH3LhhqbQRV00YRq-6~aazt-tamZ~EyTKUq90G5xYuGr-wjXzV9uzdHZo~rufZuIgw__"
            date="19 de febrero de 2019"
            tittle="La naturaleza te hace mejor"
            description="Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas."
            source="national geographic"
            loggedIn={props.loggedIn}
          />
          <Card
            pic="https://s3-alpha-sig.figma.com/img/8059/2684/40ed0f93d84ff0b8e5d5f433da74024b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gP1rUYBPUrnhpd2gUBHHORU1gSQ4hESxR8T82JLn2lJ9AMAMXq6nXeST00J19IZskd6VQn7A~YtCAxhumXE3QaUt2OAL21esfsMIXjgecXQgltCkr-E194F-j89QAvJrvspp3cDP28~wjmeOI26UpDeebfn-SKc5JxsG1eYtAdo4sDKHLtVOtSk38Zwfvttlt6wDO1c-GqKNrqGZHoFn14ES4eT-rMDoVCyDeF-IWtiG9O-L9WqmfWo1Cf~6U-LQgo2P886g1baCKp1NPA~bDaJxUxRepmbbGMhAfD6hRDMc3oT3jn-RUG28LKeoHso4~peQw4sBNTZuih~vvY31oQ__"
            date="19 de octubre de 2020"
            tittle="El Grand Teton renueva el histórico Camino de la Cresta"
            description='"La unión de los senderos de la Cascada y del Cañón de la Muerte en sus picos tuvo lugar el 1 de octubre de 1933, y marcó el primer paso en la realización de un plan por el que el...'
            source="National parks traveler"
            loggedIn={props.loggedIn}
          />
        </div>
        <button className="search-results-btn" onClick>
          Ver más
        </button>
      </div>
    </section>
  );
}

export default SearchResults;
