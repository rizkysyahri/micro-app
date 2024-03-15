import { FC } from "react";
import Navbar from "../navbar/Navbar";
import { Icons } from "../Icons";
import watermark from "../../assets/watermak.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";

interface DetailPageProps {}

const DetailPage: FC<DetailPageProps> = ({}) => {
  return (
    <>
      <Navbar />

      <section className="px-[2vw] py-10">
        <div className="flex flex-wrap items-center">
          <Link to="/">
            <div className="text-center flex items-center gap-2">
              <Icons.arrowLeft />
              <span className="">Beranda</span>
            </div>
          </Link>
          <div className="flex-grow text-center mr-[93px]">
            <span className="">BERITA HARI INI</span>
          </div>
        </div>

        <div className="mt-8">
          <div className="items-center justify-center flex flex-col">
            <h1 className="text-4xl font-bold text-[#5E5A00]">
              KPU DUMBWAYS TETEPKAN 3 MENTOR TERBAIK
            </h1>
            <p>Super Admin</p>
            <p>Senin, 03 Jan 2023</p>

            <div className="mt-5">
              <img src={watermark} alt="" />
              <div className="text-left flex-col flex gap-3 mt-10">
                <p>
                  Praesent ac tortor vel urna fermentum luctus. Nam posuere
                  justo ut efficitur dapibus. Sed a lacinia elit. Curabitur eu
                  dapibus tellus. Proin fermentum purus id lectus imperdiet, vel
                  feugiat enim interdum. Sed non diam vel mi tristique interdum.
                  Integer bibendum, nulla ac euismod commodo, quam mi vehicula
                  justo, eu dapibus ligula massa vel ligula. Nulla facilisi.
                  Integer sit amet congue massa. Suspendisse potenti. Sed
                  interdum, lacus ac ultrices facilisis, ligula enim
                  pellentesque elit, vel varius nisi odio at purus. Sed suscipit
                  purus quis tortor posuere, in varius est euismod. Mauris
                  aliquam urna non elit faucibus, eu fermentum turpis mattis.
                  Quisque vel nisl vitae sapien congue dapibus. Vivamus auctor,
                  velit ut condimentum bibendum, purus lacus scelerisque ligula,
                  nec gravida arcu velit id libero. In hac habitasse platea
                  dictumst.
                </p>
                <p>
                  Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet
                  mi ut turpis malesuada aliquam a eu orci. Maecenas ut purus eu
                  sapien vestibulum vulputate. Fusce tincidunt fringilla arcu,
                  non efficitur sapien scelerisque et. Maecenas facilisis eros
                  id enim tincidunt, ac vestibulum quam fringilla. Nullam vel
                  malesuada mi, vitae convallis libero. In hac habitasse platea
                  dictumst. Duis cursus nunc vel metus rhoncus, id cursus justo
                  imperdiet. Integer vitae ex ac libero fermentum volutpat ut
                  vitae sapien. Aliquam id luctus nisl. Curabitur et augue ut
                  justo tincidunt varius vel sit amet nunc. Integer tincidunt
                  risus sit amet odio euismod, a finibus ligula blandit. Integer
                  euismod, purus ut malesuada varius, lectus orci feugiat massa,
                  ut egestas enim massa vel urna.
                </p>
                <p>
                  Vivamus id dictum augue. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Nulla
                  facilisi. Curabitur aliquet ligula eu nisl bibendum, vel
                  tincidunt justo feugiat. Nam dapibus, ligula id dapibus
                  fermentum, odio libero luctus nunc, et scelerisque sapien
                  libero vel ante. Etiam id odio nec nunc rhoncus lacinia nec eu
                  massa. Nullam fermentum, felis ac bibendum malesuada, lectus
                  felis fermentum dolor, a fermentum sapien mauris vel dui.
                  Fusce vel turpis eu purus fermentum tincidunt a vel elit.
                  Phasellus efficitur sapien vel efficitur rhoncus. Integer vel
                  risus ut neque elementum gravida. Morbi rhoncus, ligula nec
                  posuere tristique, ligula lacus dapibus urna, a lacinia sem
                  metus id libero. Suspendisse luctus ligula eu mauris auctor,
                  non semper elit feugiat.
                </p>
                <p>
                  Praesent ac tortor vel urna fermentum luctus. Nam posuere
                  justo ut efficitur dapibus. Sed a lacinia elit. Curabitur eu
                  dapibus tellus. Proin fermentum purus id lectus imperdiet, vel
                  feugiat enim interdum. Sed non diam vel mi tristique interdum.
                  Integer bibendum, nulla ac euismod commodo, quam mi vehicula
                  justo, eu dapibus ligula massa vel ligula. Nulla facilisi.
                  Integer sit amet congue massa. Suspendisse potenti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DetailPage;
