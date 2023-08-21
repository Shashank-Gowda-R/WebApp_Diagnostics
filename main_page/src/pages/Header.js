import './Header.css';
import './mental.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import image1 from './mental-health-blog.jpg';
import image2 from './medical1.jpg';

function Header() {
  return (
    <>
      <div className="head">
        <header className="header">
          <div className="display">
            <div className="headerStyle fontFamily color">
              <a href='/'>
                INNOVATORS
              </a>
            </div>
            <div className='navigateButton fontFamily'>
              <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button className='buttonStyle' href='#top1'>MENTAL HEALTH</Button>
                <Button className='buttonStyle' href='#top2'>DIAGONSTIC</Button>
              </ButtonGroup>
            </div>
          </div>
        </header>
        <div className='quote'>
          <div className='quoteStyle'>
            INVEST TODAY TO HAVE BETTER RETURNS IN FUTURE
          </div>
          <div className='tagline fontFamily'>
            Extending health care... At your hand tip
          </div>
        </div>
        <div class="containerMain" >
          <div class="row" className='section'>
            <div class="col" className='container'><b>TIP 1</b>
              <div className='tagLine'>
                Invest in your health. No invest is better than in Health, it will give you better return in long run. No amount of money can give back your healthy life
              </div></div>
            <div class="col" className='container'><b>TIP 2</b>
              <div className='tagLine'>
                Meditation is the practice of focusing one’s mind for a period of time. While there are many forms of meditation, a common result is a feeling of relaxation and inner peace, which can improve mental health
              </div></div>
            <div class="col" className='container'><b>TIP 3</b>
              <div className='tagLine'>
                Dance around while you do your housework. Not only will you get chores done, but dancing reduces levels of cortisol (the stress hormone), and increases endorphins (the body's "feel-good" chemicals).
              </div></div>
          </div>
        </div>
        <div id='top2'>
        </div>
      </div>

      <div className='diagnostic' >
        <div className='display'>
          <div className='mentalQuote' >
            <div>
              Click below button to know your report result
            </div>
            <div>
              <Button className='buttonStyle2' variant='outlined'>
                <a href='./diagnostic'>
                  Check...
                </a>
              </Button>
            </div>
          </div>
          <div className='image2'>
            <img alt='...' src={image2} ></img>
          </div>
        </div>
      </div>
      <div className='mentalHealth' id='top1'>
        <div className='display'>
          <div className='mentalQuote'>
            <div>
              Click below button to know about the metal health related issues
            </div>
            <div>
              <Button className='buttonStyle2' variant='outlined'>
                <a href='/mentalHealth'>
                  Explore Me
                </a>
              </Button>
            </div>
          </div>
          <div className='image1'>
            <img alt='...' src={image1} ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
