import React from "react";
import Header from "../Header/Header";
import "./SavedNews.css";
import Card from "../Cards/Cards.jsx";
import "../SearchResults/search-results.css";

function SavedNews(props) {
  function signOut() {
    props.signOut();
  }

  return (
    <section className="saved-news">
      <Header loggedIn={props.loggedIn} signOut={signOut} name={props.name} />
      <div className="saved-news__wraper">
        <p className="saved-news__text">Artículos guardados</p>
        <h2 className="saved-news__tittle">
          {`${props.name}, tienes ${
            props.cards /*.length*/
          } articulos guardados`}
        </h2>
        <p className="saved-news__tags">
          Por palabras clave:{" "}
          <span className="saved-news__tags-span">
            Naturaleza, Yellowstone, y 2 más
          </span>
        </p>
      </div>
      <div className="saved-news__news search-results__cards">
        <Card
          pic="https://s3-alpha-sig.figma.com/img/4957/e141/913be15f4578b8bf783bb0006de83c18?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i70DGQ8DFtajUMmFhEpSS0c53AA6bKC8Ydd1ie3EQGOUiCWCYY2eL27O~-8u9ECvodQ62Lbfat~TEIA5aGaoOoqBgL-fKK3TJx4rIsYGLfonT3TYeobMSnC4sL8Em1-2TfAr6V2EZ8Jkk53i1F8k56jC4kkCSox6K89X5orOPdINYgJanhlKzU3Z4Ja0l~acD~g24zmYqP0CHNDbf1fw8~YYppuou7d~9~aN8Nd9m068ruoeiMUvt9rB0MQP8h82EtTRDJFfimEc-KlhbG30N8bjAnFV3Qdbf7dWrfEkbZ2ql~L-fENPJ8TfTTwEaT2JkXISK5pjOXA4arDDw82hXg__"
          date="4 de noviembre de 2020"
          tittle="Todo el mundo necesita un lugar de reflexión en la naturaleza."
          description='Desde que leí el influyente libro de Richard Louv, "El último niño en el bosque", la idea de tener un "lugar de reflexión" especial para mi se me ha quedado grabada. Este consejo, que...'
          source="treehugger"
        />
        <Card
          pic="https://s3-alpha-sig.figma.com/img/4997/f747/6375f12d441c75d31f63eb3c64372a52?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I5Q5drGrV7hMuvwjISOfIqhYgWtooP45YlyxDevHVcaIYx0Q7ez4AyasB24644ihuECDqZSnZkjD12dqtgezs4TKXF26AuqzNFSUp2Jz6vIjyh5vFaQKttl2Rn5KSkOBmBWL9kIODdZTuQUgZ7FB~JlsO9gIIenGlyfdplXRkkBnwcDa4Jk~yU92iKFGmslYF5CKDr3NTd-rRKKXb1Ml2NdL8mMdGGUIttFm03z8LrehXSFAUnELJwn79ghJ75rYPesNj4VPQxqI45rjY1q-pH3LhhqbQRV00YRq-6~aazt-tamZ~EyTKUq90G5xYuGr-wjXzV9uzdHZo~rufZuIgw__"
          date="19 de febrero de 2019"
          tittle="La naturaleza te hace mejor"
          description="Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas."
          source="national geographic"
        />
        <Card
          pic="https://s3-alpha-sig.figma.com/img/8059/2684/40ed0f93d84ff0b8e5d5f433da74024b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gP1rUYBPUrnhpd2gUBHHORU1gSQ4hESxR8T82JLn2lJ9AMAMXq6nXeST00J19IZskd6VQn7A~YtCAxhumXE3QaUt2OAL21esfsMIXjgecXQgltCkr-E194F-j89QAvJrvspp3cDP28~wjmeOI26UpDeebfn-SKc5JxsG1eYtAdo4sDKHLtVOtSk38Zwfvttlt6wDO1c-GqKNrqGZHoFn14ES4eT-rMDoVCyDeF-IWtiG9O-L9WqmfWo1Cf~6U-LQgo2P886g1baCKp1NPA~bDaJxUxRepmbbGMhAfD6hRDMc3oT3jn-RUG28LKeoHso4~peQw4sBNTZuih~vvY31oQ__"
          date="19 de octubre de 2020"
          tittle="El Grand Teton renueva el histórico Camino de la Cresta"
          description='"La unión de los senderos de la Cascada y del Cañón de la Muerte en sus picos tuvo lugar el 1 de octubre de 1933, y marcó el primer paso en la realización de un plan por el que el...'
          source="National parks traveler"
        />
        <Card
          pic="https://s3-alpha-sig.figma.com/img/df86/0608/9b1999730fd94a13f4ba11ff0aaa9019?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eH3t2zi~RlFKQkBKYsZAp0MAtRWdnvmXQw4pmFGyjdPefmuCyqh0LAZ9r4N9CSs4OEioKDNSzQhokAuGWSKJTA1376JTO11zfkrBxqHP3ksPy-dxabWDlrOvP~5~ylidNoi7WiAZDJgGYxMHKWxkY5JPikZ2vpyYOV3zAiTLzAHML96jQhES3cmnUNQcWOyx7L2qli78-jZjaHC6lFNOwQS4k9r03oTUclKA-Y3f8j3jsDX4XRdmqakuBpgZGej9G-HPLPqP-IkOhZ8v0aUopd~M9ozyH~SH6LZfBFk7tC~idXcq0ryAPKB6A3EIFbkmZmH~GujXC2a83I0E2tY7MQ__"
          date="19 de octubre de 2020"
          tittle="Fotos nostálgicas hechas por turistas en los parques nacionales de Estados Unidos"
          description="Uri Løvevild Golman y Helle Løvevild Golman son exploradores de National Geographic y fotógrafos de conservación que acaban de completar un proyecto y un libro que llaman su..."
          source="national geographic"
        />
        <Card
          pic="https://s3-alpha-sig.figma.com/img/b063/c461/a67cbf0319e070ab9350988aac5772d8?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7cSNU82TKjsjsQOQ7nX62rLUfNqwlDNyhDioveOAusMiUazfyc-HErD45C237TCNqMXL0oWGLBydxjE8fUAR6C~2pX0xPjdf7Xqc0IflPBrElysJGGOAkiq6OhE1UYXW9ngUvMA24lTrD3m8fJy-jrRhdDFegqSx3C7BmsH2rhl~WUty59K8DF3z7Ocr7ApFYagxWIduROQ7Iri4bz562Y8lhH3MFsR1fgZYeOtLuClXBBPOMRytTLDi6VMFgO6sOq-UBPv9GlJXlpfB6URorJnpbvynhs26wD5AXX22IDtFCAMz7Aq1vV7hr1IN5hbTDJWoo~Lvp2zy4vYyTax9g__"
          date="16 de marzo de 2020"
          tittle="Los científicos no saben por qué la estrella polar es tan extraña"
          description="Los seres humanos se han basado durante mucho tiempo en el cielo estrellado para adentrarse hacia nuevas fronteras, navegar hasta el fin del mundo y encontrar el camino de vuelta..."
          source="treehugger"
        />
      </div>
    </section>
  );
}

export default SavedNews;
