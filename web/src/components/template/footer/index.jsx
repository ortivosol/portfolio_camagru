import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ui_nav } from '../../../actions';

import { FiCompass, FiCamera, FiSearch, FiHeart } from 'react-icons/fi';

import './index.css';

function Footer() {
	const ui = useSelector(state => state.ui);
	const dispatch = useDispatch();

	return (
		<div className='footer'>
			<div className='container footer-container'>
				{ ui.nav === 0 || ui.nav === 1 ? <FiCompass className='footer-icon-active' onClick={() => dispatch(ui_nav(0))} /> : <FiCompass className='footer-icon' onClick={() => dispatch(ui_nav(0))} /> }
				{ ui.nav === 2 ? <FiSearch className='footer-icon-active' onClick={() => dispatch(ui_nav(0))} /> : <FiSearch className='footer-icon' onClick={() => dispatch(ui_nav(2))} /> }
				{ ui.nav === 3 ? <FiCamera className='footer-icon-active' onClick={() => dispatch(ui_nav(0))} /> : <FiCamera className='footer-icon' onClick={() => dispatch(ui_nav(3))} /> }
				{ ui.nav === 4 ? <FiHeart className='footer-icon-active' onClick={() => dispatch(ui_nav(0))} /> : <FiHeart className='footer-icon' onClick={() => dispatch(ui_nav(4))} /> }
			</div>
		</div>
	);
}

export default Footer;