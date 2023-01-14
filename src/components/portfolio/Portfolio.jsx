import './portfolio.css'
import ME from '../../assets/images/Placeholder.png'
import Technigram from '../../assets/images/Technigram.PNG'
import HL from '../../assets/images/HigherLower.PNG'

const Portfolio = () => {
    return (
        <section id={"portfolio"}>
            
            <h2>My Recent Work</h2>

            <div className={"container portfolio__container"}>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={Technigram} alt={''}/>
                    </div>
                    <h3>Technigram</h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com/PeteChicchetti/technigram"} className={'btn'} target={'_blank'}>Github</a>
                        <a href={"https://murmuring-depths-50021.herokuapp.com"} className={'btn btn-primary'} target={"_blank"}>Demo</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={HL} alt={''}/>
                    </div>
                    <h3>Higher or Lower: Artist Edition</h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com/StyngerBee/higherlower"} className={'btn'} target={'_blank'}>Github</a>
                        <a href={"https://styngerbee.github.io/higherlower/"} className={'btn btn-primary'} target={"_blank"}>Demo</a>
                    </div>
                </article>
                
                
                

            </div>

        </section>
    )
}

export default Portfolio