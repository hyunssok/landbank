/* eslint-disable import/no-unresolved */
import { Info, InfoTwo, Main, Sub } from '@components/index';
import React, { FC, useRef, useState } from 'react';
import * as S from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './swiper-css/styled.css';

import { Mousewheel, Navigation, Pagination } from 'swiper';

const Home: FC = () => {
	const prevRef = useRef();
	const nextRef = useRef();
	const [isLast, setIsLast] = useState(false);

	return (
		<S.Container isLast={isLast}>
			<Swiper
				direction="vertical"
				slidesPerView={1}
				speed={1000}
				spaceBetween={0}
				mousewheel
				pagination={{
					clickable: true,
				}}
				modules={[Navigation, Mousewheel, Pagination]}
				className="mySwiper"
				onSlideChange={(ev: any) => setIsLast(() => ev.activeIndex === 3)}
				navigation={{
					prevEl: prevRef?.current,
					nextEl: nextRef?.current,
				}}
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
