import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { Home } from "./components/Home";
import { Matching } from "./components/Matching";
import { AIFeatures } from "./components/AIFeatures";
import { Messages } from "./components/Messages";
import { Profile } from "./components/Profile";
import { MovieDetail } from "./components/MovieDetail";
import { VideoPlayer } from "./components/VideoPlayer";
import { ChatRoom } from "./components/ChatRoom";
import { HotMovies } from "./components/HotMovies";
import { ArticleDetail } from "./components/ArticleDetail";
import { Tuigeji } from "./components/Tuigeji";
import { Search } from "./components/Search";
import { TimePillar } from "./components/TimePillar";
import { RoomDetail } from "./components/RoomDetail";
import { OpenRoom } from "./components/OpenRoom";
import { DirectorsList } from "./components/DirectorsList";
import { DirectorDetail } from "./components/DirectorDetail";
import { CheckIn } from "./components/CheckIn";
import { FollowList } from "./components/profile/FollowList";
import { MyCollections } from "./components/profile/MyCollections";
import { WatchHistory } from "./components/profile/WatchHistory";
import { MyRatings } from "./components/profile/MyRatings";
import { MyTickets } from "./components/profile/MyTickets";
import { MyProfile } from "./components/profile/MyProfile";
import { Settings } from "./components/profile/Settings";
import { VipCenter } from "./components/profile/VipCenter";
import { ChangePassword } from "./components/settings/ChangePassword";
import { BindPhone } from "./components/settings/BindPhone";
import { BindEmail } from "./components/settings/BindEmail";
import { PrivacySettings } from "./components/settings/PrivacySettings";
import { NotificationSettings } from "./components/settings/NotificationSettings";
import { AboutUs } from "./components/settings/AboutUs";
import { UserAgreement } from "./components/settings/UserAgreement";
import { PrivacyPolicy } from "./components/settings/PrivacyPolicy";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { ForgotPassword } from "./components/auth/ForgotPassword";
import { ThirdPartyLogin } from "./components/auth/ThirdPartyLogin";
import { PersonalNetwork } from "./components/PersonalNetwork";
import { ShareActivity } from "./components/ShareActivity";
import { EventDetail } from "./components/EventDetail";
import { LocalActivityDetail } from "./components/LocalActivityDetail";
import { LocalActivitiesList } from "./components/LocalActivitiesList";
import {
  Film,
  TrendingUp,
  Star,
  MessageCircle,
  User,
} from "lucide-react";

type Page =
  | "home"
  | "matching"
  | "recommend"
  | "messages"
  | "profile"
  | "personalNetwork"
  | "shareActivity"
  | "eventDetail"
  | "localActivityDetail"
  | "localActivitiesList";
type ProfilePage =
  | "following"
  | "followers"
  | "collections"
  | "history"
  | "ratings"
  | "comments"
  | "likes"
  | "settings"
  | "vip"
  | "tickets"
  | "myProfile"
  | "checkIn";
type SettingsPage =
  | "changePassword"
  | "bindPhone"
  | "bindEmail"
  | "privacy"
  | "notification"
  | "realName"
  | "about"
  | "terms"
  | "policy";
type AuthPage =
  | "login"
  | "register"
  | "forgotPassword"
  | "thirdPartyLogin";
type ThirdPartyType = "wechat" | "qq" | "apple";

interface ViewState {
  page: Page;
  movieId?: string;
  articleId?: string;
  videoId?: string;
  videoTitle?: string;
  chatId?: string;
  chatName?: string;
  chatAvatar?: string;
  roomId?: string;
  directorId?: string;
  profilePage?: ProfilePage;
  settingsPage?: SettingsPage;
  authPage?: AuthPage;
  thirdPartyType?: ThirdPartyType;
  showHotMovies?: boolean;
  showTuigeji?: boolean;
  showOpenRoom?: boolean;
  showSearch?: boolean;
  showTimePillar?: boolean;
  showDirectors?: boolean;
  fromSearch?: boolean; // 标记是否从搜索页进入
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [viewState, setViewState] = useState<ViewState>({
    page: "home",
  });
  const [readConversations, setReadConversations] = useState<
    Set<string>
  >(new Set());
  const [activityRegistrations, setActivityRegistrations] = useState<Set<string>>(new Set());

