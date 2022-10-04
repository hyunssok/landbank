/* eslint-disable jsx-a11y/media-has-caption */
import React, { FC, useState } from 'react';
import * as S from './styled';
import SearchBox from './searchBox/index';
import { point } from '@styles/globalStyles';
import { useWindowSize } from '@shared/hooks';
import YouTube from 'react-youtube';
import _ from 'lodash';
import { useEffect } from 'react';
import yotubeAPI from '@shared/apis/yotubeAPI';

const Sub: FC = () => {
	const { width } = useWindowSize();
	const [list, setList] = useState([]);
	const isMobile = width <= point;

	const getYoutubes9 = async () => {
		try {
			const { data } = await yotubeAPI.get();
			setList(data);
		} catch {
			alert('네트워크 오류 발생. 다시 시도해주세요.');
		}
	};

	useEffect(() => {
		getYoutubes9();
	}, []);

	return (
		<S.Container>
			{isMobile ? (
				<>
					<S.BgFigure />
					<SearchBox />
					<S.VideoBox>
						{list
							.filter((a: any, i: number) => i < 3)
							.map((item: any, i: number) => (
								<YouTube
									key={item.id}
									videoId={item.link}
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
						{list.map(({ id, link }) => (
							<YouTube
								key={id}
								videoId={link}
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
