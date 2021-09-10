import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../components/Alert/Alert';
import { AiOutlineArrowRight as ArrowRightIcon } from 'react-icons/ai';
import { ItemComment } from '../../components/ItemComment/ItemComment';
import { BackButton, ItemAuthor, ItemDetailWrapper, ItemTitle } from '../../styles/itemdetail/itemDetail';
import { AppState, CommentType } from '../../redux/types/types';
import { loadStory } from '../../redux/items/itemsActions';



interface DetailParamsType {
  objectID: string | undefined;
}

interface ItemDetailProps { }

const ItemDetail: React.FC<ItemDetailProps> = ({ }) => {

  let { objectID } = useParams<DetailParamsType>();

  const history = useHistory();
  const dispatch = useDispatch();


  const currentStory = useSelector((state: AppState) => state.itemsReducer.currentStory);
  const itemComments = useSelector((state: AppState) => state.itemsReducer.itemComments);

  useEffect(() => {
    if (objectID) dispatch(loadStory(objectID));
  }, [dispatch, objectID])


  return (
    <div className="ItemDetail">
      {currentStory && (
        <>
          <ItemDetailWrapper>
            <BackButton onClick={() => history.goBack()}>Go Back</BackButton>
            <ItemTitle>{currentStory.title}</ItemTitle>
            <ItemAuthor>By: {currentStory.by}</ItemAuthor>
            <a href={currentStory.url} rel="noreferrer" target="_blank">Read the whole story <ArrowRightIcon /> </a>
          </ItemDetailWrapper>
          <Alert />
          <div style={{ marginTop: "10rem" }}>

            {itemComments && itemComments.length > 0 && itemComments.map((comment: CommentType) => (
              <div className="Comment-Wrapper" key={comment.id.toString()} style={{ margin: "1rem 0" }}>
                <ItemComment comment={comment} level={0} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
export default ItemDetail;