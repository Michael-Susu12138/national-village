import "./Card.css";

const Card = (props) => {
  // name, discount, summary, rating, location, tags, imgURL;

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={props.imgURL} alt="rover" />
        </div>
        <div className="card-body">
          <div className="tag-list">
            {props.tags.map((tag, index) => (
              <span key={index} className="tag tag-teal">
                {tag}
              </span>
            ))}
          </div>
          <h4>{props.name}</h4>
          <p>{props.summary}</p>
          <div className="user">
            <img
              src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
              alt="user"
            />
            <div className="user-info">
              <h5>User 1</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card">
        <div className="card-header">
          <img
            src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg"
            alt="ballons"
          />
        </div>
        <div className="card-body">
          <span className="tag tag-purple">Popular</span>
          <h4>How to Keep Going When You Don’t Know What’s Next</h4>
          <p>
            The future can be scary, but there are ways to deal with that fear.
          </p>
          <div className="user">
            <img
              src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
              alt="user"
            />
            <div className="user-info">
              <h5>User 2</h5>
              <small>Yesterday</small>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img
            src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
            alt="city"
          />
        </div>
        <div className="card-body">
          <span className="tag tag-pink">Design</span>
          <h4>10 Rules of Dashboard Design</h4>
          <p>Dashboard Design Guidelines</p>
          <div className="user">
            <img
              src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
              alt="user"
            />
            <div className="user-info">
              <h5>User 3</h5>
              <small>1w ago</small>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
