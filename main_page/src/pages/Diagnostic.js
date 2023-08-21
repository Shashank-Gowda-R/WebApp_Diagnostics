import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import './Header.css';
import './Diagnostic.css';
import heart from './heart.png';
import kidney from './kidney.png';
import liver from './liver.png';
import cancer from './cancer.webp';
import sugar from './diabetes.jpg';
import mentalHealth from './MentalHealth';
import diagnostic from './Diagnostic';

export default function Diagnostic() {

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
                        Health is not valued until sickness comes
                    </div>
                    <div className='tagline fontFamily'>
                        Use our platform, save your life and also money
                    </div>
                </div>
                <div class="containerMain" >
                    <div class="row" className='section'>
                        <div class="col" className='container'>
                            <img src={kidney}></img>
                            <div className='imageInfo'>
                                Know Your Chances Of Getting Kidney Diseases In One Click!
                                <Button className='buttonStyle3' variant='outlined'>
                                    <a href='http://127.0.0.1:1000/'>
                                        Predict
                                    </a>
                                </Button>
                            </div>

                        </div>
                        <div class="col" className='container'>
                            <img src={heart}></img>
                            <div className='imageInfo'>
                                Know Your Chances Of Getting Heart Diseases In One Click!
                                <Button className='buttonStyle3' variant='outlined'>
                                    <a href='http://127.0.0.1:2000/'>
                                        Predict
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div class="col" className='container'>
                            <img src={cancer}></img>
                            <div className='imageInfo'>
                                Know Your Chances Of Getting Breast cancer In One Click!
                                <Button className='buttonStyle3' variant='outlined'>
                                    <a href='http://127.0.0.1:3000/'>
                                        Predict
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div class="row" className='section2'>
                        <div class="col" className='container2'>
                            <img src={sugar}></img>
                            <div className='imageInfo'>
                                Know Your Chances Of Getting Diabetes(sugar) In One Click!
                                <Button className='buttonStyle3' variant='outlined'>
                                    <a href='http://127.0.0.1:4000/'>
                                        Predict
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div class="col" className='container2'>
                            <img src={liver}></img>
                            <div className='imageInfo'>
                                Know Your Chances Of Getting Liver Diseases In One Click!
                                <Button className='buttonStyle3' variant='outlined'>
                                    <a href='http://127.0.0.1:5000/'>
                                        Predict
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
