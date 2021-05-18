import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import avatar from '../images/icon.png';

// styles
const pageStyles = {
  backgroundColor: "#0A0C1B",
  fontFamily: "Verdana"
}
const cardStyles = {
  backgroundColor: "#1C1938",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}
const titleStyles = {
  color: "#A95FD4"
}
const descriptionStyles = {
  color: "#FFFFFF"
}
const linksStyles = {
  alignContent: "center",
  display: "flex",
  justifyContent: "space-between",
  listStyleType: "none",
  padding: "0"
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Carolina Melo - @caroolpmelo</title>
      <div style={cardStyles}>
        <div>
          <h1 style={titleStyles}>Carolina Melo</h1>
          <div style={descriptionStyles}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div>
            <ul style={linksStyles}>
              <li>Linkedin</li>
              <li><i class="fab fa-github-square"></i></li>
              <li>Insta</li>
              <li>
                <i alt="CodePen" title="CodePen" class="fab fa-codepen"></i>
                <FontAwesomeIcon icon={'coffee'}/>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={avatar} alt="Myself :)" />
        </div>
      </div>
    </main>
  )
}

export default IndexPage
