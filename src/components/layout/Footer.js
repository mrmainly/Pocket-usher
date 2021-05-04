import React from 'react';
import PropTypes from 'prop-types';

import { Container, } from '@material-ui/core';

export default function Footer(props) {
    return (
        <footer className="footer py-8 py-md-11 border-multicolor" style={{ backgroundColor: '#094876', paddingTop: 50, paddingBottom: 50 }}>
            {/* <Container>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="font-family-serif text-white mb-1">
                                Pocket medic
              </h2>
                            <p className="text-white">
                                Все, что нужно для здоровья.
              </p>
                        </div>
                        <div className="col-6 col-md">
                            <h6 className="text-uppercase text-white mb-3 mb-md-5">
                                Главная
              </h6>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <a className="text-white" href="#!">Функционал</a>
                                </li>
                                <li className="mb-3">
                                    <a className="text-white" href="#!">Оставить отзыв</a>
                                </li>
                                <li>
                                    <a className="text-white" href="#!">Миссия</a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-6 col-md">
                            <h6 className="text-uppercase text-white mb-3 mb-md-5">
                                О приложении
              </h6>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <a className="text-white" href="#!">Главная</a>
                                </li>
                                <li className="mb-3">
                                    <a className="text-white" href="#!">Возможности</a>
                                </li>
                                <li className="mb-3">
                                    <a className="text-white" href="#!">Акции</a>
                                </li>
                                <li>
                                    <a className="text-white" href="#!">Видео</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h6 className="text-uppercase text-white mb-3 mb-md-5">
                                Блог
              </h6>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <a className="text-white" href="#!">Команда</a>
                                </li>
                                <li className="mb-3">
                                    <a className="text-white" href="#!">СМИ о нас</a>
                                </li>
                                <li>
                                    <a className="text-white" href="#!">Ценности</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">


                            <h6 className="text-uppercase text-white mb-3 mb-md-5">
                                Связаться с нами
              </h6>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <a className="text-white" href="#!">Помощь</a>
                                </li>
                                <li className="mb-3">
                                    <a className="text-white" href="#!">Контакты</a>
                                </li>
                                <li className="mb-3">
                                    <a className="text-white" href="#!">Оставить отзыв</a>
                                </li>
                                <li>
                                    <a className="text-white" href="#!">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container> */}
        </footer>
    );
}

Footer.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};