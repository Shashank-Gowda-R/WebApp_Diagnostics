import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import './Header.css';
import './mental.css';
import mentalHealth from './MentalHealth';
import diagnostic from './Diagnostic';
import chatbot from './chatbot.png';
import video from './video.jpg';
import fact from './facts.jpg';



export default function MentalHealth() {

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
                                <Button className='buttonStyle' href='./mentalHealth'>MENTAL HEALTH</Button>
                                <Button className='buttonStyle' href='./diagnostic'>DIAGONSTIC</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </header>
                <div className='quote'>
                    <div className='quoteStyle'>
                        You are not alone. You are seen. I am with you. You are not alone
                    </div>
                    <div className='tagline fontFamily'>
                        Your privacy is our responsibility
                    </div>
                </div>
                <div class="containerMain" >
                    <div class="row" className='section'>
                        <div class="col" className='container'>
                            <b>TIP 1</b>
                            <div className='tagLine'>
                                Take time to laugh. Hang out with a funny friend, watch a comedy or check out cute videos online. Laughter helps reduce anxiety. Do something you're good at to build self-confidence, then tackle a tougher task.
                            </div>
                        </div>
                        <div class="col" className='container'><b>TIP 2</b>
                            <div className='tagLine'>
                                Meditation is the practice of focusing one’s mind for a period of time. While there are many forms of meditation, a common result is a feeling of relaxation and inner peace, which can improve mental health
                            </div>
                        </div>
                        <div class="col" className='container'><b>TIP 3</b>
                            <div className='tagLine'>
                                Dance around while you do your housework. Not only will you get chores done, but dancing reduces levels of cortisol (the stress hormone), and increases endorphins (the body's "feel-good" chemicals).
                            </div>
                        </div>
                    </div>
                </div>
                <div className='resources'>
                    <div>
                        Get access to our resources
                    </div>
                    <div class="containerMain" >
                        <div class="row" className='section'>
                            <div class="col" className='container'>
                                <img src={chatbot} />
                                <div className='tagLine center'>
                                    Your personal physiatrist(DHI)
                                </div>
                                <Button className='buttonStyle3' variant='outlined'>
                                    <a href='http://127.0.0.1:5000/'>
                                        Chat
                                    </a>
                                </Button>
                            </div>
                            <div class="col" className='container'>
                                <img src={fact} />
                                <div className='tagLine center'>
                                    Facts on mental health
                                </div>
                                <Button className='buttonStyle3' variant='outlined'>
                                    <a href='http://127.0.0.1:5000/'>
                                        Read
                                    </a>
                                </Button>
                            </div>
                            <div class="col" className='container'>
                                <img src={video} />
                                <div className='tagLine center'>
                                    Connect to physiatrist
                                </div>
                                <Button className='buttonStyle3' variant='outlined'>
                                    <a href='http://127.0.0.1:5000/'>
                                        Conect
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// export default Diagnostic;
