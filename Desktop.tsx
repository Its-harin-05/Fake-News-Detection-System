import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Textarea } from "../../components/ui/textarea";

export const Desktop = (): JSX.Element => {
  const [newsText, setNewsText] = useState("");
  const [verificationResult, setVerificationResult] = useState<"real" | "fake" | null>(null);

  
  const pageSections = [
    {
      id: 1,
      title: "PAGE 1:",
      content:
        "Fake news spreads quickly, often misleading people with false or exaggerated information.",
    },
    {
      id: 2,
      title: "PAGE 2:",
      content:
        "Enter a news article, and the AI will analyze it to check whether it's real or fake. A simple way to verify information before sharing it.",
    },
    {
      id: 3,
      title: "PAGE 3:",
      content:
        "Using NLP to analyze news articles to determine their authenticity, helping users separate fact from fiction.",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1508px] h-[2226px]">
        <div className="relative h-[2453px] bg-[#d9d9d9]">
          
          <div className="absolute w-full h-px top-[17px] bg-[#3d352e]" />

          
          <div className="absolute w-[316px] h-[124px] top-[78px] left-[445px] bg-[#ec2630]">
            <div className="absolute w-[278px] top-[15px] left-[31px] [font-family:'Anton',Helvetica] font-normal text-[#f7f0f0] text-[64px] tracking-[0] leading-[normal]">
              FAKE NEWS
            </div>
          </div>

          <div className="absolute w-[278px] h-24 top-[126px] left-[781px]">
            <div className="absolute w-[278px] top-0 left-0 [font-family:'Anton',Helvetica] font-normal text-[#3d352e] text-[64px] tracking-[0] leading-[normal]">
              DETECTOR
            </div>
          </div>

          
          <div className="absolute w-56 top-[102px] left-[781px] [font-family:'Arimo',Helvetica] font-normal text-[#3d352e] text-sm tracking-[0] leading-[normal]">
            ISSUE: 0001 // SYNTAX SISTERS
          </div>

          
          <div className="absolute w-full h-4 top-[250px] bg-[#979797]" />

          
          <div className="absolute w-full top-[303px]">
            
            <img
              className="absolute w-[232px] h-[105px] left-[99px] object-cover"
              alt="Understanding the"
              src="/understanding-the-fake-news-phenomenon-formatkey-jpg-w1920.png"
            />

            
            <div className="absolute flex justify-between items-start space-x-8 w-[900px] left-[400px]">
              {pageSections.map((section, index) => (
                <React.Fragment key={section.id}>
                  <div className="flex-1">
                    <div className="[font-family:'Arimo',Helvetica] font-bold text-[#3d352e] text-base mb-2">
                      {section.title}
                    </div>
                    <div className="[font-family:'Arimo',Helvetica] text-[#3d352e] text-base">
                      {section.content}
                    </div>
                  </div>
                  {index < pageSections.length - 1 && (
                    <img
                      className="h-[105px]"
                      alt="Vector"
                      src="/vector-7.svg"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          
          <div className="absolute w-full h-px top-[460px] bg-[#3d352e]" />
          <div className="absolute w-full h-px top-[450px] bg-[#3d352e]" />
          
          <div className="absolute w-[1381px] top-[470px] left-[47px] [font-family:'Anton',Helvetica] font-normal text-[#3d352e] text-6xl tracking-[0] leading-[normal]">
            Separating Fact from Fiction in a World of Misinformation
          </div>

          
          <img
            className="absolute w-[701px] h-[374px] top-[585px] left-[47px] object-cover"
            alt="Element"
            src="/20210213-ird001-0-1.png"
          />

          
          <div className="absolute w-[650px] top-[580px] left-[778px] [font-family:'Arimo',Helvetica] font-normal text-[#3d352e] text-xl text-justify tracking-[0] leading-[normal]">
            In today&apos;s digital age, misinformation spreads faster than
            ever, blurring the lines between truth and deception. Fake news,
            often designed to mislead, can influence public opinion, distort
            facts, and create confusion. With the rise of social media and
            unverified sources, it&apos;s becoming increasingly difficult to
            distinguish credible news from fabricated stories.
            <br />
            &quot;There are hundreds of fake news websites out there, from those
            which deliberately imitate real-life newspapers, to government
            propaganda sites, and even those which tread the line between satire
            and plain misinformation,&quot; reports BBC News. The purpose of
            some sites is fun and entertainment, but the intentions of others
            are more insidious. Some readers knowingly laugh at false stories,
            while others fall for the deception. The more clicks these sites
            receive—whether from skeptics or the misled—the more advertising
            revenue they generate. Outlandish stories attract the most
            attention, fueling the cycle of misinformation.
            <br />
            By understanding how fake news operates and using AI-powered tools
            for verification, we can take a step toward a more informed and
            responsible information space.
          </div>

          
          <div className="absolute w-full h-px top-[990px] bg-[#3d352e]" />

          
          <div className="absolute w-[1381px] h-[175px] top-[1015px] left-[47px]">
            <div className="absolute w-[810px] top-0 left-0 [font-family:'Anton',Helvetica] font-normal text-transparent text-[58px] tracking-[0] leading-[normal]">
              <span className="text-[#3d352e]">Check the Facts: </span>
              <span className="text-[#ec2630]">Verify Your News</span>
            </div>

            <div className="absolute w-[1381px] top-[86px] left-0 [font-family:'Arimo',Helvetica] font-normal text-[#3d352e] text-xl text-justify tracking-[0] leading-[normal]">
              Enter a news article or headline, and the AI will analyze
              its authenticity. With cutting edge technology, it swiftly determines whether the information is real or fake, helping
              you navigate today&#39;s fast paced news cycle.Get instant results and stay informed with accurate, AI-driven
              verification.
            </div>

            <div className="absolute w-[364px] top-[147px] left-0 [font-family:'Arimo',Helvetica] font-normal text-[#3d352e] text-xl text-justify tracking-[0] leading-[normal]">
              Submit Your News for Fact-Checking:
            </div>
          </div>

          
          <Card className="absolute w-[1345px] h-[282px] top-[1222px] left-[83px] bg-[#c1bdbd] rounded-none border-none">
            <CardContent className="p-0">
              <Textarea
                className="w-full h-[282px] bg-transparent border-none resize-none p-4 text-xl text-[#3d352e] placeholder:opacity-50"
                placeholder="Enter news here |"
                value={newsText}
                onChange={(e) => setNewsText(e.target.value)}
              />
            </CardContent>
          </Card>

          
          <Button 
            className="absolute w-[210px] h-[58px] top-[1545px] left-[83px] bg-[#979797] rounded-none hover:bg-[#878787] text-[#3d352e] font-bold italic text-2xl"
            onClick={handleVerify}
          >
            VERIFY
          </Button>

          
          {verificationResult && (
            <div 
              className={`absolute w-[549px] h-[55px] top-[1644px] left-[478px] ${
                verificationResult === "real" ? "bg-[#5ab86b]" : "bg-[#ec2630]"
              } flex items-center justify-center`}
            >
              <div className="[font-family:'Arimo',Helvetica] font-bold italic text-white text-2xl">
                {verificationResult === "real" 
                  ? "CONFIRMED: Authentic News."
                  : "WARNING: Fake news alert!"}
              </div>
            </div>
          )}

          
          <div className="absolute w-full h-px top-[1767px] bg-[#3d352e]" />

          
          <div className="absolute w-[1444px] h-[272px] top-[1792px] left-10">
            <div className="absolute w-[1444px] top-0 left-0 [font-family:'Anton',Helvetica] font-normal text-[#3d352e] text-[58px] tracking-[0] leading-[normal]">
              AI-Powered verification: Detecting fake news with technology
            </div>

            <div className="absolute w-[1035px] top-[95px] left-[7px] [font-family:'Arimo',Helvetica] font-normal text-[#3d352e] text-xl text-justify tracking-[0] leading-[normal]">
              In an era where misinformation spreads rapidly, artificial
              intelligence is emerging as a crucial tool in verifying news
              authenticity. A machine learning model utilizing a Random Forest
              Classifier in Natural Language Processing (NLP) is proving
              effective in distinguishing between fake and legitimate news. By
              analyzing patterns in language the model learns to identify deceptive content with high
              accuracy. This AI-driven approach helps combat disinformation by
              providing automated fact-checking mechanisms. As technology
              advances, such models will play a vital role in ensuring the
              integrity of digital information.
            </div>

            <img
              className="absolute w-[313px] h-[169px] top-[103px] left-[1074px] object-cover"
              alt="Russian foreign"
              src="/russian-foreign-ministry-fake-news-640-1.png"
            />
          </div>

          
          <div className="absolute w-full h-px top-[2100px] bg-[#3d352e]" />
          <div className="absolute w-full h-4 top-[2118px] bg-[#979797]" />

        </div>
      </div>
    </div>
  );
};
