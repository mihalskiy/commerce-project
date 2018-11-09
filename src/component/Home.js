import React, {Component} from 'react';
import Button from "@material-ui/core/Button/Button";
export default class Home extends Component {


    render() {
        return (
            <div>
                <div className="img-with-item">
                    <div className="nav-img"></div>
                    {/*<div className="bottom-left">Bottom Left</div>
                  <div className="top-left">Top Left</div>
                  <div className="top-right">Top Right</div>
                  <div className="bottom-right">Bottom Right</div>*/}
                    <div className="centered">
                        <Button variant="extendedFab" aria-label="Delete" className="button">
                            НАШИ РОБОТЫ
                        </Button>
                        <Button variant="extendedFab" aria-label="Delete" className="button">
                            НАНИМАЙТЕ НАС, ЧТОБЫ ПОМОЧЬ
                        </Button>
                        <Button variant="extendedFab" aria-label="Delete" className="button">
                            ЗАКАЖИТЕ ОДИН ИЗ НАШИХ ПАКЕТОВ
                        </Button>
                    </div>
                </div>

                <div className="info">
                    <h2>Зачаем?</h2>
                    <p>Бренды приносят рекламные возможности внутри компании, маркетологи используют экспертов для проектной
                        работы. Новая реальность заключается в том, что клиенты сокращают расходы, но хотят творчества
                        агентства на уровне агентства. Для тех клиентов мы создали BrainWith.</p>
                </div>

                <div className="align-info">
                    <div className="info-with-item">
                        <img src={require('../img/create-site.jpg')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>

                    <div className="info-with-item">
                        <img src={require('../img/create-site2.jpg')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>
                </div>

                <div className="info">
                    <h2>Снимайте объявления самостоятельно</h2>
                    <p>Новая реальность требует для предпринимательских внештатных объявлений. Работа непосредственно для клиентов означает возможность вести переговоры о расходах, нанимать других для работы и управления проектом. Все объявления выбираются только приглашением.</p>
                </div>

                <div className="catalog">
                    <div className="catalog-item ">
                        <img src={require('../img/create-site.jpg')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>

                    <div className="catalog-item">
                        <img src={require('../img/create-site2.jpg')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>
                    <div className="catalog-item">
                        <img src={require('../img/create-site.jpg')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>

                    <div className="catalog-item">
                        <img src={require('../img/create-site2.jpg')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>
                    <div className="catalog-item">
                        <img src={require('../img/create-site.jpg')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>

                    <div className="catalog-item">
                        <img src={require('../img/create-site2.jpg')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>
                    <div className="catalog-item">
                        <img src={require('../img/create-site.jpg')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>

                    <div className="catalog-item">
                        <img src={require('../img/create-site2.jpg')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>
                </div>


                <div className="info">
                    <h2>Связаться с нами</h2>
                    <p>Мы также можем управлять вашим проектом. Наша команда имеет многолетний опыт работы в качестве креативных директоров и в качестве одного из ведущих мировых рекламных агентств, плюс мы знаем все объявления на платформе лично. Мы будем работать над BrainWith для вас. Всегда экономно, потому что на BrainWith вы можете приобрести креативность по часам.</p>
                </div>

                <div className="align-info">
                    <div className="info-with-item">
                        <img src={require('../img/create.png')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>

                    <div className="info-with-item">
                        <img src={require('../img/create2.png')} alt="create-site"/>
                        <a href="/">Как работает просмотр аудио / видео?</a>
                    </div>
                </div>



            </div>
        )
    }
}
