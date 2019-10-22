/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import queryString from 'query-string';
import styles from './Reader.module.css';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import publications from '../../publications.json';

export default class Reader extends Component {
  static defaultProps = {
    counter: 1,
  };

  state = {
    counter: this.props.counter,
  };

  componentDidMount() {
    const { history, location } = this.props;
    const { counter } = this.state;
    const query = Number(queryString.parse(location.search).item);

    if (query !== counter) {
      this.setState(
        {
          counter: query,
        },
        () => {
          history.push({
            path: '/reader',
            search: `?item=${query}`,
          });
        },
      );
    }
  }

  componentDidUpdate() {
    const { location } = this.props;
    const { counter } = this.state;
    const query = Number(queryString.parse(location.search).item);

    if (query !== counter) {
      this.setState({
        counter: query,
      });
    }
  }

  increaseCounter = () => {
    const { history } = this.props;
    const { counter } = this.state;

    this.setState(
      prevState => ({
        counter: prevState.counter - 1,
      }),
      () => {
        history.push({
          path: '/reader',
          search: `?item=${counter - 1}`,
        });
      },
    );
  };

  reduceCounter = () => {
    const { history } = this.props;
    const { counter } = this.state;

    this.setState(
      prevState => ({
        counter: prevState.counter + 1,
      }),
      () => {
        history.push({
          path: '/reader',
          search: `?item=${counter + 1}`,
        });
      },
    );
  };

  render() {
    const maxCounter = publications.length;
    const { counter } = this.state;
    const currentItem = publications[counter - 1];

    return (
      <div className={styles.reader}>
        <Controls
          increaseCounter={this.increaseCounter}
          reduceCounter={this.reduceCounter}
          counter={counter}
          maxCounter={maxCounter}
        />
        <Counter counter={counter} maxCounter={maxCounter} />
        <Publication item={currentItem} counter={counter} />
      </div>
    );
  }
}
