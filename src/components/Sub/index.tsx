/* eslint-disable jsx-a11y/media-has-caption */
import Image from '@components/Image';
import React, { FC } from 'react';
import * as S from './styled';
import SearchBox from './searchBox/index';
import { point } from '@styles/globalStyles';
import { useWindowSize } from '@shared/hooks';
import YouTube from 'react-youtube';
import { unit } from '@shared/utils/base';
import _ from 'lodash';

const IMG_YOUTUBE = 'youtube.png';

const Sub: FC = () => {
	const { width } = useWindowSize();
	const mobilePoint = width <= point;
	return (
		<S.Container>
			{mobilePoint ? (
				<>
					<S.BgFigure />
					<SearchBox />
					<S.VideoBox>
						{_.range(0, 3).map((i: number) => (
							<YouTube
								key={i}
								videoId="01mms0B7QCY"
								className="youtubeVideo"
								opts={{
									playerVars: {
										autoplay: 0,
										rel: 0,
										modestbranding: 1,
									},
								}}
								onEnd={(e) => {
									e.target.stopVideo(0);
								}}
							/>
						))}
					</S.VideoBox>
					<S.BgFigure />
				</>
			) : (
				<S.InnerArticle>
					<S.BgFigure />
					<S.VideoBox>
						{_.range(0, 9).map((i: number) => (
							<YouTube
								key={i}
								videoId="01mms0B7QCY"
								className="youtubeVideo"
								opts={{
									playerVars: {
										autoplay: 0,
										rel: 0,
										modestbranding: 1,
									},
								}}
								onEnd={(e) => {
									e.target.stopVideo(0);
								}}
							/>
						))}
					</S.VideoBox>
					<SearchBox />
				</S.InnerArticle>
			)}
		</S.Container>
	);
};

export default Sub;
