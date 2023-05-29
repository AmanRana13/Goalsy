import {Height} from 'hook/DevicePixel';
import {fonts} from './fonts';

export enum routesConstants {
  login = 'login',
  signUp = 'signup',
  Profile = 'Profile',
  welcome = 'welcome',
  pP = 'privacyPolicy',
  progress = 'progress',
  home = 'home',
  tC = 'termsConditions',
  bottomTab = 'bottomTab',
  forgotPassword = 'forgotPassword',
  changePassword = 'changePassword',
  AccountSetting = 'accountSetting',
  Friend = 'Friend',
  editProfile = 'editProfile',
  friendRequest = 'friendRequest',
  feed = 'feed',
  store = 'store',
  boards = 'boards',
  notification = 'notification',
  needHelp = 'needHelp',
  aboutUs = 'aboutUs',
  search = 'search',
  TermAndPolicy = 'termAndPolicy',
  createPost = 'createPost',
  comments = 'comments',
  otherUserProfile = 'otherUserProfile',
  learnAbout531 = 'learnAbout531',
  quiz = 'quiz',
  createTicket = 'createTicket',
  boardScreen = 'boardScreen',
  myVision = 'myVision',
  activities = 'activities',
  createVision = 'createVision',
  boardStack = 'boardStack',
  addGoal = 'addGoal',
  myBoard = 'myBoard',
  createBoard = 'createBoard',
  viewSample = 'viewSample',
  addActivity = 'addActivity',
  inviteUser = 'inviteUser',
  storeDetail = 'storeDetail',
  editActivity = 'editActivity',
  editVision = 'editVision',
  myTextBoard = 'myTextBoard',
  chat = 'chat',
}

export const buttonSize: any = {
  large: {
    height: 55,
    width: 200,
    fontSize: 23,
    radius: 15,
    distance: 6,
    fontFamily: fonts.medium,
  },
  medium: {
    height: 50,
    width: 160,
    fontSize: 20,
    radius: 15,
    distance: 5,
    fontFamily: fonts.medium,
  },
  small: {
    height: 40,
    width: 80,
    fontSize: 16,
    radius: 10,
    distance: 5,
    fontFamily: fonts.semiBold,
  },
};

export const popupType: any = {
  error: 'error',
  info: 'info',
};

enum constants {
  appName = 'Goalsy',
  // URL
  additionalResourcesURL = 'https://www.google.com',
  // Height
  height50 = 50,
  height40 = 40,
  height30 = 30,
  height20 = 20,
  BottomHeight = Height * 0.08,
  inputHeight = 58,
  screenPadding = 20,

  modalOuterPadding = 20,
  modalHorizontalPadding = 10,
  progressIconSize = 150,

  // Bottom Bar

  progress = 'Progress',
  feed = 'Feeds',
  store = 'Store',
  boards = 'Boards',
  goal = 'goal',
  home = 'Home',

  // button
  submit = 'Submit',
  update = 'Update',
  start = 'Get Started',
  logoutButton = 'logout',
  deleteButton = 'delete',
  learnMore = 'Learn More',
  send = 'Send',
  addGoal = 'Add Goal',
  addActivity = 'Add Activity',
  create = 'Create',
  SampleVision = 'Sample Vision',
  SampleGoal = 'Sample Goal',
  SampleActivity = 'Sample Activity',
  AddActivity = 'Add Activity',
  Purchase = 'Purchase',
  editActivity = 'Edit Activity',
  updateActivity = 'Update Activity',
  complete = 'complete',
  viewMyTextboard = 'View my textboard',
  createBoards = 'Create Boards',
  createBoard = 'Create Board',
  editVision = 'Edit Vision',
  edit = 'Edit',
  invite = 'Invite',
  ViewBoard = 'View your board',
  updateInviteAccess = 'Update Invite Access',

  // button Size
  large = 'large',
  medium = 'medium',
  small = 'small',

  // Screens Name
  login = 'Login',
  signUp = 'Signup',
  PP = 'Privacy Policy',
  TC = 'Terms & Conditions',
  ForgotPassword = 'Forgot Password',
  changePassword = 'Change Password',
  AccountSetting = 'Account Settings',
  notification = 'Notifications',
  needHelp = 'Need Help',
  aboutUs = 'About Us',
  search = 'Search',
  searchUser = 'Search User...',
  createPost = 'Create Post',
  comments = 'Comments',
  quiz = 'Quiz',
  trackProgress = 'Track Your Progress',
  activity = 'Today’s activity',
  createTicket = 'Create Ticket',
  vision = 'My Vision',
  myGoal = 'My Goal',
  myActivity = 'My Activity',
  deadline = 'Set Deadline',
  createVision = 'Create Vision',
  AddGoal = 'Add Goal',
  InviteUser = 'Invite User',
  viewSample = 'View sample',
  myTextBoard = 'My Text Board',

