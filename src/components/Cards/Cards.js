import React from "react";
import "./Cards.scss";

function Cards(props) {
  console.log(props);
  let styles = { width: "18rem" };
  return (
    <div>
      <h1>Cards Component</h1>
      {/* create deck of cards using react-spring, each card displaying a topic
                if swipe right it opens the topic, then the topic component will render based on
                which card is swiped right topic_id. Then a grid of cards where the question is displayed
                and the answer will be shown on click with a modal or sweetalert2 */}

      {/* using bootstrap, I know, I know...but, I need to use it more because companies use it */}
      <div className="col-md-auto">
        <div className="card " style={styles}>
          <div className="card-body ">
            <h5 className="card-title text-center Cards--title">Title</h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis excepturi, magni labore rerum ea tenetur cum nobis
              porro impedit aliquid sit dicta nam quia laboriosam minima
              quisquam facere qui non quasi id dolor! Itaque at, nisi aperiam
              explicabo, eligendi excepturi culpa eius ex quaerat iusto
              voluptates! Dicta non aliquid quaerat.
            </p>
            <button className="btn btn-primary">Test</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
