import { StyleSheet } from "react-native";
import { fonts } from "react-native-elements/dist/config";
import { white } from "react-native-paper/lib/typescript/styles/colors";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    backgroundColor: "#F2F9F2",
  },
  
  header: {
    width: "100%",
    marginTop: 56,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom:20,
  },
  headerTitle:{
    fontSize: Font.FontSize.H3,
    fontWeight: "500",
    lineHeight: 36,
    color:Colors.blackGrey,
    textAlignVertical:"top",
    marginLeft:16,
  },
  mainContainer:{
    backgroundColor: Colors.white,
    paddingTop:24,
    paddingHorizontal:20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
  },
  jobTitle:{
    fontSize:16,
    paddingRight:30,
    color:Colors.blackGrey,
    marginBottom:20
  },
  location:{
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
    fontSize:Font.FontSize.Tertiary + 2,
    lineHeight:Font.FontLineHeight.Tertiary,
    color:Colors.primary,
  },
  jobType:{
    position:"absolute",
    top:0,
    right:0,
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
    fontSize:Font.FontSize.Tertiary + 2,
    lineHeight:Font.FontLineHeight.Tertiary,
    textAlignVertical:"center",
    marginRight:10
  },
  otherInfos:{
    display:"flex",
    flexDirection:"row",
    backgroundColor: "rgba(51, 167, 89, 0.1)",
    borderRadius:15,
    paddingTop:24,
    paddingHorizontal:20,
    flexWrap:"wrap",
    marginBottom:20
  },
  experienceGroup:{
    width:"50%",
    display:"flex",
    flexDirection:"row",
    marginBottom:20
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
    fontSize:Font.FontSize.Tertiary + 2,
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
  jobDescHeader:{
    fontSize:Font.FontSize.Primary + 2,
    color:Colors.blackGrey,
    marginBottom:16,

  },
  jobDescContent:{
    color:Colors.primary,
    marginBottom:30
  },
  applyBtn:{
    borderRadius:100,
    backgroundColor: Colors.green,
    paddingVertical:14,
    marginVertical:30
  },
  applyBtnText:{
    color:Colors.white,
    lineHeight: Font.FontLineHeight.Secondary,
    textAlign:"center"
  }
});

export default styles;