  // input label
  name = 'Name',
  gender = 'Gender',
  DOB = 'Date Of Birth',
  password = 'Password',
  location = 'Location',
  email = 'Email Address',
  confirmPassword = 'Confirm Password',
  oldPassword = 'Old Password',
  newPassword = 'New Password',
  confirmNewPassword = 'Confirm New Password',
  subject = 'Subject',
  description = 'Description',
  selectCategory = 'Select Category',
  visionName = 'Vision Name',
  ActivityName = 'Activity Name',
  selectGoal = 'Select Goal',
  selectVision = 'Select Vision',
  note = 'Note',
  selectColor = 'Select Color',
  InvitedUser = 'Invited Users',
  goalName = 'Goal Name',

  // Text
  selectShape = 'Select Shape',
  selectImage = 'Select Image',
  selectBoardColor = 'Select Board Color',
  purchases = 'Purchases',
  myBoardText = 'My Board',
  and = ' and ',
  hello = 'Hello',
  done = 'done',
  welcome = 'Welcome',
  VisionIcon = 'Select Vision Icon',
  GoalIcon = 'Select Goal Icon',
  FP = 'Forgot Password?',
  addFriend = 'Add Friend',
  notRegister = 'Don’t have an account? ',
  IHaveAccept = 'I have read and accepted the ',
  cancel = 'Cancel',
  gallery = 'Gallery',
  camera = 'Camera',
  openSettings = 'Open Settings',
  signUpSuccess = 'A verification link has been sent successfully to your registered email address.',
  removeFriend = 'Are you sure, you want to remove this friend?',
  FGPassSuccess = 'Forgot password link has been sent to your registered email address.',
  tellUsMore = `"Tell us more about yourself by answering a few questions that will help optimize your 5-3-1 and allow us to provide you with recommendations."`,
  deleteAcc = `We will permanently delete your account, and all profile information from Goalsy. Once deleted, your data can not be retrieved. 
  
  Are you sure, you want to delete your account?`, //Note* this space reflect in the model view text
  logout = 'Are you sure, you want to logout?',
  deleteBoard = 'Are you sure, you want to delete this board?',
  writeYourThoughts = 'Write your thoughts...',
  writeYourComment = 'Write your comment here...',
  writeYourMsg = 'Write a message...',
  closeTicket = 'Are you sure, you want to close this ticket?',
  dummyText = `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,

  //Validation
  accessPhotoValidation = 'Allow access to photos to upload photos from your library.',
  fileSizeValidation = 'Image size should not be more than 20 MB.',
  accessCameraValidation = 'Goalsy needs to access your camera to allow you to upload photos to Goalsy.',
  emptyFirstName = 'Please enter name.',
  shortFirstName = 'Name should be at least 3 characters long.',
  emptyEmail = 'Please enter email address.',
  invalidEmail = 'Please enter valid email address.',
  emptyPassword = 'Please enter password.',
  shortPassword = 'Password should be at least 8 characters long.',
  emptyConfirm = 'Please enter confirm password.',
  invalidConfirmPassword = 'Password and confirm password should be same.',
  acceptTermCondition = 'Please agree with terms & condition and privacy policy.',
  invalidPasswordNew = 'Password must include 1 upper case letter, 1 lower case letter, 1 numeric value, 1 special character and no spaces.',
  emptyLoc = 'Please enter location.',
  emptyDob = 'Please select date of birth.',
  emptyGender = 'Please select gender.',
  emptyDescription = 'Please enter description.',
  postImagesLength = 'Please add at least one image or video.',
  shortDescription = 'Description should be at least 10 characters long.',
  emptyOldPassword = 'Please enter old password.',
  emptyNewPassword = 'Please enter new password.',
  nShortPassword = 'New password should be at least 8 characters long.',
  emptyConfirmPassword = 'Please enter confirm new password.',
  notSamePassword = 'New password and confirm new password should be same.',
  internetCheck = 'Please check your internet connection.',
}
export default constants;