  // Handle splash screen completion
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
    setViewState({ page: "home" });
  };

  const handleLogout = () => {
    if (confirm("确定要退出登录吗？")) {
      setIsLoggedIn(false);
      setViewState({ page: "home" });
      alert("已退出登录");
    }
  };

  const handleForgotPassword = () => {
    setViewState({ page: "home", authPage: "forgotPassword" });
  };

  const handleRegister = () => {
    setViewState({ page: "home", authPage: "register" });
  };

  const handleThirdPartyLogin = (type: ThirdPartyType) => {
    setViewState({
      page: "home",
      authPage: "thirdPartyLogin",
      thirdPartyType: type,
    });
  };

  const handleBackToLogin = () => {
    setViewState({ page: "home", authPage: "login" });
  };

  const handleCloseAuth = () => {
    setViewState({ ...viewState, authPage: undefined });
  };

  const requireLogin = (action: () => void) => {
    if (!isLoggedIn) {
      // 直接跳转到登录页面
      setViewState({ ...viewState, authPage: "login" });
      return false;
    }
    action();
    return true;
  };

  const navigateToTab = (page: Page) => {
    setViewState({ page });
  };

  const handleMovieClick = (movieId: string, fromSearch?: boolean) => {
    setViewState({
      ...viewState,
      movieId,
      showTimePillar: undefined,
      showSearch: undefined,
      showHotMovies: undefined,
      showTuigeji: undefined,
      showDirectors: undefined,
      fromSearch: fromSearch || false,
    });
  };

  const handleBackFromMovie = () => {
    // 如果是从搜索页进入的，返回到搜索页
    if (viewState.fromSearch) {
      setViewState({ 
        ...viewState, 
        movieId: undefined, 
        fromSearch: undefined,
        showSearch: true 
      });
    } else {
      setViewState({ ...viewState, movieId: undefined, fromSearch: undefined });
    }
  };

  const handleArticleClick = (articleId: string) => {
    requireLogin(() => {
      setViewState({
        ...viewState,
        articleId,
        showSearch: undefined,
        showTimePillar: undefined,
        showTuigeji: undefined,
        showHotMovies: undefined,
      });
    });
  };

  const handleBackFromArticle = () => {
    setViewState({ ...viewState, articleId: undefined });
  };

  const handlePlayClick = (movieId: string, title: string) => {
    requireLogin(() => {
      setViewState({
        ...viewState,
        videoId: movieId,
        videoTitle: title,
      });
    });
  };

  const handlePlayFromBanner = (movieId: string) => {
    requireLogin(() => {
      // Find the banner title
      const banner = [
        { id: "1", title: "肖申克的救赎" },
        { id: "2", title: "星际穿越" },
        { id: "3", title: "盗梦空间" },
      ].find((b) => b.id === movieId);

      if (banner) {
        setViewState({
          ...viewState,
          videoId: movieId,
          videoTitle: banner.title,
        });
      }
    });
  };

  const handleBackFromVideo = () => {
    setViewState({
      ...viewState,
      videoId: undefined,
      videoTitle: undefined,
    });
  };

  const handleConversationClick = (
    id: string,
    name: string,
    avatar: string,
  ) => {
    setViewState({
      ...viewState,
      chatId: id,
      chatName: name,
      chatAvatar: avatar,
    });
    setReadConversations((prev) => new Set([...prev, id]));
  };

  const handleBackFromChat = () => {
    setViewState({
      ...viewState,
      chatId: undefined,
      chatName: undefined,
      chatAvatar: undefined,
    });
  };

  const handleProfileNavigate = (profilePage: string) => {
    if (profilePage === "logout") {
      handleLogout();
      return;
    }
    if (profilePage === "editProfile") {
      alert("编辑个人资料功能开发中...");
      return;
    }
    setViewState({
      ...viewState,
      profilePage: profilePage as ProfilePage,
    });
  };

  const handleBackFromProfile = () => {
    setViewState({ ...viewState, profilePage: undefined });
  };

  const handleSettingsNavigate = (settingsPage: string) => {
    setViewState({
      ...viewState,
      settingsPage: settingsPage as SettingsPage,
    });
  };

  const handleBackFromSettings = () => {
    setViewState({ ...viewState, settingsPage: undefined });
  };

  const handleShowHotMovies = () => {
    setViewState({ ...viewState, showHotMovies: true });
  };

  const handleBackFromHotMovies = () => {
    setViewState({ ...viewState, showHotMovies: undefined });
  };

  const handleOpenRoom = () => {
    requireLogin(() => {
      setViewState({ ...viewState, showOpenRoom: true });
    });
  };

  const handleBackFromOpenRoom = () => {
    setViewState({ ...viewState, showOpenRoom: undefined });
  };

  const handleShowTuigeji = () => {
    setViewState({ ...viewState, showTuigeji: true });
  };

  const handleBackFromTuigeji = () => {
    setViewState({ ...viewState, showTuigeji: undefined });
  };

  const handleSearchClick = () => {
    requireLogin(() => {
      setViewState({ ...viewState, showSearch: true });
    });
  };

  const handleBackFromSearch = () => {
    setViewState({ ...viewState, showSearch: undefined });
  };

  const handleTimePillarClick = () => {
    requireLogin(() => {
      setViewState({ ...viewState, showTimePillar: true });
    });
  };

  const handleBackFromTimePillar = () => {
    setViewState({ ...viewState, showTimePillar: undefined });
  };

  const handleRoomClick = (roomId: string) => {
    setViewState({
      ...viewState,
      roomId,
      showOpenRoom: undefined,
    });
  };

  const handleBackFromRoom = () => {
    setViewState({ ...viewState, roomId: undefined });
  };

  const handleShowDirectors = () => {
    requireLogin(() => {
      setViewState({ ...viewState, showDirectors: true });
    });
  };

  const handleBackFromDirectors = () => {
    setViewState({ ...viewState, showDirectors: undefined });
  };

  const handleDirectorClick = (directorId: string) => {
    setViewState({
      ...viewState,
      directorId,
      showDirectors: undefined,
    });
  };

  const handleBackFromDirector = () => {
    setViewState({
      ...viewState,
      directorId: undefined,
      showDirectors: true,
    });
  };

  // Show auth screens when user clicks login or needs login
  if (!isLoggedIn && viewState.authPage) {
    switch (viewState.authPage) {
      case "forgotPassword":
        return <ForgotPassword onBack={handleBackToLogin} />;
      case "register":
        return (
          <Register
            onBack={handleBackToLogin}
            onRegisterSuccess={handleLogin}
          />
        );
      case "thirdPartyLogin":
        return (
          <ThirdPartyLogin
            type={viewState.thirdPartyType || "wechat"}
            onBack={handleBackToLogin}
            onSuccess={handleLogin}
          />
        );
      case "login":
      default:
        return (
          <Login
            onLoginSuccess={handleLogin}
            onForgotPassword={handleForgotPassword}
            onRegister={handleRegister}
            onThirdPartyLogin={handleThirdPartyLogin}
            onBack={handleCloseAuth}
          />
        );
    }
  }

  const renderContent = () => {
    // If playing video
    if (viewState.videoId && viewState.videoTitle) {
      return (
        <VideoPlayer
          movieId={viewState.videoId}
          movieTitle={viewState.videoTitle}
          onBack={handleBackFromVideo}
        />
      );
    }

    // If viewing room detail
    if (viewState.roomId) {
      return (
        <RoomDetail
          roomId={viewState.roomId}
          onBack={handleBackFromRoom}
        />
      );
    }

    // If viewing directors list
    if (viewState.showDirectors) {
      return (
        <DirectorsList
          onBack={handleBackFromDirectors}
          onDirectorClick={handleDirectorClick}
        />
      );
    }

    // If viewing director detail
    if (viewState.directorId) {
      return (
        <DirectorDetail
          directorId={viewState.directorId}
          onBack={handleBackFromDirector}
          onMovieClick={handleMovieClick}
        />
      );
    }

    // If viewing search page
    if (viewState.showSearch) {
      return (
        <Search
          onBack={handleBackFromSearch}
          onMovieClick={handleMovieClick}
        />
      );
    }

    // If viewing time pillar page
    if (viewState.showTimePillar) {
      return (
        <TimePillar
          onBack={handleBackFromTimePillar}
          onMovieClick={handleMovieClick}
        />
      );
    }

    // If viewing article detail
    if (viewState.articleId) {
      return (
        <ArticleDetail
          articleId={viewState.articleId}
          onBack={handleBackFromArticle}
        />
      );
    }

    // If viewing Tuigeji page
    if (viewState.showTuigeji) {
      return (
        <Tuigeji
          onBack={handleBackFromTuigeji}
          onMovieClick={handleArticleClick}
        />
      );
    }

    // If viewing hot movies page
    if (viewState.showHotMovies) {
      return (
        <HotMovies
          onBack={handleBackFromHotMovies}
          onMovieClick={handleMovieClick}
        />
      );
    }

    // If viewing a movie detail
    if (viewState.movieId) {
      return (
        <MovieDetail
          movieId={viewState.movieId}
          onBack={handleBackFromMovie}
          onPlayClick={handlePlayClick}
        />
      );
    }

    // If viewing a chat room
    if (
      viewState.chatId &&
      viewState.chatName &&
      viewState.chatAvatar
    ) {
      return (
        <ChatRoom
          conversationId={viewState.chatId}
          conversationName={viewState.chatName}
          conversationAvatar={viewState.chatAvatar}
          onBack={handleBackFromChat}
        />
      );
    }

    // If viewing settings sub-pages
    if (viewState.settingsPage) {
      switch (viewState.settingsPage) {
        case "changePassword":
          return (
            <ChangePassword onBack={handleBackFromSettings} />
          );
        case "bindPhone":
          return <BindPhone onBack={handleBackFromSettings} />;
        case "bindEmail":
          return <BindEmail onBack={handleBackFromSettings} />;
        case "privacy":
          return (
            <PrivacySettings onBack={handleBackFromSettings} />
          );
        case "notification":
          return (
            <NotificationSettings
              onBack={handleBackFromSettings}
            />
          );
        case "about":
          return <AboutUs onBack={handleBackFromSettings} />;
        case "terms":
          return (
            <UserAgreement onBack={handleBackFromSettings} />
          );
        case "policy":
          return (
            <PrivacyPolicy onBack={handleBackFromSettings} />
          );
        case "realName":
          return (
            <div className="p-4">
              <button
                onClick={handleBackFromSettings}
                className="mb-4"
              >
                ← 返回
              </button>
              <h1 className="text-2xl">功能开发中...</h1>
            </div>
          );
        default:
          return (
            <Settings
              onBack={handleBackFromProfile}
              onNavigate={handleSettingsNavigate}
            />
          );
      }
    }

    // If viewing profile sub-pages
    if (viewState.profilePage) {
      switch (viewState.profilePage) {
        case "following":
          return (
            <FollowList
              type="following"
              onBack={handleBackFromProfile}
            />
          );
        case "followers":
          return (
            <FollowList
              type="followers"
              onBack={handleBackFromProfile}
            />
          );
        case "collections":
          return (
            <MyCollections
              onBack={handleBackFromProfile}
              onMovieClick={handleMovieClick}
            />
          );
        case "history":
          return (
            <WatchHistory
              onBack={handleBackFromProfile}
              onMovieClick={handleMovieClick}
            />
          );
        case "ratings":
          return (
            <MyRatings
              onBack={handleBackFromProfile}
              onMovieClick={handleMovieClick}
            />
          );
        case "tickets":
          return <MyTickets onBack={handleBackFromProfile} />;
        case "myProfile":
          return (
            <MyProfile
              onBack={handleBackFromProfile}
              onMovieClick={handleMovieClick}
              onNavigate={handleProfileNavigate}
              onEdit={() =>
                handleProfileNavigate("editProfile")
              }
            />
          );
        case "settings":
          return (
            <Settings
              onBack={handleBackFromProfile}
              onNavigate={handleSettingsNavigate}
            />
          );
        case "vip":
          return <VipCenter onBack={handleBackFromProfile} />;
        case "comments":
        case "likes":
          // 这些页面暂时返回一个简单的占位页面
          return (
            <div className="p-4">
              <button
                onClick={handleBackFromProfile}
                className="mb-4"
              >
                ← 返回
              </button>
              <h1 className="text-2xl">功能开发中...</h1>
            </div>
          );
        case "checkIn":
          return <CheckIn onBack={handleBackFromProfile} />;
        default:
          return <Profile onNavigate={handleProfileNavigate} />;
      }
    }

    // Normal tab navigation
    switch (viewState.page) {
      case "home":
        return (
          <Home
            onMovieClick={handleMovieClick}
            onMoreClick={handleShowHotMovies}
            onPlayClick={handlePlayFromBanner}
            onPersonalNetworkClick={() =>
              requireLogin(() =>
                setViewState({ page: "personalNetwork" }),
              )
            }
            onOpenRoomClick={handleOpenRoom}
            onTuigejiClick={handleShowTuigeji}
            onArticleClick={handleArticleClick}
            onSearchClick={handleSearchClick}
            onTimePillarClick={handleTimePillarClick}
            onRankingClick={() =>
              requireLogin(() => navigateToTab("matching"))
            }
            onRecommendClick={() =>
              requireLogin(() => navigateToTab("recommend"))
            }
            onShareActivityClick={() =>
              setViewState({ page: "shareActivity" })
            }
            onEventClick={() => setViewState({ page: "eventDetail" })}
            onLocalActivityClick={(activityId) =>
              activityId 
                ? setViewState({ page: "localActivityDetail" })
                : setViewState({ page: "localActivitiesList" })
            }
            onDirectorsClick={handleShowDirectors}
          />
        );
      case "matching":
        return (
          <Matching
            onMovieClick={handleMovieClick}
            onHomeClick={() => navigateToTab("home")}
            onChatClick={handleConversationClick}
          />
        );
      case "recommend":
        return (
          <AIFeatures
            onMovieClick={handleMovieClick}
            onHomeClick={() => navigateToTab("home")}
          />
        );
      case "messages":
        return (
          <Messages
            onConversationClick={handleConversationClick}
            readConversations={readConversations}
          />
        );
      case "profile":
        return <Profile onNavigate={handleProfileNavigate} />;
      case "personalNetwork":
        return (
          <PersonalNetwork
            onClose={() => setViewState({ page: "home" })}
          />
        );
      case "shareActivity":
        return (
          <ShareActivity
            onBack={() => setViewState({ page: "home" })}
          />
        );
      case "eventDetail":
        return (
          <EventDetail
            onBack={() => setViewState({ page: "home" })}
          />
        );
      case "localActivityDetail":
        return (
          <LocalActivityDetail
            activityId="1"
            onBack={() => setViewState({ page: "home" })}
            onGoToCommunity={() => {
              // 跳转到对话页面，自动打开社群聊天
              setViewState({
                page: "messages",
                chatId: "community_film",
                chatName: "影视社区·线下活动",
                chatAvatar: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=100"
              });
            }}
            isRegistered={activityRegistrations.has("1")}
            onRegister={() => {
              setActivityRegistrations(prev => new Set([...prev, "1"]));
            }}
          />
        );
      case "localActivitiesList":
        return (
          <LocalActivitiesList
            onBack={() => setViewState({ page: "home" })}
            onActivityClick={(activityId) => 
              setViewState({ page: "localActivityDetail" })
            }
          />
        );
      default:
        return (
          <Home
            onMovieClick={handleMovieClick}
            onMoreClick={handleShowHotMovies}
            onPlayClick={handlePlayFromBanner}
          />
        );
    }
  };

  // Hide bottom nav when viewing movie detail, video, chat, profile sub-pages, settings, or hot movies
  const showBottomNav =
    !viewState.movieId &&
    !viewState.articleId &&
    !viewState.chatId &&
    !viewState.videoId &&
    !viewState.roomId &&
    !viewState.directorId &&
    !viewState.profilePage &&
    !viewState.settingsPage &&
    !viewState.showHotMovies &&
    !viewState.showTuigeji &&
    !viewState.showSearch &&
    !viewState.showTimePillar &&
    !viewState.showDirectors &&
    viewState.page !== "personalNetwork" &&
    viewState.page !== "shareActivity" &&
    viewState.page !== "eventDetail" &&
    viewState.page !== "localActivityDetail" &&
    viewState.page !== "localActivitiesList" &&
    viewState.page !== "openRoom";

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Main Content */}
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {renderContent()}
      </div>

      {/* Open Room Bottom Sheet */}
      <OpenRoom
        isOpen={!!viewState.showOpenRoom}
        onClose={handleBackFromOpenRoom}
        onRoomClick={handleRoomClick}
      />

      {/* Bottom Navigation */}
      {showBottomNav && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
          <div className="flex justify-around items-center h-16">
            <button
              onClick={() => navigateToTab("home")}
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                viewState.page === "home"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              <Film className="w-6 h-6" />
              <span className="text-xs mt-1">主页</span>
            </button>
            <button
              onClick={() =>
                requireLogin(() => navigateToTab("matching"))
              }
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                viewState.page === "matching"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs mt-1">配对</span>
            </button>
            <button
              onClick={() =>
                requireLogin(() => navigateToTab("recommend"))
              }
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                viewState.page === "recommend"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              <Star className="w-6 h-6" />
              <span className="text-xs mt-1">AI</span>
            </button>
            <button
              onClick={() =>
                requireLogin(() => navigateToTab("messages"))
              }
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                viewState.page === "messages"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs mt-1">对话</span>
            </button>
            <button
              onClick={() =>
                requireLogin(() => navigateToTab("profile"))
              }
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                viewState.page === "profile"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">我的</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}