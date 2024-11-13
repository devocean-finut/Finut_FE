import MyPageButtonGroup from "@/src/My-Page/ButtonGroup";
import MyPageUserInfo from "@/src/My-Page/UserInfo";

function Page() {
  const userData = {
    userId: 2,
    name: "황지수 (plumking)",
    money: 100000,
    picture:
      "https://lh3.googleusercontent.com/a/ACg8ocKxUDNyJdhvRA40sHE7EfbKYpi0yNMzWpWZKeFsxC6xCAenE9tuBA=s96-c",
    xp: 20,
    levelName: "아르바이트",
  };
  return (
    <>
      <h1 className="font-medium text-xl py-4">마이페이지</h1>
      <div className="w-full flex flex-col items-center gap-6">
        <MyPageUserInfo userData={userData} />
        <MyPageButtonGroup />
      </div>
    </>
  );
}

export default Page;
