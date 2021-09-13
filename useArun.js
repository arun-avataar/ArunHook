import React, { useState } from 'react';

function useArun(active = false) {
	const [ isActive, setIsActive ] = useState(active);

	return [ isActive, setIsActive ];
}

export default useArun;
