import './detail.css';

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="user-img" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor, sit amet</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="arrow" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="arrow" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="arrow" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://pbs.twimg.com/media/Fn5qjz9WQAAXUgE.jpg" alt="img" />
              <span>photo_2024.png</span>
              </div>
            <img className='icon' src="./download.png" alt="download-img" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://pbs.twimg.com/media/Fn5qjz9WQAAXUgE.jpg" alt="img" />
              <span>photo_2024.png</span>
              </div>
            <img className='icon' src="./download.png" alt="download-img" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://pbs.twimg.com/media/Fn5qjz9WQAAXUgE.jpg" alt="img" />
              <span>photo_2024.png</span>
              </div>
            <img className='icon' src="./download.png" alt="download-img" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="arrow" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Detail