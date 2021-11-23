/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import throttle from "lodash.throttle";

const navigateOneTime = (navigate) => throttle(navigate, 1000, { trailing: false });

/* navigate */

/* push */

const openCategory = (navigation) => (props = {}) => {
  navigation.push("CategorySelection", props);
};
const openPostList = (navigation) => (props = {}) => {
  navigation.push("PostList", props);
};

const openPostDetail = (navigation) => (props = {}) => {
  navigation.push("PostDetail", props);
};
const openCommentsDetail = (navigation) => (props = {}) => {
  navigation.push("CommentsList", props);
};
const openCustomizeNotification = (navigation) => (props = {}) => {
  navigation.push("CustomizeNotification", props);
};
const openCustomizeByCategories = (navigation) => (props = {}) => {
  navigation.push("CustomizeByCategories", props);
};
const openSignUp = (navigation) => (props = {}) => {
  navigation.push("SignUp", props);
};
const openSignIn = (navigation) => (props = {}) => {
  navigation.push("SignInScreen", props);
};
const openFilter=(navigation) => (props = {}) => {
  navigation.push("JobFilter", props);
};

const openJobDetail=(navigation) => (props = {}) => {
  navigation.push("JobDetail", props);
};

const openApplyJob=(navigation) => (props = {}) => {
  navigation.push("ApplyJob", props);
};


const navigate = (navigation) => ({
  goBack: navigation.goBack,
  openFilter: navigateOneTime(openFilter(navigation)),
  openJobDetail: navigateOneTime(openJobDetail(navigation)),
  openApplyJob: navigateOneTime(openApplyJob(navigation)),
  openPostList: navigateOneTime(openPostList(navigation)),
  openCategory: navigateOneTime(openCategory(navigation)),
  openPostDetail: navigateOneTime(openPostDetail(navigation)),
  openCommentDetail: navigateOneTime(openCommentsDetail(navigation)),
  openCustomizeNotification: navigateOneTime(openCustomizeNotification(navigation)),
  openCustomizeByCategories: navigateOneTime(openCustomizeByCategories(navigation)),
  openSignUp: navigateOneTime(openSignUp(navigation)),
  openSignIn: navigateOneTime(openSignIn(navigation)),
  
});

export default navigate;
