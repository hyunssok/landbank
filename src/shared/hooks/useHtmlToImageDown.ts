import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { isMobileSafari } from 'react-device-detect';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

const useHtmlToImgDown = (prefixTitle: string, setIsBusy: any): any => {
	const pngTarget = useRef<any>(null);

	const onButtonClick = useCallback(
		(certNumber: number) => {
			if (pngTarget.current === null) {
				return;
			}
			setIsBusy(true);
			if (!isMobileSafari) {
				toPng(pngTarget.current, { cacheBust: false })
					.then((dataUrl: string) => {
						download(dataUrl, `${prefixTitle}${certNumber}.png`);
					})
					.catch((err: Error) => {
						console.log(err);
					})
					.finally(() => {
						setIsBusy(false);
					});
			} else {
				html2canvas(pngTarget.current).then((canvas) => {
					canvas.toBlob((blob) => {
						if (blob) {
							setTimeout(() => {
								saveAs(blob, `${prefixTitle}${certNumber}.png`);
								setIsBusy(false);
							}, 1000);
						}
					});
				});
			}
		},
		[pngTarget],
	);

	return { pngTarget, onButtonClick };
};

export default useHtmlToImgDown;
