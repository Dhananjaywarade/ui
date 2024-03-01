import { useState } from 'react'
import * as React from 'react';

const useCounter = () => {

    const [count, setCount] = useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decerement=()=>{
        setCount(count-1);
    }

  return {count,increment,decerement};
}

export {useCounter};