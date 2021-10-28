import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppState, Favorite } from '../../types/types';
import { removeFavorite } from '../../redux';
import addFavorite from '../../redux/actions/favorites';
import { useSelector } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';

const AddButton = ({ name }: any) => {
  const [add, setAdded] = useState<boolean>(false);
  const dispatch = useDispatch();
  var favoriteList = useSelector((state: AppState) => state.favorites.inCart);
  
  // console.log(favoriteList)
  useEffect(() => {           //use to set the state Add button when switch between page
    const check = () => {
      if (favoriteList.find((c) => c.name === name)) {
        setAdded(!add);
      }
    };
    
    
    
    check();
  }, []);

  // var storedNames = JSON.parse(localStorage.names);
  // console.log(storedNames.name.)
  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    let favorite: Favorite = {
      id: (+new Date()).toString(),
      name: name,
      flags: 'flag',
    };
    dispatch(addFavorite(favorite));
    // localStorage.setItem("favNames", JSON.stringify(favoriteList));
    setAdded(!add);

    if (favoriteList.find((c) => c.name === favorite.name)) { //remove country if already added
      dispatch(removeFavorite(favorite));
      setAdded(!add);
    }
  };

  // const cart = window.localStorage.getItem('state')
  if (add) return <p>Added</p>;
  else
    return (
      <button onClick={handleFavorite}>
        <AddIcon />
      </button>
    );
};

export default AddButton;
