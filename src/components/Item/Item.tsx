import React from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import { BsClock as ClockIcon } from 'react-icons/bs'
import { IoMdHeartEmpty as HeartIcon } from 'react-icons/io'
import { calcDate } from "../../utils/getDate";
import { ItemType } from "../../redux/types/types";
import { ItemContainer } from "../../styles/Items/itemsStyle";
import "./Item.css";


interface ItemProps {
  item: ItemType;
}

export const Item: React.FC<ItemProps> = ({ item }) => {

  const { title, objectID, author, created_at_i, points, num_comments, story_text } = item;


  return (
    <ItemContainer className="Item">
      <div className="Item_container">
        <div className="Item_data">
          <div className="Item_title">
            <Link to={`/story/${objectID}`}>
              {title}
            </Link>
          </div>
          <div className="Item_meta" style={{ display: "flex", alignItems: "center", fontSize: "1.2rem" }}>
            <HeartIcon fontSize="20px" />
            <span>{points} points</span>
            <span className="Item_separator">|</span>
            <span>{num_comments} comments</span>
            <span className="Item_separator">|</span>
            <span>By {author}</span>
            <span className="Item_separator">|</span>
            <ClockIcon fontSize="15px" />
            <span>{calcDate(created_at_i)}</span>
            <span className="Item_separator">|</span>
            <a href={item.url} target="_blank" rel="noreferrer" style={{ color: "blue" }}>{item && item.url && item.url.substr(0, 30).concat('...')}</a>
          </div>
          {story_text && (
            <div className="Item_comment">
              <span>
                {story_text && parse(story_text)}
              </span>
            </div>
          )}
        </div>
      </div>
    </ItemContainer>
  );
}