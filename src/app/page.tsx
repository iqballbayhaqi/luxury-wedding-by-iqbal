import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/CARLO___KAREL_September_9__2023__5_.png"
        alt="Next.js Logo"
        layout="responsive"
        width={1920} // default full width for desktop
        height={1080}
        priority
      />
      <div className="mx-8 sm:mx-24">
        <div className="flex flex-col justify-center items-center py-4">
          <p className="text-2xl">671 DAYS</p>
          <p>since we tied the knot!</p>
          <a className="bg-[#252b2e] text-white px-4 py-2 mt-2">RSVP here!</a>
        </div>

        <div className="flex flex-col justify-center items-center text-sm sm:text-base my-10">
          <div className="h-[1px] w-[90px] bg-[#afc3d6]"></div>
          <em className="flex flex-col justify-center items-center py-4 w-[70%] sm:w-[640px]">
            <p className="text-center">Welcome to our wedding website!</p>
            <br />
            <p className="text-center">
              Feel free to look around to learn more about our story and details
              on our big day, including directions to our venue, hotel and
              travel info.
            </p>
            <p className="text-center">
              We can’t wait to celebrate with you all soon!
            </p>
            <br />
            <p className="text-center">Love, Karel and Carlo</p>
          </em>
          <div className="h-[1px] w-[90px] bg-[#afc3d6]"></div>
        </div>

        <Image
          src="/images/CarloKarelProposal_TonyLeFIlms_-28.jpg"
          alt="Wedding Image"
          layout="responsive"
          width={1920} // default full width for desktop
          height={1080}
          className="shadow-lg"
          priority
        />

        <section className="my-10">
          <Image
            src="/images/1.png"
            alt="title the prposal"
            layout="responsive"
            width={1920} // default full width for desktop
            height={1080}
            priority
          />

          <p className="text-center text-sm sm:text-xl my-4">
            {`The engagement proposal was a 4-week scheme with our closest friends
            and family playing important roles. If you know Karel, she's not
            easily surprised. Everything had to be so precise and a million
            things could have made the whole plan go sideways, but thankfully it
            all went according to plan!`}
          </p>
          <p className="text-center text-sm sm:text-xl my-4">
            {`Anyways, Karel thought that we were attending a birthday dinner for
            one of our friends that night. On the way to dinner, we planned to
            meet up with her cousin to return something he "forgot" at a family
            party, and he just happened to be walking his dog at a park nearby.
            She didn't know that at the park, one of her best friends created a
            beautiful picnic setup while my legit photographer cousin was a
            ninja hiding in the bushes ready for action shots. Before that her
            youngest sister stayed with us so that they could have a "sister
            day" to get their nails done and before that her other sister helped
            distract Karel so I could ask for her parents' blessing and
            permission.`}
          </p>
          <p className="text-center text-sm sm:text-xl my-4">
            {`Long story short, dominoes had to fall exactly in place to make it
            all happen and by December 22, 2022 we were engaged. Big thanks to
            the friends and family who helped successfully pull off this ruse.
            :)`}
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-16 mt-24">
            <Image
              src="/images/CarloKarelProposal_TonyLeFIlms_-22.jpg"
              alt="proposal image"
              layout="responsive"
              width={640}
              height={480}
              className="shadow-lg"
              priority
            />
            <Image
              src="/images/CarloKarelProposal_TonyLeFIlms_-9.jpg"
              alt="proposal image"
              layout="responsive"
              width={640}
              height={480}
              className="shadow-lg"
              priority
            />
            <Image
              src="/images/CarloKarelProposal_TonyLeFIlms_-48.jpg"
              alt="proposal image"
              layout="responsive"
              width={640}
              height={480}
              className="shadow-lg"
              priority
            />
          </div>
        </section>

        <section className="my-10">
          <Image
            src="/images/2.png"
            alt="title the prposal"
            layout="responsive"
            width={1920} // default full width for desktop
            height={1080}
            priority
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 pt-12">
            <div>
              <p className="text-center text-2xl uppercase pb-4">HOW DID YOU MEET?</p>
              <p className="text-center">
                K: We actually had no idea exactly where and when we met until
                very recently when a friend asked us this question, ha. With
                some Facebook sleuthing, we finally learned that we met sometime
                in 2011 at a UCLA event with some friends. We didn't start
                dating until over a year later!
              </p>
            </div>
            <div>
              <p className="text-center text-2xl uppercase pb-4">What was your first date?</p>
              <p className="text-center">
                C: Funny enough we consider our first date as going to church
                together. It was Ash Wednesday and I just decided to text her to
                see if she wanted to go with me to the University Catholic
                Church. She said yes and then I smoothly asked if she wanted to
                get dinner afterwards. We got some of the worst tofu nuggets
                I've ever tasted in my life. But at least my romantic charm and
                amazing sense of humor made up for it. The rest is history...
              </p>
            </div>
            <div>
              <p className="text-center text-2xl uppercase pb-4">
                What's the first movie that you watched together?
              </p>
              <p className="text-center">
                K: Our friend Erica and I were hanging out at her dorm room one
                night when Carlo somehow invited himself to watch the Thai
                version of Shutter with us. If you know Carlo, he hates scary
                movies, so there was definitely an ulterior motive there lol.
                Erica is now fittingly our Maid of Honor for unknowingly having
                to put up with being our third wheel (the first of many) that
                night ;)
              </p>
            </div>
            <div>
              <p className="text-center text-2xl uppercase pb-4">
                What's the best meal you have eaten together?
              </p>
              <p className="text-center">
                C: I don't know if this is the "best foodwise" but definitely
                one of the "best memories at a really good restaurant." We ate
                at Next Restaurant, a Michelin restaurant in Chicago by Grant
                Achatz. We had no idea how many courses the meal was that Karel
                ate every course until she got too full. It was about course 7
                and I swear we were expecting dessert, yet course 8 was straight
                up steaks! Karel had 1-bite and her stomach said no more... I
                ended up eating 2 additional courses but for the both of us,
                including the 2 steaks.. lol
              </p>
            </div>
            <div>
              <p className="text-center text-2xl uppercase pb-4">
                What's the most memorable trip you've taken together?
              </p>
              <p className="text-center">
                C: She would probably say our Hawaii trip back in 2019 because
                that's when she forced me to go skydiving knowing I have had a
                huge fear of jumping out of a plane. I happened to be the very
                last person to board the tiny plane and there were no seats so
                they had me sit on the edge of the plane door with my legs
                hanging out as the plane took off! Then of course I was the
                first person to jump and I was completely terrified... She loved
                it.
                <br /> K: I loved it.
              </p>
            </div>
            <div>
              <p className="text-center text-2xl uppercase pb-4">
                What's the most spontaneous thing you've done together?
              </p>
              <p className="text-center">
                K: Carlo and I spent a lot of time going back and forth between
                the East Coast and LA when he was living in Boston. While being
                long distance was tough, we made the most of it by traveling to
                new places during that time! My favorite would be the summer we
                went around Spain and spontaneously extended our stay at Ibiza.
              </p>
            </div>
            <div>
              <p className="text-center text-2xl uppercase pb-4">
                What are you on the same page about?
              </p>
              <p className="text-center">
                C: Living life to its fullest, moment by moment. As you can tell
                it took 10 years until we were engaged! But it's not because we
                were in doubt about each other. We've always lived our life
                together and at our pace. We've always been ready but never in a
                rush.
              </p>
            </div>
            <div>
              <p className="text-center text-2xl uppercase pb-4">
                Where are you going for your honeymoon?
              </p>
              <p className="text-center">
                C: Whatever opportunity presents itself at the right moment. ;)
              </p>
            </div>
          </div>
        </section>

        <Image
          src="/images/image-1673996360.jpg"
          alt="Wedding Image"
          layout="responsive"
          width={1920} // default full width for desktop
          height={1080}
          className="shadow-lg my-16"
          priority
        />
      </div>
    </div>
  );
}
