import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
	<ContentLoader
		speed={0}
		width={734}
		height={419}
		viewBox="0 0 734 449"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="167" y="18" rx="10" ry="10" width="270" height="27" />
		<circle cx="70" cy="70" r="66" />
		<rect x="489" y="18" rx="10" ry="10" width="147" height="27" />
		<rect x="167" y="75" rx="10" ry="10" width="126" height="30" />
		<rect x="167" y="157" rx="10" ry="10" width="420" height="48" />
		<rect x="167" y="252" rx="10" ry="10" width="100" height="17" />
		<rect x="167" y="283" rx="10" ry="10" width="142" height="19" />
		<rect x="167" y="315" rx="10" ry="10" width="172" height="25" />
		<rect x="187" y="373" rx="10" ry="10" width="171" height="27" />
		<rect x="187" y="410" rx="10" ry="10" width="171" height="27" />
		<rect x="430" y="373" rx="10" ry="10" width="171" height="27" />
		<rect x="430" y="410" rx="10" ry="10" width="171" height="27" />
	</ContentLoader>
);

export default Skeleton;
