

import React, { useState } from 'react'

const useDisable = () => {
    const [disable, setDisable] = useState(false);

    const disabledButton = () => {
       
        setTimeout(() => {
            setDisable(false)
        }, 2000);


        setDisable(true)
    }

  return [disable, disabledButton]
}

export default useDisable