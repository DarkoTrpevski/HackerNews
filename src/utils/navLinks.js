import { TiDocumentText as DocumentIcon } from 'react-icons/ti';
// import { IoDocumentTextOutline as DocumentIcon } from 'react-icons/io';
import { MdPeopleOutline as PersonIcon } from 'react-icons/md';
import { AiOutlineFire as FireIcon, AiOutlineBulb as BulbIcon, AiOutlineStar as StarIcon } from 'react-icons/ai';
import { BiKey as KeyIcon } from 'react-icons/bi';
import { FaRegComment as CommentIcon } from 'react-icons/fa';
import { GiBreakingChain as ChainIcon } from 'react-icons/gi';


export const navigationLinks = [
  { title: "All", url: "/", icon: <DocumentIcon /> },
  { title: "Hot", url: "/", icon: <FireIcon /> },
  { title: "Show HN", url: "/", icon: <KeyIcon /> },
  { title: "Ask HN", url: "/", icon: <CommentIcon /> },
  { title: "Polls", url: "/", icon: <BulbIcon /> },
  { title: "Jobs", url: "/", icon: <ChainIcon /> }
]
export const miscNavigationLinks = [
  { title: "Shipow", url: "/", icon: <PersonIcon /> },
  { title: "Starred", url: "/", icon: <StarIcon /> }
]