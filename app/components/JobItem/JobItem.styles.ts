import { StyleSheet } from "react-native";

import { Layout, Colors, Font } from "style";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
    backgroundColor:Colors.white,
    borderRadius:12,
    paddingVertical:20,
    elevation:1,
  },
  location:{
    paddingHorizontal:20,
    display:"flex",
    flexDirection:"row",
    marginBottom:15,
  },
  locationGroup:{
    display:"flex",
    flexDirection:"column",
    marginLeft:14
  },
  location1:{
    fontFamily:Font.FontFamily.Poppin,
    fontWeight:"500",
    fontSize:Font.FontSize.Primary,
    lineHeight:Font.FontLineHeight.Secondary,
    color:Colors.blackGrey,
    marginBottom:4
  },
  location2:{
    fontFamily:Font.FontFamily.Poppin,
    fontWeight:"400",
    fontSize:Font.FontSize.Tertiary+2,
    lineHeight:Font.FontLineHeight.Tertiary,
    color:Colors.primary,
  },
  jobType:{
    position:"absolute",
    top:0,
    right:20,
    paddingHorizontal:12,
    paddingVertical:6,
    backgroundColor:Colors.orange,
    borderRadius:6,
    color:Colors.white,
    fontFamily:Font.FontFamily.Poppin,
    fontWeight:"400",
    fontSize:Font.FontSize.Tertiary + 2,
    lineHeight:Font.FontLineHeight.Tertiary,
    textAlignVertical:"center"
  },
  skills:{
    display:"flex",
    flexDirection:"row",
    paddingHorizontal:20,
    marginBottom:10
  },
  skill:{
    paddingHorizontal:10,
    paddingVertical:4,
    backgroundColor:Colors.transparent,
    borderRadius:6,
    borderWidth:1,
    borderColor:"#E1E3EA",
    color:Colors.lightGrey,
    fontFamily:Font.FontFamily.Poppin,
    fontWeight:"400",
    fontSize:Font.FontSize.Tertiary+2,
    lineHeight:Font.FontLineHeight.Tertiary,
    textAlignVertical:"center",
    marginRight:10
  },
  title:{
    paddingHorizontal:20,
    color:Colors.grey,
    fontFamily:Font.FontFamily.Poppin,
    fontWeight:"400",
    fontSize:Font.FontSize.Primary - 1 ,
    lineHeight:Font.FontLineHeight.Secondary,
    marginBottom:16,
  },
  otherInfos:{
    paddingHorizontal:20,
    display:"flex",
    flexDirection:"row",
    marginBottom:20
  },
  experienceGroup:{
    width:"50%",
    display:"flex",
    flexDirection:"row",
  },
  brainBorder:{
    borderColor:"#E5E5E5",
    borderWidth:1,
    borderRadius:20,
    paddingVertical:6,
    paddingHorizontal:8,
    width:29,
    height:29,
    marginRight:10
  },
  experienceTextGroup:{
    display:"flex",
    flexDirection:"column"
  },
  experienceTitle:{
    color:Colors.lightGrey,
    fontFamily:Font.FontFamily.Poppin,
    fontWeight:"400",
    fontSize:Font.FontSize.Tertiary+2 ,
    lineHeight:Font.FontLineHeight.Tertiary,
    marginBottom:2,
  },
  experience:{
    color:Colors.blackGrey,
    fontFamily:Font.FontFamily.Poppin,
    fontWeight:"400",
    fontSize:Font.FontSize.Secondary ,
    lineHeight:Font.FontLineHeight.Secondary,
    marginBottom:2,
  },
  share_container:{
    width:150,
    backgroundColor:"#F0F2F8",
    paddingLeft:23,
    paddingVertical:12,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
  heart_icon:{
    marginRight:15,
    textAlignVertical:"center"
  },
  share:{
    color:Colors.grey,
    fontFamily:Font.FontFamily.Poppin,
    fontWeight:"400",
    fontSize:Font.FontSize.Secondary ,
    lineHeight:Font.FontLineHeight.Secondary-4,
    textAlignVertical:"center"
  }
});
