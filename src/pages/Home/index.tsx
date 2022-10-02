/* eslint-disable import/no-unresolved */
import { Info, InfoTwo, Main, Sub } from '@components/index';
import React, { FC } from 'react';
import * as S from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './swiper-css/styled.css';

import { Mousewheel, Pagination } from 'swiper';

const Home: FC = () => {
	return (
		<S.Container>
			<Swiper
				direction="vertical"
				slidesPerView={1}
				spaceBetween={30}
				mousewheel
				pagination={{
					clickable: true,
				}}
				modules={[Mousewheel, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Main />
				</SwiperSlide>
				<SwiperSlide>
					<Sub />
				</SwiperSlide>
				<SwiperSlide>
					<Info />
				</SwiperSlide>
				<SwiperSlide>
					<InfoTwo />
				</SwiperSlide>
			</Swiper>
		</S.Container>
	);
};

export default Home;
