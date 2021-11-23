import { StyleSheet } from "react-native";

import { Layout, Font, Colors } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithGradient,
  },
  monthlyBudgetButton: {
    marginVertical: 6,
  },
  linearGradient: {
    height: "100%",
    width: 120,
    position: "absolute",
    alignSelf: "flex-end",
    zIndex: 0,
  },
  headerContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  headerText:{
    alignSelf:"flex-start",
  },
  notification:{
    position:"absolute",
    top:0,
    right:0,
    padding:10,
    backgroundColor:Colors.green,
    alignSelf:"flex-end",
    borderRadius:14,
  },
  searchBar: {
    height: 48,
    borderRadius: 12,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    backgroundColor: Colors.white,
    paddingLeft: 52,
    paddingRight: 16,
    fontSize: Font.FontSize.Secondary,
    fontFamily: Font.FontFamily.Poppin,
    color: "#5E667C",
  },
  SearchbarContainer: {
    marginVertical: 20,
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
  },
  categories: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 30,
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    color: "#13204C",
  },
  recentPost: {
    fontSize: Font.FontSize.H3,
    marginTop: 5,
    marginBottom: 6,
    lineHeight: Font.FontLineHeight.Primary,
  },
  modalContainer:{
    marginTop: 'auto',
    marginBottom:0,
    backgroundColor:'white',
    width:"100%",
    paddingHorizontal:20,
    paddingTop:16,
    paddingBottom:0,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    display:"flex",
    flexDirection:"column"
    
  },
  modalTopBar:{
    width:48,
    height:4,
    backgroundColor:"#E1E3EA",
    borderRadius:4,
    alignSelf:"center",
    marginBottom: 26,
  },
  inputHeader:{
    color:Colors.blackGrey,
    fontWeight:"500",
    fontSize:Font.FontSize.Primary - 1,
    lineHeight: Font.FontLineHeight.Tertiary + 1,
  },
  selectText:{
    fontFamily: Font.FontFamily.Poppin,
    fontWeight: "400",
    fontSize:Font.FontSize.Primary - 1,
    lineHeight: Font.FontLineHeight.Secondary,
    color: Colors.blackGrey
  },
  selectContainer:{
    borderColor:"#E1E3EA", 
    paddingLeft:24,
  },
  exp_edu:{
    display:"flex",
    flexDirection:"row"
  },
  exp:{
    width:"50%",
    paddingRight:7.5
  },
  edu:{
    width:"50%",
    paddingLeft:7.5
  },
  jobTypes:{
    display:"flex",
    flexDirection:"row",
    width:"100%",
    flex:0,
    flexWrap:"wrap",
    marginTop:10,

  },
  jobType:{
    paddingVertical:12,
    paddingHorizontal:19,
    fontSize: Font.FontSize.Primary - 1,
    lineHeight: Font.FontLineHeight.Secondary - 2,
    borderRadius:12,
    borderColor:Colors.borderColor,
    borderWidth:1,
    textAlignVertical:"center",
    marginRight:14,
    marginBottom:14,
  },
  modalActions:{
    display:"flex",
    flexDirection:"row",
    marginBottom:20,
  },
  clearBtn:{
    backgroundColor:Colors.transparent,
    paddingVertical:14,
    width:"35%",
  },
  clearText:{
    textAlign:"center",
  },
  showBtn:{
    backgroundColor:Colors.green,
    paddingVertical:14,
    width:"65%",
    borderRadius:100
  },
  showText:{
    color: Colors.white,
    textAlign:"center"
  }
});
