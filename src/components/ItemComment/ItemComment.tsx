import axios from 'axios'
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import { FaSquareFull as SquareIcon } from 'react-icons/fa'
import { calcDate } from '../../utils/getDate';
import { CommentType } from '../../redux/types/types';
import { Comment, Text, AuthorWrapper, IconWrapper, Author, DateOfPost } from '../../styles/itemdetail/itemDetail';



interface ItemCommentProps {
  comment: CommentType;
  level: number;
}

export const ItemComment: React.FC<ItemCommentProps> = ({ comment, level }) => {

  const [kidsComments, setKidsComments] = useState<CommentType[]>([]);

  const checkKidComments = () => {
    initKidsComments(comment.kids)
  }

  useEffect(() => {
    comment && comment.kids && checkKidComments();
    // eslint-disable-next-line
  }, [])


  const initKidsComments = async (kidsIDs: string[]) => {
    try {
      const promises = kidsIDs.map((kid) => axios.get(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`).then((response) => response.data));
      const result = await Promise.all(promises);
      setKidsComments(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Comment className={`Comment-level-${level}`}>
      <AuthorWrapper className="AuthorWrapper">
        <IconWrapper>
          <SquareIcon fontSize="15px" color={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
          <span>{comment && comment.by && comment.by.charAt(0).toUpperCase()}</span>
        </IconWrapper>
        <Author>
          <p>{comment && comment.by && comment.by}</p>
        </Author>

        <DateOfPost>
          <span>-</span>
          {calcDate(comment.time)}
        </DateOfPost>
      </AuthorWrapper>
      <Text>
        {comment && comment.text && parse(comment.text)}
      </Text>
      {kidsComments && kidsComments.length > 0 && kidsComments.map((kidComment) => (
        <ItemComment key={kidComment.id} comment={kidComment} level={level + 1} />
      ))}
    </Comment>
  )
}