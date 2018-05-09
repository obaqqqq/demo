/* @flow */
import React from 'react';
import './style.css';
import '../../styles/utils/common.css';

class RaceTable extends React.Component {

  render() {
    return (
      <div className='content'>
        <div className='header-content'>
          <ul>
            <li className='header-list'>
              <div className='race'>2R</div>
              <div className='grade'>A級</div>
            </li>
            <li className='header-list time-content'>
              <div className='deadline'>締切 10:47</div>
              <div className='start'>発走 10:52</div>
            </li>
            <li className='header-list vote-content'>
              <a href='#' className='vote-button'>投票する</a>
            </li>
          </ul>
        </div>
        <div className='boder-line'></div>
        <div className='middle-content'>
          <div className='button-content'>
            <a href='#' className='base-button'>出走表 詳細</a>
            <a href='#' className='base-button middle-button'>狙い目</a>
            <a href='#' className='base-button last-button'>オッズ・人気</a>
          </div>
          <div>
            <table>
              <tbody>
                <tr className='table-list'>
                  <td className='table-title'>枠<br/>番</td>
                  <td className='table-title'>車<br/>番</td>
                  <td className='table-title base-title'>選手名<br/><span className='basic-data'>府県/年齢/期別/級班</span></td>
                  <td className='table-title'>競争<br/>得点</td>
                  <td className='table-title'>前回</td>
                  <td className='table-title'>着<br/>順</td>
                  <td className='table-title last-title'>予<br/>想</td>
                </tr>
                <tr className='table-data-list'>
                  <td className='table-data'>1</td>
                  <td className='car-num-1 table-data'>1</td>
                  <td className='name table-data'>小林 覚<div className='basic-data'>神奈川/55/56/A1</div></td>
                  <td className='table-data'>93.70</td>
                  <td className='table-data'>2日目<br/>4R</td>
                  <td className='table-data'>5</td>
                  <td className='table-data last-title'>◎</td>
                </tr>
                <tr className='table-data-list'>
                  <td className='table-data'>2</td>
                  <td className='car-num-2 table-data'>2</td>
                  <td className='name table-data'>鈴木 宏章<div className='basic-data'>栃　木/42/80/A2</div></td>
                  <td className='table-data'>93.70</td>
                  <td className='table-data'>2日目<br/>4R</td>
                  <td className='table-data'>5</td>
                  <td className='table-data last-title'>◎</td>
                </tr>
                <tr className='table-data-list'>
                  <td className='table-data'>3</td>
                  <td className='car-num-3 table-data'>3</td>
                  <td className='name table-data'>小林 覚<div className='basic-data'>神奈川/55/56/A1</div></td>
                  <td className='table-data'>93.70</td>
                  <td className='table-data'>2日目<br/>4R</td>
                  <td className='table-data'>5</td>
                  <td className='table-data last-title'>◎</td>
                </tr>
                <tr className='table-data-list'>
                  <td className='table-data' rowSpan='2'>4</td>
                  <td className='car-num-4 table-data'>4</td>
                  <td className='name table-data'>小林 覚<div className='basic-data'>神奈川/55/56/A1</div></td>
                  <td className='table-data'>93.70</td>
                  <td className='table-data'>2日目<br/>4R</td>
                  <td className='table-data'>5</td>
                  <td className='table-data last-title'>◎</td>
                </tr>
                <tr className='table-data-list'>
                  <td className='car-num-5 table-data'>5</td>
                  <td className='name table-data'>小林 覚<div className='basic-data'>神奈川/55/56/A1</div></td>
                  <td className='table-data'>93.70</td>
                  <td className='table-data'>2日目<br/>4R</td>
                  <td className='table-data'>5</td>
                  <td className='table-data last-title'>◎</td>
                </tr>
                <tr className='table-data-list'>
                  <td className='table-data' rowSpan='2'>5</td>
                  <td className='car-num-6 table-data'>6</td>
                  <td className='name table-data'>小林 覚<div className='basic-data'>神奈川/55/56/A1</div></td>
                  <td className='table-data'>93.70</td>
                  <td className='table-data'>2日目<br/>4R</td>
                  <td className='table-data'>5</td>
                  <td className='table-data last-title'>◎</td>
                </tr>
                <tr className='table-data-list'>
                  <td className='car-num-7 table-data'>7</td>
                  <td className='name table-data'>小林 覚<div className='basic-data'>神奈川/55/56/A1</div></td>
                  <td className='table-data'>93.70</td>
                  <td className='table-data'>2日目<br/>4R</td>
                  <td className='table-data'>5</td>
                  <td className='table-data last-title'>◎</td>
                </tr>
                <tr className='table-data-list'>
                  <td className='table-data' rowSpan='2'>6</td>
                  <td className='car-num-8 table-data'>8</td>
                  <td className='name table-data'>小林 覚<div className='basic-data'>神奈川/55/56/A1</div></td>
                  <td className='table-data'>93.70</td>
                  <td className='table-data'>2日目<br/>4R</td>
                  <td className='table-data'>5</td>
                  <td className='table-data last-title'>◎</td>
                </tr>
                <tr className='table-data-list'>
                  <td className='car-num-9 table-data'>9</td>
                  <td className='name table-data'>小林 覚<div className='basic-data'>神奈川/55/56/A1</div></td>
                  <td className='table-data'>93.70</td>
                  <td className='table-data'>2日目<br/>4R</td>
                  <td className='table-data'>5</td>
                  <td className='table-data last-title'>◎</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default RaceTable;
