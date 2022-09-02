import React, { useEffect, useState } from 'react';

const useDaumMap = () => {
	const { daum } = window;
	const [zoneCode, setZoneCode] = useState('');
	const [roadAddress, setRoadAddress] = useState('');
	const [buildingName, setBuildingName] = useState('');

	useEffect(() => {
		return () => {
			new daum.Postcode().close();
		};
	}, []);

	const handleMap = () => {
		new daum.Postcode({
			oncomplete: (data) => {
				if (data) {
					setRoadAddress(data.roadAddress);
				}
			},
		}).open();
	};

	return {
		zoneCode,
		roadAddress,
		buildingName,
		handleMap,
		setRoadAddress,
	};
};

export default useDaumMap;
