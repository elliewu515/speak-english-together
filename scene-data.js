const SCENE_DATA = [
  {
    "id": "home",
    "name": "居家日常",
    "name_en": "At Home",
    "icon": "🏠",
    "categories": {
      "morning": {
        "name": "晨起洗漱",
        "keywords": [
          "早上",
          "起床",
          "刷牙",
          "洗脸",
          "穿衣服",
          "梳头",
          "照镜子",
          "整理床铺",
          "洗漱",
          "晨间"
        ],
        "sub_scenes": {
          "wake_up": {
            "name": "起床",
            "keywords": [
              "起床",
              "醒来",
              "赖床",
              "早上",
              "闹钟",
              "太阳",
              "天亮"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Wake up!",
                  "zh": "起床啦！"
                },
                {
                  "en": "Good morning!",
                  "zh": "早上好！"
                },
                {
                  "en": "Time to get up!",
                  "zh": "该起床了！"
                },
                {
                  "en": "Rise and shine!",
                  "zh": "太阳晒屁股啦！"
                },
                {
                  "en": "Open your eyes!",
                  "zh": "睁开眼睛！"
                }
              ],
              "A1": [
                {
                  "en": "Did you sleep well? Time to start the day!",
                  "zh": "睡得好吗？该开始新的一天了！"
                },
                {
                  "en": "Let's open the curtains and let the sunshine in.",
                  "zh": "我们拉开窗帘让阳光进来。"
                },
                {
                  "en": "Stretch your arms and legs before getting out of bed.",
                  "zh": "下床前伸伸胳膊伸伸腿。"
                },
                {
                  "en": "Don't forget to make your bed this morning.",
                  "zh": "今天早上别忘了整理床铺。"
                },
                {
                  "en": "What did you dream about last night?",
                  "zh": "昨晚做了什么梦？"
                }
              ],
              "A2": [
                {
                  "en": "Starting the day early gives us more time to enjoy the morning.",
                  "zh": "早起能让我们有更多时间享受早晨。"
                },
                {
                  "en": "I know it's hard to get up, but once you're out of bed you'll feel great.",
                  "zh": "我知道起床很难，但一旦起来了你会感觉很棒。"
                },
                {
                  "en": "Let's make a habit of waking up at the same time every day.",
                  "zh": "我们养成每天同一时间起床的习惯吧。"
                }
              ],
              "B1": [
                {
                  "en": "Establishing a consistent morning routine is one of the most valuable habits you can develop.",
                  "zh": "建立稳定的晨间习惯是你能培养的最宝贵的习惯之一。"
                },
                {
                  "en": "The way you start your morning often determines how the rest of your day unfolds.",
                  "zh": "你如何开始早晨，往往决定了这一天会怎样展开。"
                },
                {
                  "en": "I'm proud that you're becoming more independent with your morning routine.",
                  "zh": "我为你越来越能独立完成晨间流程感到骄傲。"
                }
              ]
            }
          },
          "brush_teeth": {
            "name": "刷牙",
            "keywords": [
              "刷牙",
              "牙膏",
              "牙刷",
              "漱口",
              "杯子",
              "牙齿",
              "干净"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Brush your teeth!",
                  "zh": "刷牙！"
                },
                {
                  "en": "Up and down!",
                  "zh": "上下刷！"
                },
                {
                  "en": "Put on toothpaste.",
                  "zh": "挤牙膏。"
                },
                {
                  "en": "Rinse your mouth.",
                  "zh": "漱漱口。"
                },
                {
                  "en": "Clean teeth, happy smile!",
                  "zh": "干净牙齿，开心笑容！"
                }
              ],
              "A1": [
                {
                  "en": "Let's brush our teeth for two minutes — front, back, and top.",
                  "zh": "我们刷牙两分钟——前面、后面和上面都要刷。"
                },
                {
                  "en": "Don't forget to brush your tongue too, it keeps your breath fresh.",
                  "zh": "别忘了刷舌头，这样口气才清新。"
                },
                {
                  "en": "Use a pea-sized amount of toothpaste, that's all you need.",
                  "zh": "用豌豆大小的牙膏就够了。"
                },
                {
                  "en": "Brushing after every meal keeps cavities away.",
                  "zh": "每餐后刷牙能防止蛀牙。"
                }
              ],
              "A2": [
                {
                  "en": "Good dental hygiene now will save you from painful visits to the dentist later.",
                  "zh": "现在养成良好的牙齿卫生习惯，以后就不用受牙医之苦。"
                },
                {
                  "en": "You've been doing a great job brushing on your own — your teeth look so healthy!",
                  "zh": "你自己刷牙做得很好——牙齿看起来真健康！"
                },
                {
                  "en": "Remember to replace your toothbrush every three months.",
                  "zh": "记得每三个月换一次牙刷。"
                }
              ],
              "B1": [
                {
                  "en": "Taking responsibility for your own dental care is a sign of growing maturity.",
                  "zh": "对自己的牙齿护理负责，是成熟的标志。"
                },
                {
                  "en": "A bright smile is one of the first things people notice — taking care of your teeth is an investment in yourself.",
                  "zh": "灿烂的笑容是别人最先注意到的——爱护牙齿是对自己的投资。"
                },
                {
                  "en": "You're at an age where these daily habits will stick with you for life, so let's make them good ones.",
                  "zh": "你这个年龄养成的日常习惯会伴随一生，所以让我们养成好习惯。"
                }
              ]
            }
          },
          "wash_face": {
            "name": "洗脸",
            "keywords": [
              "洗脸",
              "毛巾",
              "擦脸",
              "水",
              "洗面奶",
              "干净"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Wash your face!",
                  "zh": "洗脸！"
                },
                {
                  "en": "Use the towel.",
                  "zh": "用毛巾。"
                },
                {
                  "en": "Splash water!",
                  "zh": "泼水！"
                },
                {
                  "en": "Wipe your face.",
                  "zh": "擦擦脸。"
                }
              ],
              "A1": [
                {
                  "en": "Let's wash your face with warm water — it feels so refreshing.",
                  "zh": "我们用温水洗脸吧——感觉真清爽。"
                },
                {
                  "en": "Don't forget to wash behind your ears and your neck too.",
                  "zh": "别忘了洗耳朵后面和脖子。"
                },
                {
                  "en": "Pat your face dry gently with the towel, don't rub too hard.",
                  "zh": "用毛巾轻轻拍干脸，别太用力擦。"
                },
                {
                  "en": "Washing your face in the morning helps you feel awake and fresh.",
                  "zh": "早上洗脸能让你清醒又清爽。"
                }
              ],
              "A2": [
                {
                  "en": "A clean face is the foundation of good skincare — start this habit early.",
                  "zh": "干净的脸是好皮肤的基础——早点养成这个习惯。"
                },
                {
                  "en": "You're old enough now to wash your face properly without my help.",
                  "zh": "你现在够大了，可以不用我帮忙自己好好洗脸。"
                },
                {
                  "en": "Remember to use a clean towel each time to avoid bacteria.",
                  "zh": "记得每次用干净的毛巾，避免细菌。"
                }
              ],
              "B1": [
                {
                  "en": "Taking care of your skin now will benefit you for decades to come.",
                  "zh": "现在爱护皮肤，未来几十年都会受益。"
                },
                {
                  "en": "Personal grooming is not about vanity — it's about self-respect and presenting your best self.",
                  "zh": "个人仪表不是虚荣——是自尊和展现最好的自己。"
                },
                {
                  "en": "I've noticed you've become quite diligent about your morning wash routine — well done.",
                  "zh": "我注意到你晨间洗漱越来越认真了——做得很好。"
                }
              ]
            }
          },
          "get_dressed": {
            "name": "穿衣服",
            "keywords": [
              "穿衣服",
              "穿衣",
              "裤子",
              "袜子",
              "鞋",
              "外套",
              "扣子",
              "拉拉链"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Put on your shirt!",
                  "zh": "穿上衣！"
                },
                {
                  "en": "Pants on!",
                  "zh": "穿裤子！"
                },
                {
                  "en": "Socks and shoes!",
                  "zh": "袜子和鞋！"
                },
                {
                  "en": "Zip up!",
                  "zh": "拉上拉链！"
                },
                {
                  "en": "Button it!",
                  "zh": "扣上扣子！"
                }
              ],
              "A1": [
                {
                  "en": "Can you pick out your own clothes today? What do you feel like wearing?",
                  "zh": "今天能自己挑衣服吗？你想穿什么？"
                },
                {
                  "en": "Make sure your shirt is tucked in neatly before we go.",
                  "zh": "出门前把上衣掖整齐。"
                },
                {
                  "en": "It's a bit chilly today, so let's wear a jacket over that.",
                  "zh": "今天有点凉，外面再加件外套。"
                },
                {
                  "en": "You did the buttons all by yourself — that's wonderful!",
                  "zh": "你自己扣好了扣子——太棒了！"
                }
              ],
              "A2": [
                {
                  "en": "Choosing appropriate clothes for the weather is an important life skill.",
                  "zh": "根据天气选择合适的衣服是重要的生活技能。"
                },
                {
                  "en": "You're getting so good at dressing yourself — I hardly need to help anymore.",
                  "zh": "你自己穿衣服越来越厉害了——我几乎不需要帮忙了。"
                },
                {
                  "en": "Let's check the weather together and decide what would be best to wear.",
                  "zh": "我们一起看看天气，决定穿什么最合适。"
                }
              ],
              "B1": [
                {
                  "en": "How you present yourself through your clothing choices says a lot about your personality.",
                  "zh": "你通过穿衣选择展现出的形象，很能说明你的个性。"
                },
                {
                  "en": "I trust your judgment now when it comes to picking out appropriate outfits.",
                  "zh": "我现在相信你有能力挑选合适的穿搭。"
                },
                {
                  "en": "Being able to dress yourself independently is one of those milestones that shows real growth.",
                  "zh": "能独立穿衣是显示真正成长的重要里程碑。"
                }
              ]
            }
          },
          "comb_hair": {
            "name": "梳头",
            "keywords": [
              "梳头",
              "梳子",
              "辫子",
              "头发",
              "发型",
              "扎头发"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Comb your hair!",
                  "zh": "梳头！"
                },
                {
                  "en": "Pretty hair!",
                  "zh": "头发真漂亮！"
                },
                {
                  "en": "Nice and tidy!",
                  "zh": "整齐漂亮！"
                }
              ],
              "A1": [
                {
                  "en": "Let me help you comb your hair — it's a bit tangled this morning.",
                  "zh": "我来帮你梳头——今天早上头发有点打结。"
                },
                {
                  "en": "Would you like a ponytail or two braids today?",
                  "zh": "今天想扎马尾还是编两个辫子？"
                },
                {
                  "en": "Your hair is getting so long and beautiful — should we try a new style?",
                  "zh": "你的头发越来越长越来越漂亮了——要不要试试新发型？"
                }
              ],
              "A2": [
                {
                  "en": "You're getting much better at combing your own hair — practice makes perfect.",
                  "zh": "你自己梳头越来越好了——熟能生巧。"
                },
                {
                  "en": "Taking a minute to tidy your hair in the morning makes a big difference.",
                  "zh": "早上花一分钟整理头发，效果大不一样。"
                },
                {
                  "en": "If you want to try styling your hair differently, I'm happy to help you learn.",
                  "zh": "如果你想尝试不同发型，我很乐意教你。"
                }
              ],
              "B1": [
                {
                  "en": "Personal grooming habits like hair care are part of presenting yourself with confidence.",
                  "zh": "头发护理这样的个人仪表习惯是自信展示自己的一部分。"
                },
                {
                  "en": "You're at the age where you can start taking full ownership of your appearance.",
                  "zh": "你到了可以完全对自己形象负责的年龄了。"
                },
                {
                  "en": "A well-groomed appearance shows respect for yourself and those around you.",
                  "zh": "整洁的外表体现了对自己和周围人的尊重。"
                }
              ]
            }
          },
          "look_mirror": {
            "name": "照镜子",
            "keywords": [
              "镜子",
              "照镜子",
              "看看",
              "漂亮",
              "帅",
              "检查"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look in the mirror!",
                  "zh": "照照镜子！"
                },
                {
                  "en": "You look great!",
                  "zh": "你真好看！"
                },
                {
                  "en": "All ready!",
                  "zh": "准备好了！"
                }
              ],
              "A1": [
                {
                  "en": "Take a look in the mirror — is everything in place?",
                  "zh": "照照镜子——都整齐了吗？"
                },
                {
                  "en": "Check yourself in the mirror before we head out the door.",
                  "zh": "出门前照镜子检查一下自己。"
                },
                {
                  "en": "You look so handsome/pretty today! Ready to start the day?",
                  "zh": "你今天看起来真帅/漂亮！准备好开始新一天了吗？"
                }
              ],
              "A2": [
                {
                  "en": "A quick mirror check is a good habit — it takes just a few seconds.",
                  "zh": "快速照镜子检查是个好习惯——只需要几秒钟。"
                },
                {
                  "en": "It's not about being vain — it's about making sure you're presentable.",
                  "zh": "这不是虚荣——是确保自己整洁得体。"
                },
                {
                  "en": "I remember when you were too small to see yourself in the mirror — look how much you've grown!",
                  "zh": "我记得你以前太小了照不到镜子——看你长多大了！"
                }
              ],
              "B1": [
                {
                  "en": "Taking a moment to check your appearance before going out is a sign of self-awareness.",
                  "zh": "出门前花点时间检查仪表是自我意识的体现。"
                },
                {
                  "en": "Confidence often starts with feeling good about how you present yourself.",
                  "zh": "自信往往从对自己展示的形象感到满意开始。"
                },
                {
                  "en": "These small morning rituals add up to a disciplined and organized lifestyle.",
                  "zh": "这些小小的晨间仪式累积起来，就是有纪律有组织的生活方式。"
                }
              ]
            }
          }
        }
      },
      "meals": {
        "name": "一日三餐",
        "keywords": [
          "吃饭",
          "早餐",
          "午餐",
          "晚餐",
          "零食",
          "碗筷",
          "餐桌",
          "做饭"
        ],
        "sub_scenes": {
          "breakfast": {
            "name": "早餐",
            "keywords": [
              "早餐",
              "早饭",
              "牛奶",
              "面包",
              "鸡蛋",
              "麦片"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Breakfast time!",
                  "zh": "吃早餐啦！"
                },
                {
                  "en": "Drink your milk!",
                  "zh": "喝牛奶！"
                },
                {
                  "en": "Eat your egg!",
                  "zh": "吃鸡蛋！"
                },
                {
                  "en": "Yummy bread!",
                  "zh": "面包好吃！"
                },
                {
                  "en": "All done!",
                  "zh": "吃完啦！"
                }
              ],
              "A1": [
                {
                  "en": "A good breakfast gives you energy for the whole morning.",
                  "zh": "好的早餐能给你一整个上午的能量。"
                },
                {
                  "en": "Would you like cereal or toast this morning?",
                  "zh": "今天早上想吃麦片还是吐司？"
                },
                {
                  "en": "Don't rush — chew your food slowly and enjoy it.",
                  "zh": "别急——慢慢嚼，好好享受。"
                },
                {
                  "en": "Finish your milk and you'll grow strong and tall.",
                  "zh": "喝完牛奶你会长得又高又壮。"
                }
              ],
              "A2": [
                {
                  "en": "They say breakfast is the most important meal of the day, and I agree.",
                  "zh": "有人说早餐是一天中最重要的一餐，我同意。"
                },
                {
                  "en": "Let's try to include some fruit with breakfast — it's a healthy habit.",
                  "zh": "早餐我们尽量搭配点水果——这是个健康习惯。"
                },
                {
                  "en": "I'm glad you're learning to appreciate a proper breakfast instead of rushing out.",
                  "zh": "很高兴你学会享受一顿正经早餐，而不是匆匆出门。"
                }
              ],
              "B1": [
                {
                  "en": "A balanced breakfast with protein, carbs, and fruit sets the foundation for a productive day.",
                  "zh": "含有蛋白质、碳水和水果的均衡早餐，为高效的一天打下基础。"
                },
                {
                  "en": "Now that you're older, you can start preparing simple breakfast items yourself.",
                  "zh": "你长大了，可以开始自己准备简单的早餐了。"
                },
                {
                  "en": "Making time for a proper breakfast is a form of self-care that too many people skip.",
                  "zh": "花时间吃一顿正经早餐是一种自我关爱，太多人忽略了这一点。"
                }
              ]
            }
          },
          "lunch_dinner": {
            "name": "午餐/晚餐",
            "keywords": [
              "午饭",
              "晚饭",
              "午餐",
              "晚餐",
              "吃饭",
              "菜",
              "米饭",
              "面条"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Time to eat!",
                  "zh": "吃饭啦！"
                },
                {
                  "en": "Try the vegetables!",
                  "zh": "尝尝蔬菜！"
                },
                {
                  "en": "One more bite!",
                  "zh": "再吃一口！"
                },
                {
                  "en": "Good eating!",
                  "zh": "吃得真好！"
                },
                {
                  "en": "All finished!",
                  "zh": "吃完了！"
                }
              ],
              "A1": [
                {
                  "en": "We're having rice with stir-fried vegetables and fish tonight.",
                  "zh": "今晚吃米饭、炒青菜和鱼。"
                },
                {
                  "en": "Try a little bit of everything on your plate — it's good for you.",
                  "zh": "盘子里的每样都尝一点——对身体好。"
                },
                {
                  "en": "How was school today? Tell me about it while we eat.",
                  "zh": "今天学校怎么样？边吃边跟我说说。"
                },
                {
                  "en": "Use your chopsticks properly — hold them like this.",
                  "zh": "正确使用筷子——像这样拿。"
                }
              ],
              "A2": [
                {
                  "en": "Eating together as a family is a tradition I hope you'll always cherish.",
                  "zh": "一家人一起吃饭是传统，我希望你永远珍惜。"
                },
                {
                  "en": "A balanced meal has grains, protein, and vegetables — can you identify each on your plate?",
                  "zh": "均衡的一餐包含谷物、蛋白质和蔬菜——你能在盘子里分别指出来吗？"
                },
                {
                  "en": "I appreciate that you're willing to try new foods now — that's very mature.",
                  "zh": "我很欣赏你现在愿意尝试新食物了——这很成熟。"
                }
              ],
              "B1": [
                {
                  "en": "The dinner table is where families connect — these moments are precious and fleeting.",
                  "zh": "餐桌是家人交流的地方——这些时光珍贵而短暂。"
                },
                {
                  "en": "Learning to appreciate a variety of foods will serve you well when you travel the world.",
                  "zh": "学会欣赏各种食物，将来环游世界时会让你受益匪浅。"
                },
                {
                  "en": "You're old enough to understand that what you eat directly affects how you feel and perform.",
                  "zh": "你足够大了，能理解你吃的东西直接影响你的感受和表现。"
                }
              ]
            }
          },
          "snacks": {
            "name": "吃零食/水果",
            "keywords": [
              "零食",
              "水果",
              "苹果",
              "香蕉",
              "饼干",
              "糖果",
              "酸奶"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Want a snack?",
                  "zh": "想吃零食吗？"
                },
                {
                  "en": "Here's an apple!",
                  "zh": "给你苹果！"
                },
                {
                  "en": "Just one cookie!",
                  "zh": "只能吃一块饼干！"
                },
                {
                  "en": "Eat your fruit!",
                  "zh": "吃水果！"
                }
              ],
              "A1": [
                {
                  "en": "You can have a small snack now, but don't spoil your appetite for dinner.",
                  "zh": "现在可以吃点小零食，但别影响晚饭胃口。"
                },
                {
                  "en": "Would you like an apple or a banana for your snack?",
                  "zh": "零食想吃苹果还是香蕉？"
                },
                {
                  "en": "Fruit is nature's candy — it's sweet and good for you at the same time.",
                  "zh": "水果是大自然的糖果——又甜又健康。"
                },
                {
                  "en": "Let's save the cookies for after dinner, okay?",
                  "zh": "饼干留到晚饭后吃，好吗？"
                }
              ],
              "A2": [
                {
                  "en": "Choosing fruit over processed snacks is a small decision that makes a big difference.",
                  "zh": "选择水果而不是加工零食，是个小小决定却有大大影响。"
                },
                {
                  "en": "I'm proud that you're learning to make healthy snack choices on your own.",
                  "zh": "我为你学会自己做健康的零食选择感到骄傲。"
                },
                {
                  "en": "Too much sugar can make you feel tired later — let's pick something balanced.",
                  "zh": "吃太多糖之后会让你觉得累——我们选点均衡的。"
                }
              ],
              "B1": [
                {
                  "en": "Mindful snacking is about listening to your body — eat when you're hungry, not when you're bored.",
                  "zh": "有意识的吃零食是倾听身体——饿了吃，而不是无聊了吃。"
                },
                {
                  "en": "The snack habits you form now will influence your relationship with food as an adult.",
                  "zh": "你现在形成的零食习惯会影响你成年后与食物的关系。"
                },
                {
                  "en": "There's nothing wrong with enjoying treats — it's about balance and moderation.",
                  "zh": "享受美食没有错——关键是平衡和适度。"
                }
              ]
            }
          },
          "set_table": {
            "name": "摆碗筷/收拾餐桌",
            "keywords": [
              "摆碗筷",
              "收拾",
              "桌子",
              "碗",
              "筷子",
              "盘子",
              "擦桌子"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Set the table!",
                  "zh": "摆桌子！"
                },
                {
                  "en": "Chopsticks here!",
                  "zh": "筷子放这里！"
                },
                {
                  "en": "Bowls for everyone!",
                  "zh": "每人一个碗！"
                },
                {
                  "en": "Clean up time!",
                  "zh": "收拾时间！"
                }
              ],
              "A1": [
                {
                  "en": "Can you help set the table? We need bowls, chopsticks, and spoons.",
                  "zh": "能帮忙摆桌子吗？我们需要碗、筷子和勺子。"
                },
                {
                  "en": "After dinner, please help clear the table and wipe it down.",
                  "zh": "晚饭后请帮忙收拾桌子擦干净。"
                },
                {
                  "en": "Everyone in the family helps with meals — it's teamwork.",
                  "zh": "家里每个人都帮忙做饭吃饭的事——这是团队合作。"
                },
                {
                  "en": "You're such a great helper in the kitchen now!",
                  "zh": "你现在真是厨房里的好帮手！"
                }
              ],
              "A2": [
                {
                  "en": "Contributing to household chores like setting the table builds responsibility.",
                  "zh": "参与摆桌子这样的家务能培养责任感。"
                },
                {
                  "en": "I really appreciate it when you help without being asked — that shows initiative.",
                  "zh": "你不需要被叫就主动帮忙，我真的很感激——这显示了主动性。"
                },
                {
                  "en": "These small contributions make our family run smoothly — everyone plays a part.",
                  "zh": "这些小小的贡献让我们的家庭运转顺畅——每个人都扮演着角色。"
                }
              ],
              "B1": [
                {
                  "en": "Taking ownership of mealtime responsibilities is part of becoming a contributing family member.",
                  "zh": "承担用餐时间的责任是成为有贡献的家庭成员的一部分。"
                },
                {
                  "en": "The habit of cleaning up after yourself will serve you well in every aspect of life.",
                  "zh": "用完东西收拾干净的习惯会在生活的各个方面让你受益。"
                },
                {
                  "en": "I've noticed you've been taking more initiative with household tasks — that's real maturity.",
                  "zh": "我注意到你在家务上越来越主动了——这是真正的成熟。"
                }
              ]
            }
          },
          "help_cook": {
            "name": "做饭帮忙",
            "keywords": [
              "做饭",
              "帮忙",
              "洗菜",
              "搅拌",
              "厨房",
              "切菜",
              "炒菜"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Help me cook!",
                  "zh": "帮我做饭！"
                },
                {
                  "en": "Wash the veggies!",
                  "zh": "洗菜！"
                },
                {
                  "en": "Stir it, stir it!",
                  "zh": "搅拌搅拌！"
                }
              ],
              "A1": [
                {
                  "en": "Would you like to help me cook dinner tonight? You can wash the vegetables.",
                  "zh": "今晚想帮我做饭吗？你可以洗菜。"
                },
                {
                  "en": "Be careful near the stove — it's hot. Stay back while I'm cooking.",
                  "zh": "炉子旁边要小心——很烫。我炒菜时你站远一点。"
                },
                {
                  "en": "Cooking together is one of my favorite ways to spend time with you.",
                  "zh": "一起做饭是我最喜欢和你相处的时光之一。"
                }
              ],
              "A2": [
                {
                  "en": "Learning to cook is one of the most useful skills you'll ever develop.",
                  "zh": "学做饭是你将培养的最有用的技能之一。"
                },
                {
                  "en": "Let me teach you how to crack an egg properly — it takes practice.",
                  "zh": "我来教你怎么正确打鸡蛋——需要练习。"
                },
                {
                  "en": "You're ready to learn some basic cooking — what would you like to make first?",
                  "zh": "你可以学一些基本烹饪了——想先做什么？"
                }
              ],
              "B1": [
                {
                  "en": "Being able to prepare a meal for yourself is a fundamental step toward independence.",
                  "zh": "能为自己做一顿饭是走向独立的基本一步。"
                },
                {
                  "en": "Cooking is both a practical skill and a creative outlet — there's always something new to learn.",
                  "zh": "烹饪既是实用技能也是创意出口——总有新东西可学。"
                },
                {
                  "en": "The recipes I'm teaching you now have been passed down through our family for generations.",
                  "zh": "我现在教你的菜谱是我们家代代相传的。"
                }
              ]
            }
          }
        }
      },
      "hygiene": {
        "name": "个人卫生",
        "keywords": [
          "卫生",
          "干净",
          "洗澡",
          "洗手",
          "上厕所",
          "剪指甲",
          "擤鼻涕",
          "浴室",
          "清洁"
        ],
        "sub_scenes": {
          "bath": {
            "name": "洗澡/淋浴",
            "keywords": [
              "洗澡",
              "淋浴",
              "泡澡",
              "沐浴",
              "浴缸",
              "沐浴露",
              "泡泡"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Time for a bath!",
                  "zh": "洗澡时间到！"
                },
                {
                  "en": "Bubbles, bubbles!",
                  "zh": "泡泡，泡泡！"
                },
                {
                  "en": "Wash your body!",
                  "zh": "洗身体！"
                },
                {
                  "en": "Rinse off!",
                  "zh": "冲干净！"
                },
                {
                  "en": "All clean now!",
                  "zh": "洗干净啦！"
                }
              ],
              "A1": [
                {
                  "en": "Let's get ready for a bath. Can you get your towel?",
                  "zh": "准备洗澡啦，你能拿一下毛巾吗？"
                },
                {
                  "en": "The water temperature is just right — not too hot, not too cold.",
                  "zh": "水温刚刚好——不烫也不凉。"
                },
                {
                  "en": "Don't forget to wash under your arms and behind your knees.",
                  "zh": "别忘了洗腋下和膝盖后面。"
                },
                {
                  "en": "You're getting so good at washing yourself — I'm proud of you.",
                  "zh": "你自己洗澡越来越棒了——我为你骄傲。"
                }
              ],
              "A2": [
                {
                  "en": "Let's run the bath and add some bubble bath — which scent do you want?",
                  "zh": "我们放洗澡水加点泡泡浴吧——你想要什么香味的？"
                },
                {
                  "en": "Taking a warm bath before bed helps your body relax and prepares you for sleep.",
                  "zh": "睡前洗个温水澡能帮身体放松，为睡眠做好准备。"
                },
                {
                  "en": "You can manage your bath time mostly on your own now — that's a big step.",
                  "zh": "你现在基本能自己洗澡了——这是一大步。"
                }
              ],
              "B1": [
                {
                  "en": "Personal hygiene is not just about being clean — it's about respecting your body.",
                  "zh": "个人卫生不只是保持干净——更是尊重自己的身体。"
                },
                {
                  "en": "I've noticed you've been taking initiative with your bath routine — that shows real maturity.",
                  "zh": "我发现你最近洗澡都很主动——这说明你真的长大了。"
                },
                {
                  "en": "You're old enough now to manage your own bath time — but I'm always here if you need help.",
                  "zh": "你现在够大了，可以自己管理洗澡时间了——但需要帮忙随时叫我。"
                }
              ]
            }
          },
          "wash_hands": {
            "name": "洗手",
            "keywords": [
              "洗手",
              "肥皂",
              "消毒",
              "洗干净",
              "搓",
              "泡沫"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Wash your hands!",
                  "zh": "洗洗手！"
                },
                {
                  "en": "Use soap!",
                  "zh": "用肥皂！"
                },
                {
                  "en": "Rub rub rub!",
                  "zh": "搓搓搓！"
                },
                {
                  "en": "Rinse well!",
                  "zh": "冲干净！"
                }
              ],
              "A1": [
                {
                  "en": "Let's wash our hands before we eat.",
                  "zh": "吃饭前我们先洗手。"
                },
                {
                  "en": "Rub your hands together with soap — front, back, and between fingers.",
                  "zh": "用肥皂搓手——手心手背还有指缝。"
                },
                {
                  "en": "Sing 'Happy Birthday' twice while you wash — that's the perfect time!",
                  "zh": "边洗手边唱两遍生日快乐歌——时间刚刚好！"
                },
                {
                  "en": "Washing hands is the easiest way to stay healthy and not get sick.",
                  "zh": "洗手是保持健康不生病最简单的方法。"
                }
              ],
              "A2": [
                {
                  "en": "Washing your hands regularly is the best way to keep germs away.",
                  "zh": "经常洗手是远离细菌的最好方法。"
                },
                {
                  "en": "Remember to wash your hands after playing outside and before every meal.",
                  "zh": "记得户外玩耍后和每餐前都要洗手。"
                },
                {
                  "en": "You've made hand-washing such a good habit — I barely need to remind you anymore.",
                  "zh": "你已经把洗手变成了这么好的习惯——我几乎不需要提醒你了。"
                }
              ],
              "B1": [
                {
                  "en": "Good hand hygiene is one of the most effective ways to prevent the spread of illness.",
                  "zh": "良好的手部卫生是预防疾病传播最有效的方法之一。"
                },
                {
                  "en": "The hand-washing habit you've developed will protect you throughout your life.",
                  "zh": "你养成的洗手习惯会在整个人生中保护你。"
                },
                {
                  "en": "It's impressive how you consistently remember to wash your hands — that's real self-discipline.",
                  "zh": "你能坚持记得洗手令人印象深刻——这是真正的自律。"
                }
              ]
            }
          },
          "toilet": {
            "name": "上厕所",
            "keywords": [
              "上厕所",
              "尿尿",
              "大便",
              "小便",
              "马桶",
              "冲水",
              "擦屁股"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Do you need to pee?",
                  "zh": "要尿尿吗？"
                },
                {
                  "en": "Let's go potty!",
                  "zh": "去上厕所吧！"
                },
                {
                  "en": "Sit down.",
                  "zh": "坐下。"
                },
                {
                  "en": "Flush the toilet.",
                  "zh": "冲马桶。"
                },
                {
                  "en": "All done?",
                  "zh": "好了吗？"
                }
              ],
              "A1": [
                {
                  "en": "Do you need to use the bathroom before we go out?",
                  "zh": "出门前要上厕所吗？"
                },
                {
                  "en": "Remember to flush the toilet when you're done.",
                  "zh": "用完记得冲马桶。"
                },
                {
                  "en": "Can you go by yourself now? You're such a big kid!",
                  "zh": "能自己去上厕所了吗？真是大孩子了！"
                },
                {
                  "en": "Don't forget to wash your hands after using the bathroom.",
                  "zh": "上完厕所别忘了洗手。"
                }
              ],
              "A2": [
                {
                  "en": "You're completely independent with the bathroom now. That's a big milestone!",
                  "zh": "你现在完全能自己上厕所了，这是个重要的里程碑！"
                },
                {
                  "en": "Always remember: flush, wash hands, and turn off the light.",
                  "zh": "永远记住：冲水、洗手、关灯。"
                },
                {
                  "en": "It's important to go to the bathroom when you feel the need — don't hold it too long.",
                  "zh": "有需要就去上厕所很重要——别憋太久。"
                }
              ],
              "B1": [
                {
                  "en": "Taking care of your own bathroom needs is something you've mastered — one less thing to worry about.",
                  "zh": "自己处理上厕所的需求你已经完全掌握了——少了一件需要操心的事。"
                },
                {
                  "en": "Good bathroom habits are part of being a considerate person — always leave it clean for the next person.",
                  "zh": "良好的如厕习惯是做一个体贴的人的一部分——永远为下一个人保持干净。"
                },
                {
                  "en": "I remember when potty training felt like it would never end — look how far you've come.",
                  "zh": "我记得当初如厕训练感觉永远不会结束——看看你进步了多少。"
                }
              ]
            }
          },
          "trim_nails": {
            "name": "剪指甲",
            "keywords": [
              "剪指甲",
              "指甲",
              "指甲刀",
              "长",
              "短",
              "干净"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's cut your nails!",
                  "zh": "我们来剪指甲！"
                },
                {
                  "en": "Sit still.",
                  "zh": "坐好别动。"
                },
                {
                  "en": "Nice and short!",
                  "zh": "又短又干净！"
                }
              ],
              "A1": [
                {
                  "en": "Your nails are getting long — let's trim them before they scratch someone.",
                  "zh": "你的指甲长长了——在刮到别人之前我们来修剪一下。"
                },
                {
                  "en": "Keeping your nails short and clean is part of good hygiene.",
                  "zh": "保持指甲短而干净是良好卫生的一部分。"
                },
                {
                  "en": "Hold still while I clip — I don't want to accidentally cut too close.",
                  "zh": "我剪的时候别动——我不想不小心剪太深。"
                }
              ],
              "A2": [
                {
                  "en": "Clean nails show that you take care of yourself — it's a sign of good habits.",
                  "zh": "干净的指甲说明你爱护自己——是好习惯的标志。"
                },
                {
                  "en": "Would you like to try trimming your own nails? I'll supervise to make sure it's safe.",
                  "zh": "想试着自己剪指甲吗？我会在旁边看着确保安全。"
                },
                {
                  "en": "Dirt under fingernails can carry germs — that's why we keep them clean and short.",
                  "zh": "指甲缝里的脏东西会携带细菌——所以我们要保持干净和短。"
                }
              ],
              "B1": [
                {
                  "en": "Taking responsibility for your own grooming — including nail care — is part of growing up.",
                  "zh": "对自己的仪表负责——包括指甲护理——是成长的一部分。"
                },
                {
                  "en": "Well-maintained nails are a subtle but important part of making a good impression.",
                  "zh": "修剪得当的指甲是给人好印象的一个微妙但重要的部分。"
                },
                {
                  "en": "You're old enough to manage your own nail care now — just remember to do it regularly.",
                  "zh": "你够大了可以自己管理指甲护理了——记得定期做就行。"
                }
              ]
            }
          },
          "blow_nose": {
            "name": "擤鼻涕",
            "keywords": [
              "鼻涕",
              "擤鼻涕",
              "纸巾",
              "擦鼻子",
              "感冒",
              "流鼻涕"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Blow your nose!",
                  "zh": "擤鼻涕！"
                },
                {
                  "en": "Use a tissue!",
                  "zh": "用纸巾！"
                },
                {
                  "en": "Throw it away.",
                  "zh": "扔掉。"
                }
              ],
              "A1": [
                {
                  "en": "Your nose is running — let me help you blow it.",
                  "zh": "你流鼻涕了——我来帮你擤。"
                },
                {
                  "en": "Blow gently, one nostril at a time. Like this.",
                  "zh": "轻轻擤，一次一个鼻孔。像这样。"
                },
                {
                  "en": "Always use a tissue and throw it in the bin afterwards.",
                  "zh": "一定要用纸巾，用完扔进垃圾桶。"
                }
              ],
              "A2": [
                {
                  "en": "You know how to blow your own nose now — just remember to do it gently.",
                  "zh": "你现在会自己擤鼻涕了——记得轻轻擤。"
                },
                {
                  "en": "Covering your nose and mouth when you sneeze helps prevent spreading germs to others.",
                  "zh": "打喷嚏时捂住口鼻有助于防止把细菌传给别人。"
                },
                {
                  "en": "If your nose is stuffy, try blowing it after a warm shower — it helps loosen everything up.",
                  "zh": "如果鼻子堵了，洗完热水澡后擤——有助疏通。"
                }
              ],
              "B1": [
                {
                  "en": "Proper hygiene when you have a cold protects not just you but everyone around you.",
                  "zh": "感冒时正确的卫生习惯不仅保护你，也保护身边每个人。"
                },
                {
                  "en": "These small hygiene habits might seem trivial but they make a huge difference in staying healthy.",
                  "zh": "这些小卫生习惯看似微不足道，但对保持健康有巨大影响。"
                },
                {
                  "en": "I'm glad you've learned to manage these things independently — it's all part of taking care of yourself.",
                  "zh": "很高兴你学会独立处理这些事情了——这都是照顾自己的一部分。"
                }
              ]
            }
          }
        }
      },
      "chores": {
        "name": "家务劳动",
        "keywords": [
          "家务",
          "整理",
          "打扫",
          "洗衣",
          "倒垃圾",
          "帮忙",
          "收拾"
        ],
        "sub_scenes": {
          "tidy_toys": {
            "name": "整理玩具/房间",
            "keywords": [
              "整理",
              "收拾",
              "玩具",
              "房间",
              "放回去",
              "乱",
              "归类"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Clean up toys!",
                  "zh": "收玩具！"
                },
                {
                  "en": "Put it back!",
                  "zh": "放回去！"
                },
                {
                  "en": "In the box!",
                  "zh": "放盒子里！"
                },
                {
                  "en": "Good helper!",
                  "zh": "好帮手！"
                }
              ],
              "A1": [
                {
                  "en": "Let's tidy up your toys before bedtime. Where does this one go?",
                  "zh": "睡前我们把玩具收好吧。这个放哪？"
                },
                {
                  "en": "A tidy room makes it so much easier to find things, doesn't it?",
                  "zh": "整洁的房间找东西方便多了，对吧？"
                },
                {
                  "en": "You play, you clean — that's the rule. It's only fair.",
                  "zh": "你玩，你收——这是规矩。很公平。"
                },
                {
                  "en": "I'll race you — let's see who can put away five things first!",
                  "zh": "我跟你比赛——看谁先收好五样东西！"
                }
              ],
              "A2": [
                {
                  "en": "Keeping your space organized is a habit that will help you throughout your life.",
                  "zh": "保持空间整洁是一个会让你终身受益的习惯。"
                },
                {
                  "en": "I've noticed you've been keeping your room tidier lately — I really appreciate that.",
                  "zh": "我注意到你最近房间保持得更整洁了——我真的很感激。"
                },
                {
                  "en": "An organized environment helps you think more clearly and feel calmer.",
                  "zh": "有序的环境能帮你思考更清晰、心情更平静。"
                }
              ],
              "B1": [
                {
                  "en": "The state of your personal space often reflects your state of mind — keeping it tidy shows self-respect.",
                  "zh": "你个人空间的状态往往反映你的心理状态——保持整洁体现了自尊。"
                },
                {
                  "en": "You're at an age where taking ownership of your space is an important step toward independence.",
                  "zh": "你到了对自己空间负责的年龄——这是走向独立的重要一步。"
                },
                {
                  "en": "A few minutes of tidying each day prevents the overwhelming mess that builds up over a week.",
                  "zh": "每天花几分钟整理，就不会让一周的杂乱堆积成山。"
                }
              ]
            }
          },
          "cleaning": {
            "name": "打扫卫生",
            "keywords": [
              "打扫",
              "扫地",
              "拖地",
              "擦桌子",
              "吸尘器",
              "抹布",
              "灰尘"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's sweep!",
                  "zh": "我们来扫地！"
                },
                {
                  "en": "Wipe the table!",
                  "zh": "擦桌子！"
                },
                {
                  "en": "Clean, clean!",
                  "zh": "擦擦擦！"
                },
                {
                  "en": "So dusty!",
                  "zh": "好多灰！"
                }
              ],
              "A1": [
                {
                  "en": "Can you help me wipe the table after dinner? Here's the cloth.",
                  "zh": "晚饭后能帮我擦桌子吗？给你抹布。"
                },
                {
                  "en": "Let's do a quick clean-up together — many hands make light work.",
                  "zh": "我们一起快速打扫一下——人多力量大。"
                },
                {
                  "en": "When you sweep, start from the corners and work your way to the center.",
                  "zh": "扫地时从角落开始，往中间扫。"
                },
                {
                  "en": "A clean home is a happy home — everyone pitches in.",
                  "zh": "干净的家是快乐的家——每个人都出力。"
                }
              ],
              "A2": [
                {
                  "en": "Contributing to keeping our home clean shows that you care about our shared space.",
                  "zh": "帮忙保持家里干净，说明你关心我们共同的空间。"
                },
                {
                  "en": "Learning to clean properly now will make living on your own much easier someday.",
                  "zh": "现在学会正确打扫，将来独立生活会轻松很多。"
                },
                {
                  "en": "I don't expect perfection — just effort. And you're doing great.",
                  "zh": "我不要求完美——只要努力。你做得很棒。"
                }
              ],
              "B1": [
                {
                  "en": "Household cleanliness is a shared responsibility — it's not one person's job.",
                  "zh": "家庭清洁是共同责任——不是一个人的事。"
                },
                {
                  "en": "The discipline of regular cleaning translates to discipline in other areas of life.",
                  "zh": "定期打扫的纪律会转化为生活中其他领域的自律。"
                },
                {
                  "en": "I'm proud that you understand the importance of contributing to our household without being asked.",
                  "zh": "我为你理解不需要提醒就为家庭做贡献的重要性感到骄傲。"
                }
              ]
            }
          },
          "laundry": {
            "name": "洗晾衣服",
            "keywords": [
              "洗衣",
              "晾衣",
              "叠衣",
              "洗衣机",
              "衣架",
              "脏衣服",
              "干净衣服"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Dirty clothes here!",
                  "zh": "脏衣服放这！"
                },
                {
                  "en": "Hang it up!",
                  "zh": "挂起来！"
                },
                {
                  "en": "Fold the clothes!",
                  "zh": "叠衣服！"
                },
                {
                  "en": "All dry!",
                  "zh": "干了！"
                }
              ],
              "A1": [
                {
                  "en": "Put your dirty clothes in the laundry basket, please.",
                  "zh": "请把脏衣服放进洗衣篮。"
                },
                {
                  "en": "Can you help me sort the laundry? Lights in this pile, darks in that one.",
                  "zh": "能帮我分类衣服吗？浅色放这堆，深色放那堆。"
                },
                {
                  "en": "Let's fold these clothes together — I'll show you the easy way.",
                  "zh": "我们一起叠这些衣服——我教你简单的方法。"
                }
              ],
              "A2": [
                {
                  "en": "Learning to do laundry is an essential life skill — let me walk you through the steps.",
                  "zh": "学洗衣服是基本生活技能——我带你走一遍步骤。"
                },
                {
                  "en": "You're ready to learn how to use the washing machine — it's simpler than you think.",
                  "zh": "你可以学用洗衣机了——比你想的简单。"
                },
                {
                  "en": "Taking care of your own laundry is a great way to show responsibility.",
                  "zh": "自己管理衣物是展示责任感的好方式。"
                }
              ],
              "B1": [
                {
                  "en": "Being able to manage your own laundry from start to finish is a cornerstone of independent living.",
                  "zh": "能从头到尾自己管理洗衣是独立生活的基石。"
                },
                {
                  "en": "The satisfaction of wearing clothes you washed and folded yourself is something you'll come to appreciate.",
                  "zh": "穿上自己洗自己叠的衣服的那种满足感，你会慢慢体会到的。"
                },
                {
                  "en": "These domestic skills might seem mundane, but they're the foundation of a well-run life.",
                  "zh": "这些家务技能看似平凡，却是运转良好生活的基础。"
                }
              ]
            }
          },
          "take_out_trash": {
            "name": "倒垃圾",
            "keywords": [
              "倒垃圾",
              "垃圾",
              "垃圾桶",
              "分类",
              "回收",
              "扔"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Throw this away!",
                  "zh": "扔掉这个！"
                },
                {
                  "en": "In the bin!",
                  "zh": "扔垃圾桶！"
                },
                {
                  "en": "Take out the trash!",
                  "zh": "倒垃圾！"
                }
              ],
              "A1": [
                {
                  "en": "Can you take this to the trash can for me? Thank you!",
                  "zh": "能帮我把这个扔垃圾桶吗？谢谢！"
                },
                {
                  "en": "This goes in the recycling bin — it's paper, not regular trash.",
                  "zh": "这个放回收桶——是纸，不是普通垃圾。"
                },
                {
                  "en": "Let's learn about sorting trash: recyclables, kitchen waste, and other waste.",
                  "zh": "我们来学垃圾分类：可回收、厨余和其他垃圾。"
                }
              ],
              "A2": [
                {
                  "en": "Proper waste sorting is important for the environment — every little bit helps.",
                  "zh": "正确垃圾分类对环境很重要——每一点都有帮助。"
                },
                {
                  "en": "I'd like you to start taking responsibility for emptying the trash bins in your room.",
                  "zh": "我希望你开始负责清空你房间的垃圾桶。"
                },
                {
                  "en": "Recycling is one of the easiest ways we can contribute to protecting our planet.",
                  "zh": "回收是我们能为保护地球做的最简单的事之一。"
                }
              ],
              "B1": [
                {
                  "en": "Understanding waste management and recycling is part of being an environmentally conscious citizen.",
                  "zh": "理解垃圾处理和回收是成为有环保意识公民的一部分。"
                },
                {
                  "en": "The small act of sorting your trash correctly is a daily vote for the kind of world you want to live in.",
                  "zh": "正确分类垃圾的小小举动，是你每天为想要生活的世界投的一票。"
                },
                {
                  "en": "Taking responsibility for household waste is one of those chores that quietly builds character.",
                  "zh": "负责家庭垃圾处理是那种默默塑造品格的日常琐事。"
                }
              ]
            }
          },
          "water_plants": {
            "name": "浇花/照顾植物",
            "keywords": [
              "浇花",
              "浇水",
              "植物",
              "花盆",
              "叶子",
              "晒",
              "绿"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Water the plant!",
                  "zh": "浇花！"
                },
                {
                  "en": "Not too much!",
                  "zh": "别浇太多！"
                },
                {
                  "en": "Look, it's growing!",
                  "zh": "看，它在长！"
                }
              ],
              "A1": [
                {
                  "en": "The plants look thirsty — shall we water them together?",
                  "zh": "植物看起来渴了——我们一起浇水吧？"
                },
                {
                  "en": "See how the leaves are drooping? That means they need water.",
                  "zh": "看到叶子垂下来了吗？那说明它们需要水了。"
                },
                {
                  "en": "Taking care of plants teaches us patience — they grow slowly but surely.",
                  "zh": "照顾植物教会我们耐心——它们长得慢但一定会长。"
                }
              ],
              "A2": [
                {
                  "en": "Each plant needs different amounts of water and sunlight — let's learn about their needs.",
                  "zh": "每种植物需要不同量的水和阳光——我们来了解它们的需求。"
                },
                {
                  "en": "I'd like to put you in charge of watering the plants — it's a weekly responsibility.",
                  "zh": "我想让你负责浇花——这是每周的责任。"
                },
                {
                  "en": "Watching something grow because you took care of it is one of life's simple pleasures.",
                  "zh": "看着自己照顾的东西成长是生活中简单的快乐之一。"
                }
              ],
              "B1": [
                {
                  "en": "Caring for living things — even plants — cultivates empathy and a sense of responsibility.",
                  "zh": "照顾有生命的东西——哪怕是植物——培养同理心和责任感。"
                },
                {
                  "en": "The patience required to nurture plants is the same patience you'll need for many things in life.",
                  "zh": "培育植物所需的耐心，和生活中许多事情需要的耐心是一样的。"
                },
                {
                  "en": "A green thumb isn't something you're born with — it's developed through attention and care.",
                  "zh": "园艺高手不是天生的——是通过关注和用心培养出来的。"
                }
              ]
            }
          }
        }
      },
      "bedtime": {
        "name": "晚间入睡",
        "keywords": [
          "晚上",
          "睡觉",
          "睡前",
          "晚安",
          "故事",
          "睡衣",
          "关灯"
        ],
        "sub_scenes": {
          "change_pajamas": {
            "name": "换睡衣",
            "keywords": [
              "换睡衣",
              "睡衣",
              "脱衣服",
              "换上",
              "舒服"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Put on pajamas!",
                  "zh": "穿睡衣！"
                },
                {
                  "en": "Take off your clothes.",
                  "zh": "脱衣服。"
                },
                {
                  "en": "Comfy jammies!",
                  "zh": "舒服的睡衣！"
                }
              ],
              "A1": [
                {
                  "en": "Time to change into your pajamas — which ones do you want to wear tonight?",
                  "zh": "该换睡衣了——今晚想穿哪套？"
                },
                {
                  "en": "Let's get you out of these day clothes and into something cozy for bed.",
                  "zh": "我们把白天的衣服脱了，换上舒服的睡衣。"
                },
                {
                  "en": "You can change into your pajamas by yourself now — you're getting so independent.",
                  "zh": "你现在能自己换睡衣了——越来越独立了。"
                }
              ],
              "A2": [
                {
                  "en": "Changing into sleepwear signals to your body that it's time to wind down.",
                  "zh": "换上睡衣是在告诉身体该放松下来了。"
                },
                {
                  "en": "You've been handling your bedtime routine so well — I'm really proud of you.",
                  "zh": "你的睡前流程处理得真好——我真的很为你骄傲。"
                },
                {
                  "en": "A consistent bedtime routine, starting with changing clothes, helps you fall asleep faster.",
                  "zh": "稳定的睡前流程，从换衣服开始，能帮你更快入睡。"
                }
              ],
              "B1": [
                {
                  "en": "The ritual of preparing for bed is as much psychological as it is physical.",
                  "zh": "睡前准备的仪式既是心理的也是身体的。"
                },
                {
                  "en": "Establishing a calming evening routine now will benefit your sleep quality for years to come.",
                  "zh": "现在建立平静的晚间流程，会让你未来多年受益于睡眠质量。"
                },
                {
                  "en": "I trust you to manage your own bedtime preparations — it's a sign of how much you've grown.",
                  "zh": "我相信你能自己管理睡前准备了——这标志着你成长了很多。"
                }
              ]
            }
          },
          "story_time": {
            "name": "讲故事/读绘本",
            "keywords": [
              "讲故事",
              "读绘本",
              "故事",
              "书",
              "翻页",
              "读",
              "睡前故事"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Story time!",
                  "zh": "故事时间！"
                },
                {
                  "en": "Once upon a time...",
                  "zh": "很久很久以前……"
                },
                {
                  "en": "The end!",
                  "zh": "讲完了！"
                },
                {
                  "en": "One more story?",
                  "zh": "再讲一个？"
                }
              ],
              "A1": [
                {
                  "en": "Pick a book and I'll read it to you before bed.",
                  "zh": "挑本书，睡前我读给你听。"
                },
                {
                  "en": "Let's read one chapter tonight — we can continue tomorrow.",
                  "zh": "今晚我们读一章——明天继续。"
                },
                {
                  "en": "What do you think will happen next in the story?",
                  "zh": "你觉得故事接下来会发生什么？"
                },
                {
                  "en": "Reading before bed helps your brain relax and gets you ready for sleep.",
                  "zh": "睡前阅读帮大脑放松，为睡眠做好准备。"
                }
              ],
              "A2": [
                {
                  "en": "Would you like to read a page to me tonight? I'd love to hear you.",
                  "zh": "今晚想读一页给我听吗？我很想听你读。"
                },
                {
                  "en": "Stories open up whole new worlds — that's the magic of reading.",
                  "zh": "故事打开全新的世界——这就是阅读的魔力。"
                },
                {
                  "en": "This is one of my favorite parts of the day — our quiet reading time together.",
                  "zh": "这是一天中我最喜欢的时刻之一——我们一起安静的阅读时光。"
                }
              ],
              "B1": [
                {
                  "en": "The stories we share at bedtime create memories that last far longer than the books themselves.",
                  "zh": "我们在睡前分享的故事创造的记忆，远比书本本身更持久。"
                },
                {
                  "en": "You're at an age where you can explore more complex stories — what genre interests you?",
                  "zh": "你到了能探索更复杂故事的年龄了——你对什么类型感兴趣？"
                },
                {
                  "en": "These bedtime reading sessions won't last forever — I treasure every one of them.",
                  "zh": "这些睡前阅读时光不会永远持续——我珍惜每一次。"
                }
              ]
            }
          },
          "say_goodnight": {
            "name": "说晚安/入睡",
            "keywords": [
              "晚安",
              "入睡",
              "关灯",
              "哄睡",
              "盖被子",
              "睡觉",
              "梦"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Good night!",
                  "zh": "晚安！"
                },
                {
                  "en": "Sweet dreams!",
                  "zh": "好梦！"
                },
                {
                  "en": "Close your eyes.",
                  "zh": "闭上眼睛。"
                },
                {
                  "en": "Sleep tight!",
                  "zh": "睡个好觉！"
                },
                {
                  "en": "I love you!",
                  "zh": "我爱你！"
                }
              ],
              "A1": [
                {
                  "en": "Time to turn off the lights and go to sleep. Sweet dreams, my love.",
                  "zh": "该关灯睡觉了。好梦，我的宝贝。"
                },
                {
                  "en": "Let me tuck you in nice and warm. Are you comfortable?",
                  "zh": "我给你盖好被子暖暖的。舒服吗？"
                },
                {
                  "en": "Think about something happy as you fall asleep — it brings good dreams.",
                  "zh": "入睡时想些开心的事——会带来好梦。"
                },
                {
                  "en": "I'll see you in the morning. Sleep well!",
                  "zh": "明天早上见。好好睡！"
                }
              ],
              "A2": [
                {
                  "en": "A good night's sleep helps your body grow and your brain process everything you learned today.",
                  "zh": "好的睡眠帮身体成长，帮大脑处理今天学到的所有东西。"
                },
                {
                  "en": "Try taking slow, deep breaths — it helps your body relax and drift off to sleep.",
                  "zh": "试试慢慢地深呼吸——能帮身体放松，渐渐入睡。"
                },
                {
                  "en": "I'm just in the next room if you need anything during the night.",
                  "zh": "如果晚上需要什么，我就在隔壁房间。"
                }
              ],
              "B1": [
                {
                  "en": "Sleep is when your body repairs itself and your mind consolidates memories — it's essential, not optional.",
                  "zh": "睡眠是身体修复、大脑巩固记忆的时候——是必需品，不是可选项。"
                },
                {
                  "en": "You're old enough to understand the importance of a consistent sleep schedule for your health.",
                  "zh": "你够大了，能理解稳定睡眠作息对健康的重要性。"
                },
                {
                  "en": "No matter how old you get, I'll always wish you sweet dreams.",
                  "zh": "不管你长多大，我永远会祝你做个好梦。"
                }
              ]
            }
          },
          "brush_teeth_night": {
            "name": "刷牙（睡前）",
            "keywords": [
              "刷牙",
              "睡前",
              "牙膏",
              "干净",
              "蛀牙",
              "睡前刷牙"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Brush before bed!",
                  "zh": "睡前刷牙！"
                },
                {
                  "en": "Clean teeth, sleep well!",
                  "zh": "干净牙齿，好好睡！"
                },
                {
                  "en": "No more food!",
                  "zh": "不能再吃东西了！"
                }
              ],
              "A1": [
                {
                  "en": "Don't forget to brush your teeth before bed — nighttime brushing is the most important.",
                  "zh": "睡前别忘了刷牙——晚上的刷牙最重要。"
                },
                {
                  "en": "If you don't brush at night, the sugar bugs will party on your teeth while you sleep.",
                  "zh": "晚上不刷牙的话，糖虫会在你睡觉时在牙齿上开派对。"
                },
                {
                  "en": "Brushing before bed means no food or drinks except water after this.",
                  "zh": "睡前刷牙意味着之后除了水不能吃任何东西。"
                }
              ],
              "A2": [
                {
                  "en": "Nighttime brushing removes all the food particles and bacteria from the entire day.",
                  "zh": "晚上刷牙清除一整天的食物残渣和细菌。"
                },
                {
                  "en": "You've made nighttime brushing such a solid habit — your dentist will be impressed.",
                  "zh": "你把睡前刷牙变成了这么牢固的习惯——牙医会很赞赏的。"
                },
                {
                  "en": "Good oral hygiene at night is especially important because your mouth produces less saliva while you sleep.",
                  "zh": "夜间口腔卫生特别重要，因为睡觉时口腔分泌的唾液会减少。"
                }
              ],
              "B1": [
                {
                  "en": "The two minutes you spend brushing before bed is a small investment with lifelong returns.",
                  "zh": "睡前花的两分钟刷牙，是终身受益的小投资。"
                },
                {
                  "en": "Dental health is connected to overall health in ways scientists are still discovering.",
                  "zh": "牙齿健康与全身健康的关联，科学家还在不断发现中。"
                },
                {
                  "en": "I'm glad you've internalized this habit — it's one less thing I need to remind you about.",
                  "zh": "很高兴你已经内化了这个习惯——又少了一件需要我提醒的事。"
                }
              ]
            }
          },
          "reflect_day": {
            "name": "回顾一天",
            "keywords": [
              "今天",
              "开心",
              "做了什么",
              "分享",
              "说说",
              "回顾"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Did you have fun today?",
                  "zh": "今天开心吗？"
                },
                {
                  "en": "What did you do?",
                  "zh": "你做了什么？"
                },
                {
                  "en": "Tell me more!",
                  "zh": "再跟我说说！"
                }
              ],
              "A1": [
                {
                  "en": "Before we sleep, tell me about your favorite moment today.",
                  "zh": "睡前告诉我今天你最喜欢的时刻。"
                },
                {
                  "en": "What made you laugh today? I'd love to hear about it.",
                  "zh": "今天什么让你笑了？我很想听听。"
                },
                {
                  "en": "Was there anything difficult today? We can talk about it.",
                  "zh": "今天有什么困难的事吗？我们可以聊聊。"
                }
              ],
              "A2": [
                {
                  "en": "Let's share our roses and thorns — the best part and the hardest part of today.",
                  "zh": "我们分享今天的玫瑰和刺——最美好的和最困难的部分。"
                },
                {
                  "en": "Reflecting on your day helps you appreciate the good moments and learn from the tough ones.",
                  "zh": "回顾一天能帮你珍惜美好时刻，从困难中学到东西。"
                },
                {
                  "en": "I love hearing about your day — it helps me understand your world better.",
                  "zh": "我喜欢听你讲一天的事——这帮我更好地理解你的世界。"
                }
              ],
              "B1": [
                {
                  "en": "Taking a few minutes to reflect before sleep helps process the day and find gratitude.",
                  "zh": "睡前花几分钟反思，有助于消化一天并找到感恩之心。"
                },
                {
                  "en": "The conversations we have in these quiet moments are some of the most meaningful we'll ever share.",
                  "zh": "我们在这些安静时刻的对话，是我们之间最有意义的交流。"
                },
                {
                  "en": "No matter what happened today, tomorrow is a fresh start — that's the beauty of each new day.",
                  "zh": "不管今天发生了什么，明天都是全新的开始——这就是每一天的美好。"
                }
              ]
            }
          }
        }
      },
      "family_time": {
        "name": "家庭时光",
        "keywords": [
          "家庭",
          "一起",
          "电视",
          "聊天",
          "音乐",
          "宠物",
          "拍照",
          "时光"
        ],
        "sub_scenes": {
          "watch_tv": {
            "name": "看电视/节目",
            "keywords": [
              "看电视",
              "节目",
              "动画",
              "卡通",
              "iPad",
              "平板",
              "手机",
              "屏幕"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "TV time!",
                  "zh": "看电视时间！"
                },
                {
                  "en": "What show?",
                  "zh": "什么节目？"
                },
                {
                  "en": "Not too close!",
                  "zh": "别离太近！"
                },
                {
                  "en": "Time's up!",
                  "zh": "时间到！"
                },
                {
                  "en": "Turn it off.",
                  "zh": "关掉。"
                }
              ],
              "A1": [
                {
                  "en": "You can watch one episode, then it's time to turn it off. Deal?",
                  "zh": "你可以看一集，然后就关掉。说好了？"
                },
                {
                  "en": "Sit a bit further back from the screen — it's better for your eyes.",
                  "zh": "坐得离屏幕远一点——对眼睛好。"
                },
                {
                  "en": "What did you learn from this show? Tell me about it.",
                  "zh": "你从这个节目学到了什么？跟我说说。"
                },
                {
                  "en": "Screen time is a treat, not an all-day activity. Let's keep it balanced.",
                  "zh": "屏幕时间是奖励，不是全天活动。我们保持平衡。"
                }
              ],
              "A2": [
                {
                  "en": "Let's set a timer so we know exactly when screen time ends — it helps avoid arguments.",
                  "zh": "我们设个计时器，这样就知道屏幕时间什么时候结束——避免争吵。"
                },
                {
                  "en": "There are so many educational shows now — let's pick something that's both fun and informative.",
                  "zh": "现在有很多教育类节目——我们选个既好玩又有知识性的。"
                },
                {
                  "en": "Too much screen time before bed can make it harder to fall asleep — that's why we limit it.",
                  "zh": "睡前太多屏幕时间会让你更难入睡——所以我们要限制。"
                }
              ],
              "B1": [
                {
                  "en": "Being mindful about screen time isn't about restriction — it's about making intentional choices.",
                  "zh": "注意屏幕时间不是限制——是做出有意识的选择。"
                },
                {
                  "en": "The content you consume shapes your thinking — choose wisely what you watch.",
                  "zh": "你消费的内容塑造你的思维——谨慎选择你看的东西。"
                },
                {
                  "en": "I trust you to self-regulate your screen time now — that's a responsibility that comes with maturity.",
                  "zh": "我相信你现在能自我管理屏幕时间了——这是伴随成熟而来的责任。"
                }
              ]
            }
          },
          "family_chat": {
            "name": "家庭聊天",
            "keywords": [
              "聊天",
              "说话",
              "今天",
              "分享",
              "讲讲",
              "听",
              "家人"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Tell me about your day!",
                  "zh": "跟我说说今天！"
                },
                {
                  "en": "What happened?",
                  "zh": "发生了什么？"
                },
                {
                  "en": "That's funny!",
                  "zh": "真好笑！"
                },
                {
                  "en": "I'm listening.",
                  "zh": "我在听。"
                }
              ],
              "A1": [
                {
                  "en": "How was your day? I really want to hear all about it.",
                  "zh": "今天怎么样？我真的很想听你全部说说。"
                },
                {
                  "en": "Let's sit together and chat for a bit — no phones, just us.",
                  "zh": "我们坐一起聊会儿——不看手机，就我们俩。"
                },
                {
                  "en": "You can tell me anything — I'm always here to listen.",
                  "zh": "你什么都可以跟我说——我永远都在听。"
                },
                {
                  "en": "What was the funniest thing that happened today?",
                  "zh": "今天发生的最好笑的事是什么？"
                }
              ],
              "A2": [
                {
                  "en": "These family conversations are what I look forward to most each day.",
                  "zh": "这些家庭对话是我每天最期待的事。"
                },
                {
                  "en": "Communication is the foundation of any strong relationship — including ours.",
                  "zh": "沟通是任何牢固关系的基础——包括我们的。"
                },
                {
                  "en": "I love how we can talk about anything together — that's something really special.",
                  "zh": "我喜欢我们可以无话不谈——这真的很特别。"
                }
              ],
              "B1": [
                {
                  "en": "The art of conversation — truly listening and responding — is becoming rare in our distracted world.",
                  "zh": "对话的艺术——真正倾听和回应——在这个分心的世界里越来越罕见。"
                },
                {
                  "en": "I hope you'll always feel comfortable talking to me, no matter how old you get.",
                  "zh": "我希望你永远觉得和我聊天很自在，不管你长多大。"
                },
                {
                  "en": "These moments of genuine connection are the threads that weave a family together.",
                  "zh": "这些真诚交流的时刻是编织家庭的线。"
                }
              ]
            }
          },
          "music_sing": {
            "name": "听音乐/唱歌",
            "keywords": [
              "听音乐",
              "唱歌",
              "跳舞",
              "音乐",
              "歌",
              "唱",
              "节奏"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's sing!",
                  "zh": "我们唱歌！"
                },
                {
                  "en": "Dance with me!",
                  "zh": "跟我跳舞！"
                },
                {
                  "en": "Louder!",
                  "zh": "大声点！"
                },
                {
                  "en": "Your turn!",
                  "zh": "轮到你了！"
                }
              ],
              "A1": [
                {
                  "en": "What song should we listen to? You pick!",
                  "zh": "我们听什么歌？你选！"
                },
                {
                  "en": "I love hearing you sing — your voice is so sweet.",
                  "zh": "我喜欢听你唱歌——你的声音真好听。"
                },
                {
                  "en": "Let's have a little dance party — just the two of us!",
                  "zh": "我们来个小舞会——就我们俩！"
                },
                {
                  "en": "Music makes everything better, doesn't it?",
                  "zh": "音乐让一切都更美好，不是吗？"
                }
              ],
              "A2": [
                {
                  "en": "Music has a way of lifting our mood — what song makes you happiest?",
                  "zh": "音乐有种提振心情的魔力——什么歌让你最开心？"
                },
                {
                  "en": "Singing together is one of the oldest ways humans have connected with each other.",
                  "zh": "一起唱歌是人类最古老的连接方式之一。"
                },
                {
                  "en": "You have a natural sense of rhythm — have you ever thought about learning an instrument?",
                  "zh": "你有天生的节奏感——有没有想过学一门乐器？"
                }
              ],
              "B1": [
                {
                  "en": "Music is a universal language that transcends words — it speaks directly to the heart.",
                  "zh": "音乐是超越语言的通用语言——它直接与心灵对话。"
                },
                {
                  "en": "Developing your musical taste is part of discovering who you are as a person.",
                  "zh": "培养音乐品味是探索自我的一部分。"
                },
                {
                  "en": "Whether you're happy or sad, there's always a song that understands exactly how you feel.",
                  "zh": "无论开心还是难过，总有一首歌完全理解你的感受。"
                }
              ]
            }
          },
          "pets": {
            "name": "和宠物玩",
            "keywords": [
              "宠物",
              "猫",
              "狗",
              "喂",
              "摸",
              "玩",
              "照顾"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Pet the dog!",
                  "zh": "摸摸狗狗！"
                },
                {
                  "en": "Gentle, gentle!",
                  "zh": "轻轻的！"
                },
                {
                  "en": "Feed the cat!",
                  "zh": "喂猫！"
                },
                {
                  "en": "Good friend!",
                  "zh": "好朋友！"
                }
              ],
              "A1": [
                {
                  "en": "Be gentle with the pet — they have feelings just like we do.",
                  "zh": "对小动物温柔点——它们和我们一样有感受。"
                },
                {
                  "en": "Can you help me feed the pet? It's almost dinner time for them too.",
                  "zh": "能帮我喂宠物吗？它们也快到吃饭时间了。"
                },
                {
                  "en": "Having a pet teaches us responsibility and kindness.",
                  "zh": "养宠物教会我们责任和善良。"
                },
                {
                  "en": "Look how happy the pet is to see you — you're their favorite person!",
                  "zh": "看宠物见到你多开心——你是它们最喜欢的人！"
                }
              ],
              "A2": [
                {
                  "en": "Taking care of a pet is a big commitment — they depend on us completely.",
                  "zh": "照顾宠物是重大的承诺——它们完全依赖我们。"
                },
                {
                  "en": "The bond between a child and their pet is something truly special.",
                  "zh": "孩子和宠物之间的纽带真的很特别。"
                },
                {
                  "en": "I've noticed how responsible you've become with pet care — I'm really impressed.",
                  "zh": "我注意到你在照顾宠物方面变得多么负责任——印象很深刻。"
                }
              ],
              "B1": [
                {
                  "en": "The unconditional love of a pet is one of life's purest gifts — cherish it.",
                  "zh": "宠物无条件的爱是生命中最纯粹的礼物之一——珍惜它。"
                },
                {
                  "en": "Caring for another living being develops empathy in ways that nothing else can.",
                  "zh": "照顾另一个生命以无可替代的方式培养同理心。"
                },
                {
                  "en": "The lessons in responsibility and compassion you learn from having a pet will stay with you forever.",
                  "zh": "从养宠物中学到的责任和同情心会永远伴随你。"
                }
              ]
            }
          },
          "photos": {
            "name": "拍照/看相册",
            "keywords": [
              "拍照",
              "照片",
              "相册",
              "笑",
              "看",
              "回忆",
              "合影"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Say cheese!",
                  "zh": "说茄子！"
                },
                {
                  "en": "Look at the camera!",
                  "zh": "看镜头！"
                },
                {
                  "en": "That's you!",
                  "zh": "这是你！"
                },
                {
                  "en": "So cute!",
                  "zh": "好可爱！"
                }
              ],
              "A1": [
                {
                  "en": "Let's take a photo together — big smile!",
                  "zh": "我们一起拍张照——笑一个！"
                },
                {
                  "en": "Look at this photo from when you were a baby — you've grown so much!",
                  "zh": "看这张你小时候的照片——你长这么大了！"
                },
                {
                  "en": "Photos help us remember all the happy times we've shared.",
                  "zh": "照片帮我们记住一起度过的所有快乐时光。"
                },
                {
                  "en": "One day you'll look back at these pictures and smile.",
                  "zh": "有一天你回头看这些照片会笑的。"
                }
              ],
              "A2": [
                {
                  "en": "Let's look through the family album — there are so many wonderful memories here.",
                  "zh": "我们一起翻翻家庭相册——这里有太多美好的回忆。"
                },
                {
                  "en": "Every photo tells a story — can you remember what we were doing in this one?",
                  "zh": "每张照片都在讲一个故事——你还记得这张我们在做什么吗？"
                },
                {
                  "en": "Taking photos isn't just about the picture — it's about capturing a moment in time.",
                  "zh": "拍照不只是为了照片——是为了捕捉时光中的一瞬间。"
                }
              ],
              "B1": [
                {
                  "en": "Photographs are windows into our past — they preserve moments that would otherwise fade from memory.",
                  "zh": "照片是通往过去的窗口——它们保存了否则会从记忆中淡去的时刻。"
                },
                {
                  "en": "In this digital age, printing and keeping physical photos feels even more meaningful.",
                  "zh": "在这个数字时代，打印和保存实体照片感觉更有意义。"
                },
                {
                  "en": "The photos we take today will be treasures for you to share with your own family someday.",
                  "zh": "我们今天拍的照片，将来会是你与自己家人分享的宝藏。"
                }
              ]
            }
          }
        }
      }
    }
  },
  {
    "id": "play",
    "name": "游戏与学习",
    "name_en": "Play & Learn",
    "icon": "🎮",
    "categories": {
      "indoor_games": {
        "name": "室内游戏",
        "keywords": [
          "玩",
          "游戏",
          "积木",
          "过家家",
          "拼图",
          "捉迷藏",
          "车",
          "轨道",
          "室内"
        ],
        "sub_scenes": {
          "blocks": {
            "name": "搭积木/乐高",
            "keywords": [
              "积木",
              "乐高",
              "搭建",
              "堆"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's build a tower!",
                  "zh": "我们搭个塔吧！"
                },
                {
                  "en": "Stack them up! Higher, higher!",
                  "zh": "堆上去！再高再高！"
                },
                {
                  "en": "Oh no, it fell down!",
                  "zh": "哎呀，倒了！"
                },
                {
                  "en": "Let's try again!",
                  "zh": "我们再试一次！"
                },
                {
                  "en": "What a tall tower!",
                  "zh": "好高的塔！"
                }
              ],
              "A1": [
                {
                  "en": "Let's build something together with blocks. What shall we make?",
                  "zh": "我们一起搭积木吧，做什么呢？"
                },
                {
                  "en": "Can you put the red block on top of the blue one?",
                  "zh": "能把红色积木放在蓝色上面吗？"
                },
                {
                  "en": "Wow, your tower is so tall! How many blocks did you use?",
                  "zh": "哇，你的塔好高！用了多少块？"
                },
                {
                  "en": "Be careful — if you put it on crooked, it might fall.",
                  "zh": "小心——放歪了可能会倒。"
                },
                {
                  "en": "You're such a creative builder! What is it?",
                  "zh": "你真是个有创意的建筑师！这是什么？"
                }
              ],
              "A2": [
                {
                  "en": "Let's follow the instructions to build this Lego set step by step.",
                  "zh": "我们按照说明书一步一步搭这套乐高。"
                },
                {
                  "en": "Building with blocks helps develop spatial thinking and patience.",
                  "zh": "搭积木能锻炼空间思维和耐心。"
                },
                {
                  "en": "I love seeing what you create from your imagination!",
                  "zh": "我喜欢看你想像力创造出来的东西！"
                }
              ],
              "B1": [
                {
                  "en": "The patience you show when building complex structures is really impressive.",
                  "zh": "你搭建复杂结构时展现的耐心真的很了不起。"
                }
              ]
            }
          },
          "pretend_play": {
            "name": "过家家/玩偶",
            "keywords": [
              "过家家",
              "玩偶",
              "娃娃",
              "角色扮演",
              "假装"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's play house!",
                  "zh": "我们玩过家家吧！"
                },
                {
                  "en": "The baby is hungry. Feed her!",
                  "zh": "宝宝饿了，喂她！"
                },
                {
                  "en": "Put the baby to sleep. Shh!",
                  "zh": "哄宝宝睡觉，嘘——"
                }
              ],
              "A1": [
                {
                  "en": "Who wants to be the mommy and who wants to be the daddy?",
                  "zh": "谁当妈妈谁当爸爸？"
                },
                {
                  "en": "Let's have a tea party! Would you like some tea?",
                  "zh": "我们来开茶话会吧！要喝茶吗？"
                },
                {
                  "en": "Your doll looks so pretty in that dress!",
                  "zh": "你的娃娃穿那条裙子真漂亮！"
                },
                {
                  "en": "Is the baby hungry? What should we cook for dinner?",
                  "zh": "宝宝饿了吗？我们做什么晚饭？"
                }
              ],
              "A2": [
                {
                  "en": "Pretend play is a great way to practice real-life situations.",
                  "zh": "假装游戏是练习真实生活场景的好方法。"
                },
                {
                  "en": "You're so good at making up stories for your dolls!",
                  "zh": "你给娃娃编故事真厉害！"
                }
              ],
              "B1": [
                {
                  "en": "Role-playing helps develop empathy — you learn to see things from another person's perspective.",
                  "zh": "角色扮演能培养同理心——你学会从别人的角度看问题。"
                }
              ]
            }
          },
          "puzzle": {
            "name": "拼图/桌游",
            "keywords": [
              "拼图",
              "桌游",
              "棋",
              "牌"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's do a puzzle!",
                  "zh": "我们玩拼图吧！"
                },
                {
                  "en": "Where does this piece go?",
                  "zh": "这块放哪里？"
                },
                {
                  "en": "You found it! Great job!",
                  "zh": "你找到了！太棒了！"
                }
              ],
              "A1": [
                {
                  "en": "Let's work on this puzzle together. Can you find the corner pieces?",
                  "zh": "我们一起拼这个拼图吧，你能找到角上的块吗？"
                },
                {
                  "en": "Look at the picture on the box — that will help us.",
                  "zh": "看看盒子上的图——那会帮到我们。"
                },
                {
                  "en": "It's okay if we can't finish it today. We can continue tomorrow.",
                  "zh": "今天拼不完没关系，明天继续。"
                }
              ],
              "A2": [
                {
                  "en": "Puzzles are great for your brain — they improve problem-solving skills.",
                  "zh": "拼图对大脑很好——能提升解决问题的能力。"
                },
                {
                  "en": "Let's try a harder puzzle this time. I think you're ready for the challenge!",
                  "zh": "这次试试更难的吧，我觉得你已经准备好了！"
                }
              ],
              "B1": [
                {
                  "en": "The satisfaction of finishing a difficult puzzle is worth all the effort.",
                  "zh": "完成一个难拼图的满足感，值得所有的努力。"
                }
              ]
            }
          },
          "hide_seek": {
            "name": "捉迷藏",
            "keywords": [
              "捉迷藏",
              "躲猫猫",
              "藏"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's play hide and seek!",
                  "zh": "我们玩捉迷藏吧！"
                },
                {
                  "en": "Where are you? I'll find you!",
                  "zh": "你在哪？我来找你！"
                },
                {
                  "en": "Found you! Peekaboo!",
                  "zh": "找到你了！躲猫猫！"
                },
                {
                  "en": "Now you hide! I'll count.",
                  "zh": "现在你藏！我来数。"
                },
                {
                  "en": "One, two, three... ready or not, here I come!",
                  "zh": "一、二、三……藏好了没，我来啦！"
                }
              ],
              "A1": [
                {
                  "en": "I'll close my eyes and count to ten. You go hide!",
                  "zh": "我闭上眼睛数到十，你去藏！"
                },
                {
                  "en": "Hmm, where could you be? Are you behind the door?",
                  "zh": "嗯，你会在哪呢？在门后面吗？"
                },
                {
                  "en": "That was a great hiding spot! I almost didn't find you!",
                  "zh": "那个藏身点太棒了！我差点没找到你！"
                }
              ],
              "A2": [
                {
                  "en": "Let's play hide and seek in the whole house — but no hiding in dangerous places, okay?",
                  "zh": "我们在整个房子里玩捉迷藏——但不能藏在危险的地方，好吗？"
                },
                {
                  "en": "You're getting too good at this! I need to improve my searching skills.",
                  "zh": "你越来越厉害了！我得提升搜索技巧了。"
                }
              ],
              "B1": [
                {
                  "en": "Even simple games like hide and seek create lasting childhood memories.",
                  "zh": "即使是捉迷藏这样简单的游戏，也能创造持久的童年回忆。"
                }
              ]
            }
          },
          "toy_cars": {
            "name": "玩车/轨道",
            "keywords": [
              "小汽车",
              "火车",
              "轨道",
              "推",
              "跑",
              "快",
              "赛车"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Vroom vroom!",
                  "zh": "呜呜呜！"
                },
                {
                  "en": "Push the car!",
                  "zh": "推小车！"
                },
                {
                  "en": "Go fast!",
                  "zh": "快快跑！"
                },
                {
                  "en": "Crash!",
                  "zh": "撞车啦！"
                }
              ],
              "A1": [
                {
                  "en": "Let's build a track for your cars — where should the bridge go?",
                  "zh": "我们给小车搭个轨道——桥放哪里？"
                },
                {
                  "en": "Line up all the cars from biggest to smallest.",
                  "zh": "把小车从大到小排好队。"
                },
                {
                  "en": "Which car is the fastest? Let's race them!",
                  "zh": "哪辆车最快？我们来比赛！"
                }
              ],
              "A2": [
                {
                  "en": "Building tracks and racing cars is a great way to learn about speed and distance.",
                  "zh": "搭轨道赛车是了解速度和距离的好方法。"
                },
                {
                  "en": "I love watching how creative you get with your track designs.",
                  "zh": "我喜欢看你设计轨道时的创意。"
                },
                {
                  "en": "You're learning about cause and effect every time you send a car down the track.",
                  "zh": "每次你把小车推下轨道，都在学习因果关系。"
                }
              ],
              "B1": [
                {
                  "en": "The engineering mindset you're developing through play will serve you in countless ways.",
                  "zh": "你通过玩耍培养的工程思维会在无数方面帮到你。"
                },
                {
                  "en": "There's something timeless about playing with toy cars — it sparks imagination across generations.",
                  "zh": "玩玩具车有种永恒的魅力——它能跨越世代激发想象力。"
                },
                {
                  "en": "The patience you show when building complex tracks is a skill that transfers to everything you do.",
                  "zh": "搭建复杂轨道时展现的耐心，会迁移到你做的每件事上。"
                }
              ]
            }
          }
        }
      },
      "arts_crafts": {
        "name": "美术手工",
        "keywords": [
          "画画",
          "手工",
          "剪纸",
          "橡皮泥",
          "贴纸",
          "串珠",
          "做",
          "涂色",
          "美术"
        ],
        "sub_scenes": {
          "drawing": {
            "name": "画画/涂色",
            "keywords": [
              "画画",
              "绘画",
              "涂色",
              "彩笔",
              "蜡笔",
              "颜料"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's draw!",
                  "zh": "我们画画吧！"
                },
                {
                  "en": "What color is this?",
                  "zh": "这是什么颜色？"
                },
                {
                  "en": "Draw a circle!",
                  "zh": "画个圆！"
                },
                {
                  "en": "So beautiful!",
                  "zh": "好漂亮！"
                },
                {
                  "en": "Color it red.",
                  "zh": "涂成红色。"
                },
                {
                  "en": "Show me your drawing!",
                  "zh": "给我看你的画！"
                },
                {
                  "en": "Good job! So creative!",
                  "zh": "真棒！好有创意！"
                },
                {
                  "en": "Let's hang it up!",
                  "zh": "我们挂起来吧！"
                }
              ],
              "A1": [
                {
                  "en": "What do you want to draw today?",
                  "zh": "今天你想画什么？"
                },
                {
                  "en": "Can you draw a rainbow? What colors do you need?",
                  "zh": "你能画一道彩虹吗？需要什么颜色？"
                },
                {
                  "en": "Don't draw on the wall — use the paper.",
                  "zh": "别在墙上画——画在纸上。"
                },
                {
                  "en": "What a beautiful picture! Tell me about it.",
                  "zh": "好漂亮的画！跟我说说。"
                },
                {
                  "en": "You're getting so good at coloring inside the lines!",
                  "zh": "你现在涂色越来越能涂在线里面了！"
                },
                {
                  "en": "Art is about having fun, not about being perfect.",
                  "zh": "画画是为了开心，不是为了完美。"
                }
              ],
              "A2": [
                {
                  "en": "Let's try a new art technique today — how about watercolor painting?",
                  "zh": "今天我们试试新的绘画技法——水彩画怎么样？"
                },
                {
                  "en": "I love how you mixed these colors. How did you make this shade?",
                  "zh": "我喜欢你调的颜色，这个色调怎么调出来的？"
                },
                {
                  "en": "Art is a wonderful way to express feelings that are hard to put into words.",
                  "zh": "画画是表达那些难以用语言描述的情感的绝妙方式。"
                },
                {
                  "en": "Would you like to take an art class? I think you have real talent.",
                  "zh": "想报个美术班吗？我觉得你真有天赋。"
                },
                {
                  "en": "Can you teach me how to draw that? You're better at it than I am!",
                  "zh": "你能教我怎么画吗？你比我画得好！"
                }
              ],
              "B1": [
                {
                  "en": "Creative expression is one of the most fulfilling things a person can do — it feeds the soul.",
                  "zh": "创意表达是一个人能做的最充实的事之一——它滋养灵魂。"
                },
                {
                  "en": "I've noticed your art style evolving over the years. It's fascinating to watch your journey.",
                  "zh": "我发现这些年你的画风在演变，看着你的旅程真令人着迷。"
                },
                {
                  "en": "The discipline of practicing art regularly is just as valuable as the creativity itself.",
                  "zh": "定期练习艺术的纪律性和创意本身一样宝贵。"
                }
              ]
            }
          },
          "paper_craft": {
            "name": "剪纸/折纸",
            "keywords": [
              "剪纸",
              "折纸",
              "纸",
              "剪刀"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's cut the paper!",
                  "zh": "我们剪纸吧！"
                },
                {
                  "en": "Be careful with scissors.",
                  "zh": "小心剪刀。"
                },
                {
                  "en": "Fold it like this.",
                  "zh": "像这样折。"
                }
              ],
              "A1": [
                {
                  "en": "Let's make paper snowflakes! Fold the paper and cut little shapes.",
                  "zh": "我们做纸雪花吧！把纸折起来剪小形状。"
                },
                {
                  "en": "Can you fold the paper in half? Now fold it again.",
                  "zh": "能把纸对折吗？再折一次。"
                },
                {
                  "en": "Wow, look what we made! It's beautiful!",
                  "zh": "哇，看我们做的！好漂亮！"
                },
                {
                  "en": "Let's make a paper airplane. Want to see whose flies farther?",
                  "zh": "我们做纸飞机吧，看看谁的飞得远？"
                }
              ],
              "A2": [
                {
                  "en": "Origami is the Japanese art of paper folding. Let's try making a crane!",
                  "zh": "折纸是日本的纸艺，我们试试折一只千纸鹤吧！"
                },
                {
                  "en": "Making things with your hands is so satisfying. You created that from a simple piece of paper!",
                  "zh": "动手做东西真让人满足，你从一张简单的纸创造出了那个！"
                }
              ],
              "B1": [
                {
                  "en": "Paper crafts teach precision and patience — skills that apply to many areas of life.",
                  "zh": "纸艺教会精准和耐心——这些技能适用于生活的很多方面。"
                }
              ]
            }
          },
          "clay": {
            "name": "捏橡皮泥/黏土",
            "keywords": [
              "橡皮泥",
              "黏土",
              "彩泥",
              "捏"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's play with clay!",
                  "zh": "我们玩橡皮泥吧！"
                },
                {
                  "en": "Roll it, roll it!",
                  "zh": "搓搓搓！"
                },
                {
                  "en": "Make a ball!",
                  "zh": "做个球！"
                },
                {
                  "en": "Squish it flat!",
                  "zh": "压扁它！"
                }
              ],
              "A1": [
                {
                  "en": "What shall we make with the play-doh today? A dinosaur? A flower?",
                  "zh": "今天用橡皮泥做什么？恐龙？花？"
                },
                {
                  "en": "Roll it into a snake — long and thin!",
                  "zh": "搓成一条蛇——又长又细！"
                },
                {
                  "en": "Let's mix blue and yellow. What color do you think we'll get?",
                  "zh": "我们把蓝色和黄色混一起，你觉得会变成什么颜色？"
                },
                {
                  "en": "Your little clay animals are so cute! Can you make a whole family?",
                  "zh": "你做的小黏土动物太可爱了！能做一整个家族吗？"
                }
              ],
              "A2": [
                {
                  "en": "Working with clay is great for developing fine motor skills.",
                  "zh": "玩黏土对发展精细动作能力很好。"
                },
                {
                  "en": "Let's let our clay creations dry overnight and paint them tomorrow.",
                  "zh": "我们让黏土作品晾一晚，明天再上色。"
                }
              ],
              "B1": [
                {
                  "en": "Sculpting with clay is like bringing your imagination into the physical world.",
                  "zh": "用黏土雕塑就像把你的想象带到现实世界。"
                }
              ]
            }
          },
          "stickers": {
            "name": "贴纸/印章",
            "keywords": [
              "贴纸",
              "印章",
              "贴",
              "印",
              "图案",
              "漂亮",
              "装饰"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Stick it on!",
                  "zh": "贴上去！"
                },
                {
                  "en": "Pretty sticker!",
                  "zh": "漂亮贴纸！"
                },
                {
                  "en": "Stamp it!",
                  "zh": "盖章！"
                },
                {
                  "en": "Look at the pattern!",
                  "zh": "看这个图案！"
                }
              ],
              "A1": [
                {
                  "en": "Where would you like to put this sticker? On your notebook or your water bottle?",
                  "zh": "这个贴纸你想贴哪？笔记本上还是水杯上？"
                },
                {
                  "en": "Let's make a sticker chart to track your daily tasks.",
                  "zh": "我们做个贴纸表来记录每天的任务。"
                },
                {
                  "en": "Press the stamp firmly and hold it for a second — then lift carefully.",
                  "zh": "印章用力按下去，停一秒——然后小心抬起来。"
                }
              ],
              "A2": [
                {
                  "en": "Stickers and stamps are a fun way to decorate and personalize your belongings.",
                  "zh": "贴纸和印章是装饰和个性化物品的有趣方式。"
                },
                {
                  "en": "Creating your own sticker collection teaches you about organizing and categorizing.",
                  "zh": "建立自己的贴纸收藏教会你整理和分类。"
                },
                {
                  "en": "The satisfaction of completing a sticker chart is a great lesson in goal-setting.",
                  "zh": "完成贴纸表的满足感是目标设定的很好一课。"
                }
              ],
              "B1": [
                {
                  "en": "Even simple creative activities like stamping develop fine motor skills and artistic sensibility.",
                  "zh": "即使是盖章这样简单的创意活动也能培养精细动作和艺术感。"
                },
                {
                  "en": "The aesthetic choices you make now — what you find beautiful — shape your creative identity.",
                  "zh": "你现在做的审美选择——你觉得美的东西——塑造着你的创意身份。"
                },
                {
                  "en": "Collecting and curating is a form of self-expression that many artists begin in childhood.",
                  "zh": "收集和策展是一种自我表达，许多艺术家从童年就开始了。"
                }
              ]
            }
          },
          "beading": {
            "name": "串珠/编织",
            "keywords": [
              "串珠",
              "编织",
              "绳子",
              "穿",
              "项链",
              "手链",
              "珠子"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Thread the bead!",
                  "zh": "穿珠子！"
                },
                {
                  "en": "One by one!",
                  "zh": "一个一个来！"
                },
                {
                  "en": "Pretty necklace!",
                  "zh": "漂亮项链！"
                },
                {
                  "en": "My turn!",
                  "zh": "轮到我了！"
                }
              ],
              "A1": [
                {
                  "en": "Let's make a bracelet together — you pick the colors and I'll help you tie it.",
                  "zh": "我们一起做手链——你选颜色，我帮你打结。"
                },
                {
                  "en": "Threading beads takes patience and steady hands — you're doing great!",
                  "zh": "穿珠子需要耐心和稳当的手——你做得很好！"
                },
                {
                  "en": "What pattern do you want to make? Red-blue-red-blue or something different?",
                  "zh": "你想做什么图案？红蓝红蓝还是别的？"
                }
              ],
              "A2": [
                {
                  "en": "Beading and weaving are ancient crafts practiced by cultures all around the world.",
                  "zh": "串珠和编织是世界各地文化都实践的古老手艺。"
                },
                {
                  "en": "The concentration required for threading tiny beads is excellent practice for focus.",
                  "zh": "穿小珠子需要的专注力是练习注意力的极好方式。"
                },
                {
                  "en": "Making something with your hands gives you a sense of accomplishment that's hard to match.",
                  "zh": "亲手做东西给你的成就感是难以比拟的。"
                }
              ],
              "B1": [
                {
                  "en": "Craftsmanship — the pride in making something well — is a value that extends far beyond arts and crafts.",
                  "zh": "工艺精神——做好一件东西的自豪感——是一种远超手工艺术的价值。"
                },
                {
                  "en": "The patience and precision you develop through crafts will benefit you in science, writing, and beyond.",
                  "zh": "通过手工培养的耐心和精确会让你在科学、写作等方面受益。"
                },
                {
                  "en": "There's a deep satisfaction in creating something tangible with your own two hands.",
                  "zh": "用自己双手创造有形的东西，有一种深深的满足感。"
                }
              ]
            }
          }
        }
      },
      "reading_learning": {
        "name": "阅读学习",
        "keywords": [
          "学习",
          "读书",
          "作业",
          "英语",
          "数字",
          "科学",
          "认字",
          "阅读",
          "练习"
        ],
        "sub_scenes": {
          "reading": {
            "name": "读绘本/故事书",
            "keywords": [
              "读绘本",
              "故事书",
              "读书",
              "阅读",
              "看书"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's read a book!",
                  "zh": "我们读书吧！"
                },
                {
                  "en": "What's this?",
                  "zh": "这是什么？"
                },
                {
                  "en": "Turn the page.",
                  "zh": "翻一页。"
                },
                {
                  "en": "Point to the cat.",
                  "zh": "指出小猫。"
                },
                {
                  "en": "The end! Again?",
                  "zh": "结束啦！再来一遍？"
                }
              ],
              "A1": [
                {
                  "en": "Which book do you want to read today?",
                  "zh": "今天想读哪本书？"
                },
                {
                  "en": "Can you find the letter A on this page?",
                  "zh": "你能在这一页找到字母A吗？"
                },
                {
                  "en": "What do you think will happen next?",
                  "zh": "你觉得接下来会发生什么？"
                },
                {
                  "en": "I love this story. It's one of my favorites too!",
                  "zh": "我喜欢这个故事，也是我最喜欢的之一！"
                }
              ],
              "A2": [
                {
                  "en": "Let's take turns reading aloud — you read one page, I'll read the next.",
                  "zh": "我们轮流大声读——你读一页，我读下一页。"
                },
                {
                  "en": "Reading every day is one of the best habits you can build.",
                  "zh": "每天阅读是你能养成的最好习惯之一。"
                },
                {
                  "en": "Books can take you to places you've never been and teach you things you never knew.",
                  "zh": "书能带你去从没去过的地方，教你从不知道的事。"
                }
              ],
              "B1": [
                {
                  "en": "The books you read shape the person you become. Choose them wisely.",
                  "zh": "你读的书塑造你成为什么样的人，要好好选。"
                },
                {
                  "en": "Reading isn't just about learning — it's about experiencing other lives and perspectives.",
                  "zh": "阅读不只是学习——是体验别样的人生和视角。"
                }
              ]
            }
          },
          "homework": {
            "name": "写作业",
            "keywords": [
              "作业",
              "功课",
              "学习",
              "练习"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Time to study!",
                  "zh": "学习时间！"
                },
                {
                  "en": "Write your name.",
                  "zh": "写你的名字。"
                },
                {
                  "en": "Good job! A star for you!",
                  "zh": "真棒！给你一颗星！"
                }
              ],
              "A1": [
                {
                  "en": "Do you have any homework today? Let's do it together.",
                  "zh": "今天有作业吗？我们一起做。"
                },
                {
                  "en": "Take your time. It's okay to make mistakes.",
                  "zh": "慢慢来，犯错没关系。"
                },
                {
                  "en": "Let me check your work. Wow, you got them all right!",
                  "zh": "我检查一下，哇，全对了！"
                },
                {
                  "en": "If you're stuck, let's figure it out together.",
                  "zh": "如果卡住了，我们一起想办法。"
                }
              ],
              "A2": [
                {
                  "en": "Let's make a study plan so you don't feel overwhelmed.",
                  "zh": "我们做个学习计划，这样你就不会觉得压力太大了。"
                },
                {
                  "en": "Break your homework into small pieces — it's easier that way.",
                  "zh": "把作业拆成小块——这样容易多了。"
                },
                {
                  "en": "I know this subject is hard, but I believe in you. Keep trying!",
                  "zh": "我知道这门课很难，但我相信你，继续加油！"
                }
              ],
              "B1": [
                {
                  "en": "The habits you build now, like time management, will benefit you for the rest of your life.",
                  "zh": "你现在养成的时间管理等习惯，会让你受益终身。"
                },
                {
                  "en": "Education isn't just about grades — it's about discovering what you're passionate about.",
                  "zh": "教育不只是分数——更重要的是发现你真正热爱什么。"
                }
              ]
            }
          },
          "learn_english": {
            "name": "学英语",
            "keywords": [
              "英语",
              "单词",
              "字母",
              "拼读",
              "ABC",
              "念",
              "发音"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "A-B-C!",
                  "zh": "ABC！"
                },
                {
                  "en": "Say it again!",
                  "zh": "再说一遍！"
                },
                {
                  "en": "Good pronunciation!",
                  "zh": "发音真好！"
                },
                {
                  "en": "What's this word?",
                  "zh": "这个单词是什么？"
                }
              ],
              "A1": [
                {
                  "en": "Let's practice some English words together — repeat after me.",
                  "zh": "我们一起练英语单词——跟我读。"
                },
                {
                  "en": "What English words did you learn today? Teach me one!",
                  "zh": "今天学了什么英语单词？教我一个！"
                },
                {
                  "en": "Reading English books is a great way to learn new words naturally.",
                  "zh": "读英语书是自然学新单词的好方法。"
                }
              ],
              "A2": [
                {
                  "en": "Learning a second language opens doors to understanding different cultures.",
                  "zh": "学第二语言打开了理解不同文化的大门。"
                },
                {
                  "en": "The more English you practice, the more confident you'll become in speaking it.",
                  "zh": "英语练得越多，说起来就越自信。"
                },
                {
                  "en": "Don't worry about making mistakes — that's how we learn and improve.",
                  "zh": "别担心犯错——犯错是我们学习和进步的方式。"
                }
              ],
              "B1": [
                {
                  "en": "Being bilingual is a gift that will benefit you throughout your entire life and career.",
                  "zh": "会两种语言是一份礼物，会在你整个人生和事业中受益。"
                },
                {
                  "en": "Language learning is not just about words — it's about seeing the world through different eyes.",
                  "zh": "语言学习不只是学单词——是用不同的眼光看世界。"
                },
                {
                  "en": "The discipline of daily language practice builds character as much as it builds vocabulary.",
                  "zh": "每日语言练习的纪律既塑造品格也积累词汇。"
                }
              ]
            }
          },
          "numbers": {
            "name": "认数字/数数",
            "keywords": [
              "数字",
              "数数",
              "123",
              "算",
              "几个",
              "加减",
              "数学"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "One, two, three!",
                  "zh": "一二三！"
                },
                {
                  "en": "Count with me!",
                  "zh": "跟我数！"
                },
                {
                  "en": "How many?",
                  "zh": "几个？"
                },
                {
                  "en": "Let's add them up!",
                  "zh": "加起来！"
                }
              ],
              "A1": [
                {
                  "en": "Let's count all the apples in the bowl — how many are there?",
                  "zh": "我们数碗里的苹果——有几个？"
                },
                {
                  "en": "If you have three cookies and I give you two more, how many do you have?",
                  "zh": "如果你有3块饼干，我再给你2块，你有几块？"
                },
                {
                  "en": "Numbers are everywhere — let's find them on the clock, the calendar, and the remote control.",
                  "zh": "数字无处不在——我们在钟上、日历上和遥控器上找找看。"
                }
              ],
              "A2": [
                {
                  "en": "Math is like a puzzle — every problem has a solution waiting to be discovered.",
                  "zh": "数学像个谜题——每个问题都有待发现的解法。"
                },
                {
                  "en": "Understanding numbers helps you in everyday life, from shopping to cooking.",
                  "zh": "理解数字帮你在日常生活中应对一切，从购物到做饭。"
                },
                {
                  "en": "You're getting so quick with mental math — your brain is getting stronger every day.",
                  "zh": "你心算越来越快了——你的大脑每天都在变强。"
                }
              ],
              "B1": [
                {
                  "en": "Mathematical thinking is not just about numbers — it's about logic, patterns, and problem-solving.",
                  "zh": "数学思维不只是数字——是逻辑、模式和解决问题。"
                },
                {
                  "en": "The foundation you're building in math now will support advanced concepts later.",
                  "zh": "你现在打下的数学基础将支撑以后的高级概念。"
                },
                {
                  "en": "Numbers tell stories — from the distance to the stars to the beats of your heart.",
                  "zh": "数字讲述故事——从星星的距离到你心跳的次数。"
                }
              ]
            }
          },
          "science": {
            "name": "科学小实验",
            "keywords": [
              "实验",
              "科学",
              "动手",
              "观察",
              "神奇",
              "变化",
              "探索"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's do an experiment!",
                  "zh": "我们做实验！"
                },
                {
                  "en": "Watch what happens!",
                  "zh": "看会发生什么！"
                },
                {
                  "en": "Wow, it changed!",
                  "zh": "哇，变了！"
                },
                {
                  "en": "Let's test it!",
                  "zh": "我们来试试！",
                  "keywords": [
                    "试试",
                    "测试"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Let's mix baking soda and vinegar and see what happens — stand back!",
                  "zh": "我们把小苏打和醋混合看看会发生什么——退后！"
                },
                {
                  "en": "Science is all about asking questions and finding answers through experiments.",
                  "zh": "科学就是问问题然后通过实验找答案。"
                },
                {
                  "en": "What do you predict will happen? Let's write down our guess first.",
                  "zh": "你预测会发生什么？我们先写下猜测。"
                }
              ],
              "A2": [
                {
                  "en": "The scientific method — observe, question, hypothesize, experiment — applies to everything in life.",
                  "zh": "科学方法——观察、提问、假设、实验——适用于生活中的一切。"
                },
                {
                  "en": "Every great scientist started as a curious child just like you.",
                  "zh": "每个伟大的科学家都是从像你这样好奇的孩子开始的。"
                },
                {
                  "en": "When an experiment doesn't work as expected, that's not failure — that's data.",
                  "zh": "当实验不如预期时，那不是失败——那是数据。"
                }
              ],
              "B1": [
                {
                  "en": "Scientific literacy is one of the most powerful tools you can develop for understanding the modern world.",
                  "zh": "科学素养是你理解现代世界能培养的最强大工具之一。"
                },
                {
                  "en": "The curiosity you show during experiments is the same curiosity that drives human progress.",
                  "zh": "你做实验时展现的好奇心，正是推动人类进步的好奇心。"
                },
                {
                  "en": "Remember that every 'why' question you ask is a tiny scientific inquiry.",
                  "zh": "记住，你问的每个「为什么」都是一次微小的科学探究。"
                }
              ]
            }
          }
        }
      }
    }
  },
  {
    "id": "outdoors",
    "name": "户外活动",
    "name_en": "Outdoors",
    "icon": "🌳",
    "categories": {
      "park_play": {
        "name": "公园玩耍",
        "keywords": [
          "公园",
          "秋千",
          "滑梯",
          "沙坑",
          "风筝",
          "泡泡",
          "野餐",
          "跑步",
          "户外玩耍"
        ],
        "sub_scenes": {
          "swing_slide": {
            "name": "荡秋千/滑滑梯",
            "keywords": [
              "秋千",
              "滑梯",
              "滑滑梯",
              "跷跷板"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Slide down! Whee!",
                  "zh": "滑下来！呜——"
                },
                {
                  "en": "Swing high! Higher!",
                  "zh": "荡高高！再高！"
                },
                {
                  "en": "Push me, please!",
                  "zh": "推推我！"
                },
                {
                  "en": "Your turn now!",
                  "zh": "轮到你了！"
                },
                {
                  "en": "Again, again!",
                  "zh": "再来，再来！"
                }
              ],
              "A1": [
                {
                  "en": "Do you want to play on the swing or the slide first?",
                  "zh": "你想先玩秋千还是滑梯？"
                },
                {
                  "en": "Be careful on the slide! Wait for your turn.",
                  "zh": "滑滑梯小心点！等轮到你。"
                },
                {
                  "en": "Hold on tight to the swing! I'll push you gently.",
                  "zh": "抓紧秋千！我轻轻推你。"
                },
                {
                  "en": "Look how high you're swinging! You're like a bird!",
                  "zh": "看你荡得多高！像小鸟一样！"
                },
                {
                  "en": "Let's go on the seesaw together. Up and down!",
                  "zh": "我们一起玩跷跷板，上上下下！"
                }
              ],
              "A2": [
                {
                  "en": "I used to push you on the swings when you were a baby. Now you can swing by yourself!",
                  "zh": "你小时候我推你荡秋千，现在你能自己荡了！"
                },
                {
                  "en": "Let's time how long you can keep swinging without me pushing.",
                  "zh": "我们计时看看你不用我推能荡多久。"
                },
                {
                  "en": "The playground is a great place to practice balance and coordination.",
                  "zh": "游乐场是练习平衡和协调的好地方。"
                }
              ],
              "B1": [
                {
                  "en": "It's amazing how playground equipment that seemed so big when you were little now looks so small.",
                  "zh": "真神奇，小时候看着那么大的游乐设施现在看着好小。"
                }
              ]
            }
          },
          "sandpit": {
            "name": "沙坑玩沙",
            "keywords": [
              "沙坑",
              "沙子",
              "玩沙",
              "铲子"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's play in the sand!",
                  "zh": "我们玩沙子吧！"
                },
                {
                  "en": "Dig, dig, dig!",
                  "zh": "挖挖挖！"
                },
                {
                  "en": "Make a sandcastle!",
                  "zh": "堆个沙堡！"
                },
                {
                  "en": "Don't throw sand.",
                  "zh": "别扔沙子。"
                }
              ],
              "A1": [
                {
                  "en": "Let's build a big sandcastle together. You dig and I'll shape it.",
                  "zh": "我们一起堆个大沙堡，你挖我来塑形。"
                },
                {
                  "en": "Can you fill the bucket with sand? Now turn it over — ta-da!",
                  "zh": "能把桶装满沙子吗？现在翻过来——哒哒！"
                },
                {
                  "en": "Let's make a moat around our castle and fill it with water.",
                  "zh": "我们给城堡挖条护城河，灌上水。"
                }
              ],
              "A2": [
                {
                  "en": "Playing with sand is a wonderful sensory experience. It's so calming!",
                  "zh": "玩沙子是很好的感官体验，让人平静！"
                },
                {
                  "en": "Remember to shake the sand off your hands and feet before we leave.",
                  "zh": "走之前记得把手脚上的沙子抖干净。"
                }
              ],
              "B1": [
                {
                  "en": "There's something timeless about building sandcastles — every generation of children has done it.",
                  "zh": "堆沙堡有种永恒的魔力——每一代孩子都做过。"
                }
              ]
            }
          },
          "kite_bubbles": {
            "name": "放风筝/吹泡泡",
            "keywords": [
              "放风筝",
              "吹泡泡",
              "风筝",
              "泡泡"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Fly the kite! Up, up, up!",
                  "zh": "放风筝！飞高高！"
                },
                {
                  "en": "Look, it's flying so high!",
                  "zh": "看，飞得好高啊！"
                },
                {
                  "en": "Pop the bubbles!",
                  "zh": "戳泡泡！"
                },
                {
                  "en": "Look, it's flying!",
                  "zh": "看，飞起来了！"
                }
              ],
              "A1": [
                {
                  "en": "Let's try flying the kite — the wind is perfect today!",
                  "zh": "我们来放风筝吧——今天风刚刚好！"
                },
                {
                  "en": "Run with the kite and let the wind carry it up!",
                  "zh": "拿着风筝跑，让风把它吹上去！"
                },
                {
                  "en": "Blow gently to make big bubbles. Wow, look at that one!",
                  "zh": "轻轻吹出大泡泡。哇，看那个！"
                },
                {
                  "en": "Can you count how many bubbles you can pop?",
                  "zh": "你能数出戳破了多少个泡泡吗？"
                }
              ],
              "A2": [
                {
                  "en": "Flying a kite teaches patience — sometimes you need to wait for the right gust of wind.",
                  "zh": "放风筝教人耐心——有时候要等对的那阵风。"
                },
                {
                  "en": "Let's make our own bubble solution at home next time — it's easy and fun!",
                  "zh": "下次我们在家自己做泡泡水——又简单又好玩！"
                }
              ],
              "B1": [
                {
                  "en": "There's something magical about watching a kite dance in the sky — it never gets old.",
                  "zh": "看风筝在天空跳舞有种魔力——永远不会腻。"
                }
              ]
            }
          },
          "picnic": {
            "name": "野餐",
            "keywords": [
              "野餐",
              "草坪",
              "草地",
              "户外吃"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's have a picnic!",
                  "zh": "我们野餐吧！"
                },
                {
                  "en": "Sit on the blanket.",
                  "zh": "坐在垫子上。"
                },
                {
                  "en": "Yummy sandwiches!",
                  "zh": "三明治真好吃！"
                }
              ],
              "A1": [
                {
                  "en": "Let's spread out the picnic blanket and enjoy our food outside.",
                  "zh": "我们把野餐垫铺开，在外面享受食物。"
                },
                {
                  "en": "I packed some sandwiches, fruit, and juice for our picnic.",
                  "zh": "我准备了���明治、水果和果汁来野餐。"
                },
                {
                  "en": "Everything tastes better when you eat it outdoors, doesn't it?",
                  "zh": "在外面吃什么都更好吃，对吧？"
                }
              ],
              "A2": [
                {
                  "en": "Let's find a nice spot under a tree for our picnic — shade makes it more comfortable.",
                  "zh": "我们在树下找个好位置野餐——有阴凉更舒服。"
                },
                {
                  "en": "After we eat, let's lie on the blanket and look at the clouds. What shapes do you see?",
                  "zh": "吃完后我们躺在垫子上看云，你看到什么形状？"
                }
              ],
              "B1": [
                {
                  "en": "A simple picnic can create some of the most cherished family memories.",
                  "zh": "一次简单的野餐能创造最珍贵的家庭回忆。"
                }
              ]
            }
          },
          "running": {
            "name": "跑步/追逐",
            "keywords": [
              "跑步",
              "追",
              "跑",
              "快",
              "慢",
              "停",
              "比赛"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Run, run, run!",
                  "zh": "跑跑跑！"
                },
                {
                  "en": "Catch me!",
                  "zh": "来追我！"
                },
                {
                  "en": "You're fast!",
                  "zh": "你好快！"
                },
                {
                  "en": "Ready, set, go!",
                  "zh": "预备，跑！"
                }
              ],
              "A1": [
                {
                  "en": "Let's race to that tree and back — ready, set, go!",
                  "zh": "我们跑到那棵树再回来——预备，跑！"
                },
                {
                  "en": "Running in the fresh air is so good for your body and your mood.",
                  "zh": "在新鲜空气中跑步对身体和心情都很好。"
                },
                {
                  "en": "Try to run with your arms pumping — it helps you go faster.",
                  "zh": "试试摆臂跑——能帮你跑得更快。"
                }
              ],
              "A2": [
                {
                  "en": "Running is one of the simplest and most effective forms of exercise there is.",
                  "zh": "跑步是最简单也最有效的运动方式之一。"
                },
                {
                  "en": "The feeling of the wind in your face when you run is one of life's simple joys.",
                  "zh": "跑步时风吹在脸上的感觉是生活中简单的快乐之一。"
                },
                {
                  "en": "Setting a running goal — even just one more lap — teaches you about pushing your limits.",
                  "zh": "设定跑步目标——哪怕只是多跑一圈——教会你挑战自己的极限。"
                }
              ],
              "B1": [
                {
                  "en": "Running teaches you that progress comes from consistency, not just talent.",
                  "zh": "跑步教会你进步来自坚持，不只是天赋。"
                },
                {
                  "en": "The mental toughness you build through physical challenges transfers to every area of life.",
                  "zh": "通过身体挑战培养的心理韧性会迁移到生活的每个领域。"
                },
                {
                  "en": "Sometimes the hardest part of a run is the first step — after that, momentum carries you.",
                  "zh": "跑步最难的部分有时是第一步——之后动力会推动你。"
                }
              ]
            }
          }
        }
      },
      "ball_games": {
        "name": "球类运动",
        "keywords": [
          "球",
          "足球",
          "篮球",
          "羽毛球",
          "乒乓球",
          "传球",
          "运动",
          "比赛"
        ],
        "sub_scenes": {
          "football": {
            "name": "踢足球",
            "keywords": [
              "足球",
              "踢球",
              "射门"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's play soccer!",
                  "zh": "我们踢足球吧！"
                },
                {
                  "en": "Kick the ball! Goal!",
                  "zh": "踢球！进球啦！"
                },
                {
                  "en": "Run after the ball!",
                  "zh": "追着球跑！"
                },
                {
                  "en": "Pass to me!",
                  "zh": "传给我！"
                },
                {
                  "en": "Good kick!",
                  "zh": "踢得好！"
                }
              ],
              "A1": [
                {
                  "en": "Let's practice kicking the ball. Aim for that tree!",
                  "zh": "我们练习踢球吧，瞄准那棵树！"
                },
                {
                  "en": "Dribble the ball — keep it close to your feet.",
                  "zh": "带球——把球控在脚边。"
                },
                {
                  "en": "Great goal! You're getting really good at this!",
                  "zh": "好球！你越来越厉害了！"
                },
                {
                  "en": "Let's play one-on-one. Try to get the ball past me!",
                  "zh": "我们一对一吧，试试把球带过我！"
                },
                {
                  "en": "Remember to use the inside of your foot to pass — not your toe.",
                  "zh": "记得用脚内侧传球——不是脚尖。"
                }
              ],
              "A2": [
                {
                  "en": "Let's practice some drills — dribbling, passing, and shooting.",
                  "zh": "我们练一些基本功——带球、传球、射门。"
                },
                {
                  "en": "Soccer is all about teamwork. No one player can win the game alone.",
                  "zh": "足球靠的是团队合作，没有人能一个人赢得比赛。"
                },
                {
                  "en": "I've noticed your ball control has improved a lot. All that practice is paying off!",
                  "zh": "我发现你控球进步了好多，练习果然有回报！"
                }
              ],
              "B1": [
                {
                  "en": "Sports teach you how to win gracefully and lose with dignity — both are important life skills.",
                  "zh": "运动教你优雅地赢和有尊严地输——两者都是重要的生活技能。"
                },
                {
                  "en": "The discipline of regular practice is what separates good players from great ones.",
                  "zh": "定期练习的纪律性是区分好球员和伟大球员的关键。"
                }
              ]
            }
          },
          "basketball": {
            "name": "打篮球",
            "keywords": [
              "篮球",
              "投篮",
              "运球",
              "篮板"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's play basketball!",
                  "zh": "我们打篮球吧！"
                },
                {
                  "en": "Throw the ball! Shoot!",
                  "zh": "投球！投篮！"
                },
                {
                  "en": "Bounce, bounce, bounce!",
                  "zh": "拍拍拍！"
                },
                {
                  "en": "You made it! Great shot!",
                  "zh": "投进了！好球！"
                }
              ],
              "A1": [
                {
                  "en": "Let's practice dribbling. Try to bounce the ball without looking at it.",
                  "zh": "我们练习运球吧，试试不看球拍。"
                },
                {
                  "en": "Aim for the hoop! Bend your knees and follow through.",
                  "zh": "瞄准篮筐！弯膝盖，手腕跟着送出去。"
                },
                {
                  "en": "Nice shot! You're getting closer every time.",
                  "zh": "好球！每次都更接近了。"
                },
                {
                  "en": "Let's see how many baskets you can make in a row.",
                  "zh": "我们看看你能连续投进几个。"
                }
              ],
              "A2": [
                {
                  "en": "Basketball is great for building height and coordination. You're growing so fast!",
                  "zh": "篮球对长高和协调性很好，你长得太快了！"
                },
                {
                  "en": "Let's work on your layup technique — it's a fundamental basketball move.",
                  "zh": "我们练练上篮动作——这是篮球的基本功。"
                }
              ],
              "B1": [
                {
                  "en": "Consistent practice beats natural talent every time. Keep showing up.",
                  "zh": "持续练习永远胜过天赋，坚持下去。"
                }
              ]
            }
          },
          "badminton": {
            "name": "打羽毛球",
            "keywords": [
              "羽毛球",
              "拍子",
              "扣杀"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's play badminton!",
                  "zh": "我们打羽毛球吧！"
                },
                {
                  "en": "Hit the birdie!",
                  "zh": "打羽毛球！"
                },
                {
                  "en": "Up in the air! Whoosh!",
                  "zh": "飞到空中！咻！"
                }
              ],
              "A1": [
                {
                  "en": "Hold the racket like this and try to hit the shuttlecock.",
                  "zh": "这样握拍子，试着打羽毛球。"
                },
                {
                  "en": "Keep your eye on the birdie — don't take your eyes off it!",
                  "zh": "眼睛盯住球——别移开视线！"
                },
                {
                  "en": "Nice serve! Let's see how many times we can hit it back and forth.",
                  "zh": "好发球！看看我们能来回打多少次。"
                }
              ],
              "A2": [
                {
                  "en": "Badminton is a great family sport — everyone can play regardless of age.",
                  "zh": "羽毛球是很棒的家庭运动——不管年龄多大都能玩。"
                },
                {
                  "en": "Try to aim for the open spaces on the court. It's about strategy, not just power.",
                  "zh": "试着瞄准场上的空位，这靠策略不靠蛮力。"
                }
              ],
              "B1": [
                {
                  "en": "The speed and reflexes required in badminton make it one of the fastest racket sports in the world.",
                  "zh": "羽毛球要求的速度和反应力，使其成为世界上最快的拍类运动之一。"
                }
              ]
            }
          },
          "pingpong": {
            "name": "打乒乓球",
            "keywords": [
              "乒乓球",
              "球拍",
              "台",
              "打",
              "接",
              "发",
              "旋转"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Hit the ball!",
                  "zh": "打球！"
                },
                {
                  "en": "Back and forth!",
                  "zh": "来回打！"
                },
                {
                  "en": "Nice shot!",
                  "zh": "好球！"
                },
                {
                  "en": "My serve!",
                  "zh": "我发球！"
                }
              ],
              "A1": [
                {
                  "en": "Let's play ping pong — keep your eye on the ball at all times.",
                  "zh": "我们打乒乓球——眼睛一直盯着球。"
                },
                {
                  "en": "The key to ping pong is control, not power. Gentle touches work best.",
                  "zh": "乒乓球的关键是控制，不是力量。轻触效果最好。"
                },
                {
                  "en": "Table tennis is a great way to improve your hand-eye coordination.",
                  "zh": "乒乓球是提高手眼协调的好方法。"
                }
              ],
              "A2": [
                {
                  "en": "Ping pong teaches you about spin, angles, and strategy — it's like chess at high speed.",
                  "zh": "乒乓球教会你旋转、角度和策略——像高速版的国际象棋。"
                },
                {
                  "en": "The reflexes you develop playing ping pong will help you in many other sports.",
                  "zh": "打乒乓球培养的反应能力会在许多其他运动中帮到你。"
                },
                {
                  "en": "A good rally in ping pong is like a conversation — each shot responds to the last.",
                  "zh": "乒乓球中的好回合就像对话——每一拍都在回应上一拍。"
                }
              ],
              "B1": [
                {
                  "en": "Table tennis is one of the few sports where mental agility matters as much as physical skill.",
                  "zh": "乒乓球是少数心理敏捷和身体技能同等重要的运动之一。"
                },
                {
                  "en": "The focus required for ping pong is a form of meditation in motion.",
                  "zh": "乒乓球需要的专注力是一种动态冥想。"
                },
                {
                  "en": "Mastering spin in table tennis teaches you that small adjustments can create big changes.",
                  "zh": "掌握乒乓球旋转教会你，微小的调整能创造巨大的变化。"
                }
              ]
            }
          },
          "catch_throw": {
            "name": "抛接球/传球",
            "keywords": [
              "传球",
              "接球",
              "抛",
              "接住",
              "扔",
              "投"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Catch!",
                  "zh": "接住！"
                },
                {
                  "en": "Throw it here!",
                  "zh": "扔过来！"
                },
                {
                  "en": "Nice catch!",
                  "zh": "接得好！"
                },
                {
                  "en": "Higher!",
                  "zh": "高一点！"
                }
              ],
              "A1": [
                {
                  "en": "Let's practice throwing and catching — hold your hands ready like a basket.",
                  "zh": "我们练习抛接球——手像篮子一样准备好。"
                },
                {
                  "en": "Watch the ball all the way into your hands — don't look away.",
                  "zh": "看着球一直到手里——不要移开视线。"
                },
                {
                  "en": "Good throw! You're getting more accurate every time.",
                  "zh": "扔得好！你每次都在变得更准。"
                }
              ],
              "A2": [
                {
                  "en": "Playing catch seems simple, but it builds teamwork, coordination, and trust.",
                  "zh": "抛接球看起来简单，但能培养团队合作、协调和信任。"
                },
                {
                  "en": "The rhythm of throwing and catching is almost like a dance between two people.",
                  "zh": "抛接的节奏几乎像是两人之间的舞蹈。"
                },
                {
                  "en": "You're developing spatial awareness — knowing where things are in relation to you.",
                  "zh": "你在培养空间意识——知道东西相对于你的位置。"
                }
              ],
              "B1": [
                {
                  "en": "The simple act of playing catch contains lessons about trust, timing, and mutual respect.",
                  "zh": "简单的抛接球包含着关于信任、时机和相互尊重的课程。"
                },
                {
                  "en": "Sports like catch teach you that success often depends on making your partner look good.",
                  "zh": "抛接球这样的运动教你，成功往往取决于让你的搭档表现出色。"
                },
                {
                  "en": "The coordination you develop now will make learning any new sport much easier.",
                  "zh": "你现在培养的协调能力会让你学任何新运动都容易得多。"
                }
              ]
            }
          }
        }
      },
      "wheels": {
        "name": "骑行滑行",
        "keywords": [
          "骑车",
          "滑板",
          "轮滑",
          "平衡车",
          "三轮车",
          "滑草",
          "滑行",
          "户外运动"
        ],
        "sub_scenes": {
          "bike": {
            "name": "骑自行车",
            "keywords": [
              "自行车",
              "骑车",
              "单车",
              "骑行"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's ride the bike!",
                  "zh": "我们骑车吧！"
                },
                {
                  "en": "Pedal, pedal, pedal!",
                  "zh": "踩踩踩！"
                },
                {
                  "en": "Don't forget your helmet!",
                  "zh": "别忘了头盔！"
                },
                {
                  "en": "You're riding! Great job!",
                  "zh": "你骑起来了！太棒了！"
                }
              ],
              "A1": [
                {
                  "en": "Let's go for a bike ride around the neighborhood.",
                  "zh": "我们骑自行车在小区里转转。"
                },
                {
                  "en": "Remember to wear your helmet every time you ride.",
                  "zh": "每次骑车都要记得戴头盔。"
                },
                {
                  "en": "Keep pedaling! You're doing great — look how far you've gone!",
                  "zh": "继续踩！做得太好了——看��骑了多远！"
                },
                {
                  "en": "Stay on the right side of the path and watch out for people walking.",
                  "zh": "靠右边骑，注意行人。"
                }
              ],
              "A2": [
                {
                  "en": "You've gotten so confident on your bike! Want to try a longer route today?",
                  "zh": "你骑车越来越自信了！今天想试试更长的路线吗？"
                },
                {
                  "en": "Learning to ride a bike is a skill you'll have for the rest of your life.",
                  "zh": "学会骑自行车是你一辈子都会的技能。"
                }
              ],
              "B1": [
                {
                  "en": "Riding a bike isn't just fun — it's great exercise and an eco-friendly way to get around.",
                  "zh": "骑自行车不仅好玩——还是很好的运动和环保出行方式。"
                }
              ]
            }
          },
          "scooter": {
            "name": "滑板车/轮滑",
            "keywords": [
              "滑板车",
              "轮滑",
              "溜冰",
              "滑板"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Push with your foot! Go go go!",
                  "zh": "用脚蹬！冲冲冲！"
                },
                {
                  "en": "Slow down! Be careful!",
                  "zh": "慢点！小心！"
                },
                {
                  "en": "Wear your knee pads.",
                  "zh": "戴上护膝。"
                }
              ],
              "A1": [
                {
                  "en": "One foot on the scooter, the other foot pushes. Just like that!",
                  "zh": "一只脚在滑板车上，另一只蹬地。就这样！"
                },
                {
                  "en": "Try to balance on one foot while you glide.",
                  "zh": "滑行的时候试试单脚保持平衡。"
                },
                {
                  "en": "Always wear your helmet and knee pads for safety.",
                  "zh": "安全起见，永远戴好头盔和护膝。"
                }
              ],
              "A2": [
                {
                  "en": "Your balance has improved so much! You can glide for a really long time now.",
                  "zh": "你平衡力进步好大！现在能滑行很长一段了。"
                }
              ],
              "B1": [
                {
                  "en": "Mastering balance sports when you're young builds coordination that lasts a lifetime.",
                  "zh": "小时候掌握平衡类运动，能建立终身的协调能力。"
                }
              ]
            }
          },
          "balance_bike": {
            "name": "平衡车",
            "keywords": [
              "平衡车",
              "站",
              "滑",
              "推",
              "稳",
              "平衡"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Push with your feet!",
                  "zh": "用脚推！"
                },
                {
                  "en": "Glide, glide!",
                  "zh": "滑呀滑！"
                },
                {
                  "en": "Keep balance!",
                  "zh": "保持平衡！"
                },
                {
                  "en": "Wheeee!",
                  "zh": "呜——！"
                }
              ],
              "A1": [
                {
                  "en": "The balance bike teaches you how to stay steady — it's the first step to riding a real bike.",
                  "zh": "平衡车教你保持稳定——这是骑真正自行车的第一步。"
                },
                {
                  "en": "Use your feet to push off, then lift them up and glide as long as you can.",
                  "zh": "用脚蹬地出发，然后抬起脚尽量滑行。"
                },
                {
                  "en": "Look ahead, not down at your feet — that helps you balance better.",
                  "zh": "看前方，不要看脚下——这样更容易保持平衡。"
                }
              ],
              "A2": [
                {
                  "en": "Learning to balance on two wheels is a milestone that builds confidence in so many ways.",
                  "zh": "学会两轮平衡是一个里程碑，能在很多方面建立自信。"
                },
                {
                  "en": "Every time you glide a little further, you're training your body's sense of balance.",
                  "zh": "每次滑得更远一点，你都在训练身体的平衡感。"
                },
                {
                  "en": "The balance bike is teaching you the most important cycling skill before you even need pedals.",
                  "zh": "平衡车在你需要脚踏之前就教会你最重要的骑行技能。"
                }
              ],
              "B1": [
                {
                  "en": "Balance is not just a physical skill — it's a metaphor for life: stay centered, keep moving forward.",
                  "zh": "平衡不只是身体技能——也是人生的隐喻：保持中心，继续向前。"
                },
                {
                  "en": "The confidence you gain from mastering the balance bike will carry over to every new challenge.",
                  "zh": "从掌握平衡车中获得的信心会延续到每一个新挑战。"
                },
                {
                  "en": "There's something profound about learning to balance — it's the foundation of all movement.",
                  "zh": "学会平衡有种深刻的含义——它是所有运动的基础。"
                }
              ]
            }
          },
          "tricycle": {
            "name": "三轮车",
            "keywords": [
              "三轮车",
              "踩",
              "骑",
              "转弯",
              "慢",
              "小车"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Pedal, pedal!",
                  "zh": "踩踩踩！"
                },
                {
                  "en": "Turn the wheel!",
                  "zh": "转方向盘！"
                },
                {
                  "en": "Pedal gently!",
                  "zh": "轻轻踩！",
                  "keywords": [
                    "踩",
                    "轻轻"
                  ]
                },
                {
                  "en": "Beep beep!",
                  "zh": "滴滴！"
                }
              ],
              "A1": [
                {
                  "en": "Pedal with both feet evenly — it makes the tricycle go straighter.",
                  "zh": "两只脚均匀踩——三轮车会走得更直。"
                },
                {
                  "en": "When you want to turn, slow down first, then turn the handlebars gently.",
                  "zh": "想转弯时先减速，然后轻轻转车把。"
                },
                {
                  "en": "You're pedaling so well now — soon you'll be ready for a bigger bike!",
                  "zh": "你现在踩得真好——很快就能骑大自行车了！"
                }
              ],
              "A2": [
                {
                  "en": "Riding a tricycle teaches you about steering, pedaling, and navigating around obstacles.",
                  "zh": "骑三轮车教会你转向、踩踏和绕开障碍物。"
                },
                {
                  "en": "The independence of riding your own vehicle is a taste of freedom you'll always remember.",
                  "zh": "骑自己的车的独立感是一种你永远会记得的自由滋味。"
                },
                {
                  "en": "Every time you ride, your leg muscles get stronger and your coordination improves.",
                  "zh": "每次骑车你的腿部肌肉都变得更强，协调性也在提高。"
                }
              ],
              "B1": [
                {
                  "en": "The tricycle is often a child's first taste of independent mobility — a milestone worth celebrating.",
                  "zh": "三轮车往往是孩子第一次体验独立移动——值得庆祝的里程碑。"
                },
                {
                  "en": "Learning to navigate your own vehicle teaches spatial awareness and responsibility.",
                  "zh": "学会操控自己的车辆培养空间意识和责任感。"
                },
                {
                  "en": "The joy of self-powered movement is something that stays with you long after you outgrow the tricycle.",
                  "zh": "自力移动的快乐在你不骑三轮车之后很久仍然伴随你。"
                }
              ]
            }
          },
          "grass_slide": {
            "name": "滑草/滑沙",
            "keywords": [
              "滑草",
              "滑沙",
              "坡",
              "滑下去",
              "刺激",
              "快"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Slide down!",
                  "zh": "滑下去！"
                },
                {
                  "en": "So fast!",
                  "zh": "好快！"
                },
                {
                  "en": "Let's go one more time!",
                  "zh": "再来一次！"
                },
                {
                  "en": "Hold on tight!",
                  "zh": "抓紧！"
                }
              ],
              "A1": [
                {
                  "en": "Let's try the grass slide — sit on the mat and hold the handles tight.",
                  "zh": "我们试试滑草——坐在垫子上抓紧扶手。"
                },
                {
                  "en": "It's a bit scary the first time, but once you try it, you'll want to go again!",
                  "zh": "第一次有点害怕，但试过之后你就想再来了！"
                },
                {
                  "en": "The wind in your hair as you slide down is the best feeling, isn't it?",
                  "zh": "滑下去时风吹过头发的感��最棒了，对吧？"
                }
              ],
              "A2": [
                {
                  "en": "Grass sliding is all about letting go and trusting the ride — it's thrilling and safe.",
                  "zh": "滑草就是放手信任滑行——刺激又安全。"
                },
                {
                  "en": "The climb back up is part of the fun — it makes the next slide even more rewarding.",
                  "zh": "爬回去也是乐趣的一部分——让下一次滑行更有成就感。"
                },
                {
                  "en": "Outdoor adventures like this create the best memories of childhood.",
                  "zh": "像这样的户外冒险创造了最好的童年回忆。"
                }
              ],
              "B1": [
                {
                  "en": "The willingness to try slightly scary things in a safe environment builds genuine courage.",
                  "zh": "在安全环境中愿意尝试稍微可怕的事情，能培养真正的勇气。"
                },
                {
                  "en": "Adventure sports teach you to manage fear — acknowledge it, then do it anyway.",
                  "zh": "冒险运动教你管理恐惧——承认它，然后还是去做。"
                },
                {
                  "en": "The thrill of sliding down a hill is a pure, simple joy that reminds us what it means to be alive.",
                  "zh": "滑下山坡的刺激是一种纯粹简单的快乐，提醒我们活着的意义。"
                }
              ]
            }
          }
        }
      },
      "water_play": {
        "name": "游泳戏水",
        "keywords": [
          "游泳",
          "海边",
          "水枪",
          "水上乐园",
          "钓鱼",
          "戏水",
          "玩水"
        ],
        "sub_scenes": {
          "swimming": {
            "name": "游泳",
            "keywords": [
              "游泳",
              "泳池",
              "游泳池",
              "泳装"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's go swimming!",
                  "zh": "我们去游泳吧！"
                },
                {
                  "en": "Splash, splash!",
                  "zh": "哗啦哗啦！"
                },
                {
                  "en": "Kick your legs!",
                  "zh": "踢腿！"
                },
                {
                  "en": "Hold your breath. One, two, three!",
                  "zh": "憋气，一、二、三！"
                }
              ],
              "A1": [
                {
                  "en": "Put on your swimsuit and let's head to the pool!",
                  "zh": "穿上泳衣，我们去游泳池！"
                },
                {
                  "en": "Kick your legs and move your arms — you're swimming!",
                  "zh": "踢腿划手——你在游泳了！"
                },
                {
                  "en": "Don't be afraid of the water. I'm right here with you.",
                  "zh": "别怕水，我就在你身边。"
                },
                {
                  "en": "Float on your back like a starfish. Relax and look at the sky!",
                  "zh": "仰面漂着像海星一样，放松看天空！"
                }
              ],
              "A2": [
                {
                  "en": "You've made so much progress in swimming! Can you swim across the pool now?",
                  "zh": "你游泳进步太大了！现在能游过整个泳池了吗？"
                },
                {
                  "en": "Swimming is one of the best full-body exercises you can do.",
                  "zh": "游泳是最好的全身运动之一。"
                }
              ],
              "B1": [
                {
                  "en": "Knowing how to swim isn't just fun — it's an essential safety skill everyone should have.",
                  "zh": "会游泳不仅好玩——更是每个人都应该有的基本安全技能。"
                }
              ]
            }
          },
          "beach": {
            "name": "海边玩沙/踏浪",
            "keywords": [
              "海边",
              "沙滩",
              "踏��",
              "海浪",
              "捡贝壳"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look at the ocean!",
                  "zh": "看大海！"
                },
                {
                  "en": "The waves are coming! Run!",
                  "zh": "浪来了！快跑！"
                },
                {
                  "en": "Find a seashell!",
                  "zh": "找个贝壳！"
                },
                {
                  "en": "Build a sandcastle!",
                  "zh": "堆沙堡！"
                }
              ],
              "A1": [
                {
                  "en": "Let's dip our toes in the water. It's so cool and refreshing!",
                  "zh": "我们把脚趾伸进水里，好凉爽！"
                },
                {
                  "en": "Can you hear the sound of the waves? It's so relaxing.",
                  "zh": "你听到海浪声了吗？好放松。"
                },
                {
                  "en": "Let's collect some pretty shells and rocks to take home.",
                  "zh": "我们捡一些漂亮的贝壳和石头带回家。"
                },
                {
                  "en": "Don't go too deep into the water. Stay where I can see you.",
                  "zh": "别往水深的地方去，待在我能看到你的地方。"
                }
              ],
              "A2": [
                {
                  "en": "The ocean is so vast and powerful. It reminds us how small we are.",
                  "zh": "大海如此广阔有力，提醒我们有多渺小。"
                },
                {
                  "en": "Let's write our names in the sand before the waves wash them away.",
                  "zh": "我们在沙滩上写名字吧，趁浪还没冲掉。"
                }
              ],
              "B1": [
                {
                  "en": "A day at the beach is one of life's simplest but greatest pleasures.",
                  "zh": "在海边待一天是生活中最简单也最美好的乐趣之一。"
                }
              ]
            }
          },
          "water_fight": {
            "name": "打水仗/玩水枪",
            "keywords": [
              "水枪",
              "打水仗",
              "喷水",
              "泼水",
              "湿",
              "水战"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Splash!",
                  "zh": "泼水！"
                },
                {
                  "en": "Got you!",
                  "zh": "喷到你了！"
                },
                {
                  "en": "I'm all wet!",
                  "zh": "我全湿了！"
                },
                {
                  "en": "I'll get you!",
                  "zh": "我要喷到你啦！"
                }
              ],
              "A1": [
                {
                  "en": "Let's have a water fight — but remember, no spraying in the face!",
                  "zh": "我们打水仗——但记住不要喷脸！"
                },
                {
                  "en": "Fill up your water gun at the tap and get ready for battle!",
                  "zh": "在水龙头装满水枪准备战斗！"
                },
                {
                  "en": "Running through the sprinkler on a hot day is the best feeling ever.",
                  "zh": "热天跑过洒水器的感觉是最棒的。"
                }
              ],
              "A2": [
                {
                  "en": "Water fights are a summer tradition — they're about fun, laughter, and cooling off.",
                  "zh": "打水仗是夏天传统——关于快乐、笑声和降温。"
                },
                {
                  "en": "There's something liberating about getting completely soaked on a hot day.",
                  "zh": "热天彻底湿透有种解放的感觉。"
                },
                {
                  "en": "Even in play, we learn about fairness — everyone should have a water gun to make it fun.",
                  "zh": "即使在玩耍中我们也学公平——每人都该有水枪才好玩。"
                }
              ],
              "B1": [
                {
                  "en": "The uninhibited joy of a water fight reminds us that play is essential at every age.",
                  "zh": "打水仗的无拘无束提醒我们，玩耍在每个年龄都必不可少。"
                },
                {
                  "en": "Some of the best childhood memories are made on hot summer days with water and laughter.",
                  "zh": "最好的童年回忆有些是在炎炎夏日伴着水和笑声创造的。"
                },
                {
                  "en": "Learning to balance competition with fun — that's the real art of any game.",
                  "zh": "学会在竞争和乐趣之间平衡——这是任何游戏的真正艺术。"
                }
              ]
            }
          },
          "water_park": {
            "name": "水上乐园",
            "keywords": [
              "水上乐园",
              "滑水道",
              "漂流",
              "游泳圈",
              "造浪池"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Water slide!",
                  "zh": "滑水道！"
                },
                {
                  "en": "Big splash!",
                  "zh": "大浪花！"
                },
                {
                  "en": "Float with me!",
                  "zh": "跟我漂流！"
                },
                {
                  "en": "Wave pool!",
                  "zh": "造浪池！"
                }
              ],
              "A1": [
                {
                  "en": "Which slide should we try first — the twisty one or the straight fast one?",
                  "zh": "我们先试哪个滑道——弯曲的还是直的快的？"
                },
                {
                  "en": "Hold onto your tube tight when we go down the rapids!",
                  "zh": "冲下激流时要抓紧游泳圈！"
                },
                {
                  "en": "The wave pool is my favorite — it feels just like being at the ocean.",
                  "zh": "造浪池是我的最爱——感觉就像在海里一样。"
                }
              ],
              "A2": [
                {
                  "en": "Water parks combine the thrill of rides with the joy of swimming — the best of both worlds.",
                  "zh": "水上乐园结合了游乐设施的刺激和游泳的乐趣——两全其美。"
                },
                {
                  "en": "Waiting in line for the big slide teaches patience, but the ride makes it all worthwhile.",
                  "zh": "排队等大滑道教你耐心，但滑下来让一切都值得。"
                },
                {
                  "en": "Notice how different slides use different physics — some are fast, some are twisty.",
                  "zh": "注意不同滑道用不同的物理原理——有些快，有些弯曲。"
                }
              ],
              "B1": [
                {
                  "en": "The engineering behind water parks is fascinating — every slide is designed with physics and safety in mind.",
                  "zh": "水上乐园背后的工程令人着迷——每条滑道都考虑到物理和安全。"
                },
                {
                  "en": "Shared adventures like water parks create family bonds that last a lifetime.",
                  "zh": "水上乐园这样的共同冒险创造持续一生的家庭纽带。"
                },
                {
                  "en": "The courage to try a big water slide is the same courage you'll need for life's bigger challenges.",
                  "zh": "尝试大水滑道的勇气和你面对人生更大挑战需要的勇气是一样的。"
                }
              ]
            }
          },
          "fishing": {
            "name": "钓鱼/捞鱼",
            "keywords": [
              "钓鱼",
              "捞鱼",
              "鱼竿",
              "网",
              "鱼",
              "等",
              "耐心"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Catch a fish!",
                  "zh": "钓条鱼！"
                },
                {
                  "en": "Wait patiently!",
                  "zh": "耐心等！"
                },
                {
                  "en": "I got one!",
                  "zh": "我钓到了！"
                },
                {
                  "en": "Throw it back!",
                  "zh": "放回去！"
                }
              ],
              "A1": [
                {
                  "en": "Fishing teaches us the most important lesson: patience. We wait quietly and watch.",
                  "zh": "钓鱼教我们最重要的一课：耐心。我们安静地等着观察。"
                },
                {
                  "en": "If we're quiet and still, the fish won't be scared away.",
                  "zh": "如果我们安静不动，鱼就不会被吓跑。"
                },
                {
                  "en": "Look at the bobber — when it goes under, that means a fish is biting!",
                  "zh": "看浮标——它沉下去就说明鱼在咬钩！"
                }
              ],
              "A2": [
                {
                  "en": "Fishing connects us to nature in a unique way — it's about being present in the moment.",
                  "zh": "钓鱼以独特的方式让我们与自然连接——在于活在当下。"
                },
                {
                  "en": "Whether we catch anything or not, the time spent together by the water is what matters.",
                  "zh": "不管钓没钓到，在水边一起度过的时光才是重要的。"
                },
                {
                  "en": "Catch and release teaches us respect for nature — we enjoy the experience without taking more than we need.",
                  "zh": "钓后放生教会我们尊重自然——享受体验但不索取超过所需。"
                }
              ],
              "B1": [
                {
                  "en": "Fishing is meditation for people who can't sit still — it gives you something to do while you think.",
                  "zh": "钓鱼是坐不住的人的冥想——让你在思考时有事情做。"
                },
                {
                  "en": "The patience cultivated through fishing is a skill that benefits every aspect of life.",
                  "zh": "钓鱼培养的耐心是一项让生活各方面受益的技能。"
                },
                {
                  "en": "Some of the best conversations happen while waiting for a fish to bite.",
                  "zh": "最好的对话有时发生在等鱼上钩的时候。"
                }
              ]
            }
          }
        }
      },
      "nature": {
        "name": "自然探索",
        "keywords": [
          "自然",
          "植物",
          "星星",
          "树叶",
          "石头",
          "鸟",
          "探索",
          "观察"
        ],
        "sub_scenes": {
          "explore": {
            "name": "观察自然",
            "keywords": [
              "昆虫",
              "树叶",
              "石头",
              "虫子",
              "蝴蝶",
              "蚂蚁",
              "花",
              "小鸟"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look! A butterfly!",
                  "zh": "看！蝴蝶！"
                },
                {
                  "en": "Pretty flower!",
                  "zh": "漂亮的花！"
                },
                {
                  "en": "What's that bug?",
                  "zh": "那是什么虫子？"
                },
                {
                  "en": "Pick up the leaf.",
                  "zh": "捡起树叶。"
                }
              ],
              "A1": [
                {
                  "en": "Look at this interesting leaf! What color is it?",
                  "zh": "看这片有趣的叶子！它是什么颜色的？"
                },
                {
                  "en": "Can you see the ant carrying food? It's so strong for its size!",
                  "zh": "你看到蚂蚁在搬食物吗？按体型来说它好强壮！"
                },
                {
                  "en": "Let's collect different kinds of leaves and compare them.",
                  "zh": "我们收集不同种类的叶子来比较一下。"
                },
                {
                  "en": "Listen! Can you hear the birds singing in the trees?",
                  "zh": "听！你能听到树上的小鸟在唱歌吗？"
                }
              ],
              "A2": [
                {
                  "en": "Let's start a nature journal — we can draw and write about what we discover.",
                  "zh": "我们开始写自然日记吧——画下和写下我们的发现。"
                },
                {
                  "en": "Nature is the best classroom. There's always something new to learn.",
                  "zh": "大自然是最好的课堂，总有新东西可以学。"
                },
                {
                  "en": "Look at the spider web with morning dew on it — it's like jewelry!",
                  "zh": "看那张沾满晨露的蜘蛛网——像珠宝一样！"
                }
              ],
              "B1": [
                {
                  "en": "Spending time in nature has been scientifically proven to reduce stress and improve mood.",
                  "zh": "科学研究证明，亲近自然能减压和改善心情。"
                },
                {
                  "en": "The more you observe nature, the more you realize how interconnected everything is.",
                  "zh": "你越观察自然，越会意识到万事万物是多么相互关联。"
                }
              ]
            }
          },
          "planting": {
            "name": "种植物",
            "keywords": [
              "种",
              "植物",
              "花",
              "浇水",
              "种子",
              "发芽"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's plant a seed!",
                  "zh": "我们种颗种子吧！"
                },
                {
                  "en": "Dig a little hole!",
                  "zh": "挖个小洞！",
                  "keywords": [
                    "挖",
                    "洞"
                  ]
                },
                {
                  "en": "It's growing! Look!",
                  "zh": "在长了！看！"
                }
              ],
              "A1": [
                {
                  "en": "Let's plant some seeds in this pot. First, make a little hole in the soil.",
                  "zh": "我们在盆里种些种子吧，先在土里挖个小洞。"
                },
                {
                  "en": "Cover the seed with soil and give it some water. Now we wait!",
                  "zh": "用土盖住种子，浇点水，现在等着吧！"
                },
                {
                  "en": "Plants need three things to grow: sunlight, water, and love.",
                  "zh": "植物生长需要三样东西：阳光、水和爱。"
                }
              ],
              "A2": [
                {
                  "en": "Let's check on our plant every day and record how much it grows.",
                  "zh": "我们每天看看植物，记录它长了多少。"
                },
                {
                  "en": "Growing your own food is so rewarding. Let's try planting some herbs!",
                  "zh": "自己种食物真有成就感，我们试试种些香草吧！"
                }
              ],
              "B1": [
                {
                  "en": "Gardening teaches patience and the understanding that good things take time.",
                  "zh": "园艺教人耐心，让人懂得好东西需要时间。"
                }
              ]
            }
          },
          "stargazing": {
            "name": "看星星",
            "keywords": [
              "星星",
              "星空",
              "月亮",
              "夜空"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look at the stars!",
                  "zh": "看星星！"
                },
                {
                  "en": "So many stars! Twinkle twinkle!",
                  "zh": "好多星星！一闪一闪！"
                },
                {
                  "en": "There's the moon!",
                  "zh": "月亮在那！"
                }
              ],
              "A1": [
                {
                  "en": "Let's lie down and look at the stars. How many can you count?",
                  "zh": "我们躺下看星星吧，你能数出多少颗？"
                },
                {
                  "en": "Look, that's the moon! Is it full tonight or just a crescent?",
                  "zh": "看，那是月亮！今晚是满月还是弯月？"
                },
                {
                  "en": "Some stars are so far away that their light takes years to reach us.",
                  "zh": "有些星星太远了，它们的光要好多年才能到我们这里。"
                }
              ],
              "A2": [
                {
                  "en": "Let's try to find the Big Dipper. See those seven bright stars shaped like a spoon?",
                  "zh": "我们找找北斗七星吧，看到那七颗像勺子形状的亮星了吗？"
                },
                {
                  "en": "Stargazing makes you realize how vast and amazing the universe is.",
                  "zh": "看星星让你意识到宇宙是多么广阔和神奇。"
                }
              ],
              "B1": [
                {
                  "en": "Looking at the night sky puts our everyday worries into perspective.",
                  "zh": "仰望夜空能让我们正确看待日常的烦恼。"
                }
              ]
            }
          },
          "collect_nature": {
            "name": "捡树叶/石头",
            "keywords": [
              "树叶",
              "石头",
              "捡",
              "收集",
              "漂亮",
              "形状",
              "颜色"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Pretty leaf!",
                  "zh": "漂亮叶子！"
                },
                {
                  "en": "Smooth stone!",
                  "zh": "光滑石头！"
                },
                {
                  "en": "Put it in the bag!",
                  "zh": "放袋子里！"
                },
                {
                  "en": "Look what I found!",
                  "zh": "看我找到了什么！"
                }
              ],
              "A1": [
                {
                  "en": "Let's go on a nature treasure hunt — find the most interesting leaf you can.",
                  "zh": "我们去大自然寻宝——找到你能找到的最有趣的叶子。"
                },
                {
                  "en": "Look at the veins on this leaf — they're like tiny roads carrying water to every part.",
                  "zh": "看这片叶子的脉络——像小公路把水送到每个部分。"
                },
                {
                  "en": "Each stone has a story — how do you think this one got so smooth?",
                  "zh": "每块石头都有故事——你觉得这块怎么变得这么光滑的？"
                }
              ],
              "A2": [
                {
                  "en": "Collecting natural objects teaches us to observe details that most people overlook.",
                  "zh": "收集自然物品教会我们观察大多数人忽略的细节。"
                },
                {
                  "en": "You're building a collection that's completely unique — no one else has exactly the same things.",
                  "zh": "你在建立一个完全独特的收藏——没有人和你有一模一样的东西。"
                },
                {
                  "en": "Nature is the greatest artist — just look at the colors and patterns on this leaf.",
                  "zh": "大自然是最大的艺术家——看看这片叶子上的颜色和图案。"
                }
              ],
              "B1": [
                {
                  "en": "The habit of noticing small details in nature cultivates a mindfulness that enriches everyday life.",
                  "zh": "注意自然细节的习惯培养了丰富日常生活的正念。"
                },
                {
                  "en": "Collecting is one of the oldest human impulses — it connects us to our ancestors who gathered and curated.",
                  "zh": "收藏是最古老的人类冲动之一——将我们与采集策展的祖先相连。"
                },
                {
                  "en": "A stone that catches your eye today might sit on your desk for years, a quiet reminder of a perfect afternoon.",
                  "zh": "今天吸引你目光的石头可能会在你桌上放很多年，安静地提醒一个完美的下午。"
                }
              ]
            }
          },
          "bird_watch": {
            "name": "喂鸟/观察鸟类",
            "keywords": [
              "鸟",
              "喂鸟",
              "鸽子",
              "飞",
              "面包屑",
              "观察"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look, a bird!",
                  "zh": "看，一只鸟！"
                },
                {
                  "en": "Fly away!",
                  "zh": "飞走了！"
                },
                {
                  "en": "Tweet tweet!",
                  "zh": "啾啾！"
                },
                {
                  "en": "More bread?",
                  "zh": "再来点面包？"
                }
              ],
              "A1": [
                {
                  "en": "Let's put some breadcrumbs on the ground and watch the birds come — stay very still.",
                  "zh": "我们放些面包屑在地上看鸟来——保持不动。"
                },
                {
                  "en": "Can you see the bird's colors? What colors do you notice?",
                  "zh": "你能看到鸟的颜色吗？你注意到什么颜色？"
                },
                {
                  "en": "Different birds make different sounds — listen carefully. What do you hear?",
                  "zh": "不同的鸟有不同的叫声——仔细听。你听到了什么？"
                }
              ],
              "A2": [
                {
                  "en": "Bird watching teaches patience and observation — two skills that serve us well in life.",
                  "zh": "观鸟教会耐心和观察——这两项技能在生活中很有用。"
                },
                {
                  "en": "Every bird species has its own unique behaviors — the more you watch, the more you discover.",
                  "zh": "每种鸟都有自己独特的行为——看得越多，发现越多。"
                },
                {
                  "en": "Feeding birds is a small act of kindness that connects us to the natural world around us.",
                  "zh": "喂鸟是连接我们与周围自然世界的小小善举。"
                }
              ],
              "B1": [
                {
                  "en": "Bird watching is a hobby that can bring you joy for your entire life — it never gets old.",
                  "zh": "观鸟是一个能给你一生带来快乐的爱好——永远不会腻。"
                },
                {
                  "en": "The patience required to observe wildlife is the same patience that builds great scientists and artists.",
                  "zh": "观察野生动物所需的耐心，正是造就伟大科学家和艺术家的耐心。"
                },
                {
                  "en": "In our busy world, the simple act of watching birds reminds us to slow down and notice beauty.",
                  "zh": "在这个忙碌的世界，简单的观鸟提醒我们慢下来注意美。"
                }
              ]
            }
          }
        }
      },
      "climbing": {
        "name": "体能攀爬",
        "keywords": [
          "爬山",
          "跳绳",
          "攀爬",
          "蹦床",
          "吊环",
          "体能",
          "运动"
        ],
        "sub_scenes": {
          "hiking": {
            "name": "爬山/徒步",
            "keywords": [
              "爬山",
              "徒步",
              "登山",
              "山路"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's climb the hill!",
                  "zh": "我们爬山吧！"
                },
                {
                  "en": "Step by step. Go go go!",
                  "zh": "一步一步来，加油加油！"
                },
                {
                  "en": "We made it to the top! Hooray!",
                  "zh": "我们到顶啦！万岁！"
                }
              ],
              "A1": [
                {
                  "en": "Let's go for a hike today. The fresh air will feel so good!",
                  "zh": "今天我们去徒步吧，新鲜空气会很舒服的！"
                },
                {
                  "en": "Take small steps and breathe steadily. We'll get there!",
                  "zh": "小步走，均匀呼吸，我们会到的！"
                },
                {
                  "en": "Look at the view from up here! We can see our whole neighborhood!",
                  "zh": "看上面的风景！能看到我们整个小区！"
                },
                {
                  "en": "Don't forget to drink water. Staying hydrated is important when hiking.",
                  "zh": "别忘了喝水，徒步时保持水分很重要。"
                }
              ],
              "A2": [
                {
                  "en": "Hiking is great exercise and a wonderful way to connect with nature.",
                  "zh": "徒步是很好的运动，也是与自然连接的好方式。"
                },
                {
                  "en": "I noticed you're getting much better at climbing — your practice is paying off!",
                  "zh": "我发现你爬得越来越好了——练习果然有回报！"
                },
                {
                  "en": "Let's pack some snacks and water for our hike. Preparation is key!",
                  "zh": "我们打包些零食和水，准备是关键！"
                }
              ],
              "B1": [
                {
                  "en": "Reaching the summit after a challenging hike gives you a sense of accomplishment like nothing else.",
                  "zh": "经历艰难的攀登到达山顶，带来的成就感是其他任何事都比不了的。"
                }
              ]
            }
          },
          "jump_rope": {
            "name": "跳绳",
            "keywords": [
              "跳绳",
              "跳",
              "绳子"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Skip, skip, skip!",
                  "zh": "跳跳跳！"
                },
                {
                  "en": "One, two, three... jump!",
                  "zh": "一、二、三……跳！"
                }
              ],
              "A1": [
                {
                  "en": "Let's see how many jumps you can do in a row!",
                  "zh": "我们看看你能连续跳多少个！"
                },
                {
                  "en": "Swing the rope and jump when it comes down. Ready? Jump!",
                  "zh": "甩绳子，落下来的时候跳。准备好了吗？跳！"
                },
                {
                  "en": "Great job! You jumped ten times without stopping!",
                  "zh": "太棒了！你连续跳了十个！"
                }
              ],
              "A2": [
                {
                  "en": "Jumping rope is one of the best exercises for coordination and stamina.",
                  "zh": "跳绳是对协调性和耐力最好的运动之一。"
                },
                {
                  "en": "Let's try some tricks — can you jump on one foot? Or cross the rope?",
                  "zh": "试试花样——能单脚跳吗？或者交叉绳子？"
                }
              ],
              "B1": [
                {
                  "en": "Consistent exercise habits formed in childhood often last a lifetime.",
                  "zh": "童年养成的一致运动习惯常常能持续一生。"
                }
              ]
            }
          },
          "climbing": {
            "name": "攀爬架/攀岩",
            "keywords": [
              "攀爬",
              "攀岩",
              "爬",
              "高",
              "手",
              "脚",
              "攀爬架"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Climb up!",
                  "zh": "爬上去！"
                },
                {
                  "en": "One hand, one foot!",
                  "zh": "一手一脚！"
                },
                {
                  "en": "You're so high!",
                  "zh": "你好高啊！"
                },
                {
                  "en": "Careful now!",
                  "zh": "小心！"
                }
              ],
              "A1": [
                {
                  "en": "When you climb, always have three points of contact — two hands and one foot, or two feet and one hand.",
                  "zh": "攀爬时始终保持三点接触——两手一脚或两脚一手。"
                },
                {
                  "en": "Look for the next hold before you move — plan your path as you climb.",
                  "zh": "移动前先找好下一个抓手——边爬边规划路线。"
                },
                {
                  "en": "You're getting so strong — look how much higher you can climb now than last month!",
                  "zh": "你越来越强壮了——看你比上个月爬得高了多少！"
                }
              ],
              "A2": [
                {
                  "en": "Rock climbing is like solving a vertical puzzle — each move requires strategy and strength.",
                  "zh": "攀岩就像解一个垂直的谜题——每一步都需要策略和力量。"
                },
                {
                  "en": "The trust between climber and belayer is one of the purest forms of teamwork.",
                  "zh": "攀爬者和保护者之间的信任是最纯粹的团队合作形式之一。"
                },
                {
                  "en": "Overcoming the fear of heights through climbing builds confidence that transfers to everything.",
                  "zh": "通过攀爬克服恐高建立的信心会迁移到一切事情上。"
                }
              ],
              "B1": [
                {
                  "en": "Climbing teaches you that the hardest routes often lead to the most rewarding views.",
                  "zh": "攀爬教会你，最难的路往往通向最美的风景。"
                },
                {
                  "en": "The problem-solving mindset you develop on the climbing wall is exactly what you need for life's challenges.",
                  "zh": "你在攀岩墙上培养的解决问题的思维方式，正是面对人生挑战所需的。"
                },
                {
                  "en": "Every climber falls — what matters is getting back on the wall and trying again.",
                  "zh": "每个攀爬者都会掉下来——重要的是重新上墙再试一次。"
                }
              ]
            }
          },
          "trampoline": {
            "name": "蹦床",
            "keywords": [
              "蹦床",
              "跳",
              "弹",
              "高",
              "翻",
              "弹跳"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Jump, jump, jump!",
                  "zh": "跳跳跳！"
                },
                {
                  "en": "Bounce higher!",
                  "zh": "弹高点！"
                },
                {
                  "en": "Wheee!",
                  "zh": "呜——！"
                },
                {
                  "en": "Do a star jump!",
                  "zh": "做个星星跳！"
                }
              ],
              "A1": [
                {
                  "en": "Bend your knees when you land — it helps you bounce higher and protects your joints.",
                  "zh": "落地时弯膝盖——能弹得更高还保护关节。"
                },
                {
                  "en": "Try to jump in the center of the trampoline — that's the bounciest spot.",
                  "zh": "试着在蹦床中心跳——那是最弹的地方。"
                },
                {
                  "en": "Trampolining is such great exercise — you're working your whole body without even realizing it.",
                  "zh": "蹦床是很好的锻炼——你在不知不觉中锻炼了全身。"
                }
              ],
              "A2": [
                {
                  "en": "The feeling of weightlessness at the top of a bounce is pure joy — it never gets old.",
                  "zh": "弹到最高点时的失重感是纯粹的快乐——永远不会腻。"
                },
                {
                  "en": "Trampolining improves your balance, coordination, and cardiovascular fitness all at once.",
                  "zh": "蹦床同时改善你的平衡、协调和心肺功能。"
                },
                {
                  "en": "Learning to control your body in the air is a skill that helps in many other sports.",
                  "zh": "学会在空中控制身体是一项能在许多其他运动中帮到你的技能。"
                }
              ],
              "B1": [
                {
                  "en": "There's something liberating about defying gravity, even if just for a moment.",
                  "zh": "对抗重力的感觉有种解放感，哪怕只有一瞬间。"
                },
                {
                  "en": "The joy of bouncing is universal — it connects us to the childlike wonder we should never lose.",
                  "zh": "弹跳的快乐是普世的——它将我们与不应失去的童真好奇相连。"
                },
                {
                  "en": "Physical play like trampolining isn't just fun — it's essential for brain development and emotional wellbeing.",
                  "zh": "蹦床这样的身体游戏不只是好玩——对大脑发育和情绪健康至关重要。"
                }
              ]
            }
          },
          "monkey_bars": {
            "name": "吊环/单杠",
            "keywords": [
              "吊环",
              "单杠",
              "悬挂",
              "臂力",
              "坚持",
              "翻"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Hang on!",
                  "zh": "抓住！"
                },
                {
                  "en": "Swing, swing!",
                  "zh": "荡呀荡！"
                },
                {
                  "en": "One bar to the next!",
                  "zh": "一个接一个！"
                },
                {
                  "en": "You did it!",
                  "zh": "你做到了！"
                }
              ],
              "A1": [
                {
                  "en": "Let's see how long you can hang from the bar — it builds amazing arm strength.",
                  "zh": "看看你能在杠上挂多久——能练出超强臂力。"
                },
                {
                  "en": "Swing your body to build momentum, then reach for the next bar.",
                  "zh": "荡身体积攒动力，然后去抓下一根杠。"
                },
                {
                  "en": "Monkey bars are challenging, but every time you try, you get a little stronger.",
                  "zh": "单杠很有挑战，但每次尝试你都会变强一点。"
                }
              ],
              "A2": [
                {
                  "en": "The monkey bars teach a powerful lesson: progress is made one reach at a time.",
                  "zh": "单杠教了有力的一课：进步是一抓一抓取得的。"
                },
                {
                  "en": "Grip strength is one of the best indicators of overall physical health — and it's fun to train.",
                  "zh": "握力是整体身体健康的最好指标之一——而且训练起来很有趣。"
                },
                {
                  "en": "When you finally make it all the way across, the sense of achievement is incredible.",
                  "zh": "当你终于成功过完全程，那种成就感是难以置信的。"
                }
              ],
              "B1": [
                {
                  "en": "Upper body strength isn't just about muscles — it's about the confidence that comes from knowing what your body can do.",
                  "zh": "上肢力量不只是肌肉——是了解自己身体能力带来的信心。"
                },
                {
                  "en": "The perseverance required to master the monkey bars is the same quality that achieves great things in life.",
                  "zh": "掌握单杠所需的毅力，正是成就人生大事所需的品质。"
                },
                {
                  "en": "Every time you push through the burn in your arms, you're building mental toughness alongside physical strength.",
                  "zh": "每次你挺过手臂的酸痛，你在锻炼身体力量的同时也在培养心理韧性。"
                }
              ]
            }
          }
        }
      }
    }
  },
  {
    "id": "transport",
    "name": "出行交通",
    "name_en": "On the Go",
    "icon": "🚗",
    "categories": {
      "daily_commute": {
        "name": "日常通勤",
        "keywords": [
          "出行",
          "坐车",
          "公交",
          "地铁",
          "走路",
          "打车",
          "电动车",
          "通勤",
          "交通"
        ],
        "sub_scenes": {
          "car": {
            "name": "坐汽车",
            "keywords": [
              "开车",
              "汽车",
              "轿车",
              "自驾",
              "堵车"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's go! Buckle up!",
                  "zh": "出发！系好安全带！"
                },
                {
                  "en": "Look, a red light. Stop!",
                  "zh": "看，红灯。停！"
                },
                {
                  "en": "We're off!",
                  "zh": "出发啦！",
                  "keywords": [
                    "出发"
                  ]
                },
                {
                  "en": "We are here!",
                  "zh": "我们到啦！"
                },
                {
                  "en": "Sit nicely, please.",
                  "zh": "请坐好。"
                },
                {
                  "en": "Look out the window!",
                  "zh": "看窗外！"
                }
              ],
              "A1": [
                {
                  "en": "Get in the car and buckle your seatbelt first thing.",
                  "zh": "上车第一件事系好安全带。"
                },
                {
                  "en": "Can you see the traffic light? What color is it now?",
                  "zh": "你看到红绿灯了吗？现在什么颜色？"
                },
                {
                  "en": "We need to turn left at the next corner.",
                  "zh": "下个路口要左转。"
                },
                {
                  "en": "Are we there yet? Almost! Just a few more minutes.",
                  "zh": "快到了吗？快了！再几分钟。"
                },
                {
                  "en": "Let's sing a song while we drive!",
                  "zh": "我们开车的时候唱歌吧！"
                },
                {
                  "en": "Don't open the window too much.",
                  "zh": "窗户别开太大。"
                }
              ],
              "A2": [
                {
                  "en": "Let me adjust your seatbelt to make sure it fits properly.",
                  "zh": "我帮你调一下安全带，确保合适。"
                },
                {
                  "en": "We're taking a different route today because of the traffic.",
                  "zh": "今天走另一条路，因为堵车。"
                },
                {
                  "en": "The GPS says we'll arrive in about 15 minutes.",
                  "zh": "导航说大概 15 分钟到。"
                },
                {
                  "en": "I remember when you were little, car rides would put you right to sleep!",
                  "zh": "记得你小时候一坐车就睡着了！"
                }
              ],
              "B1": [
                {
                  "en": "Let's check the traffic conditions before we head out — it might affect our route.",
                  "zh": "出发前看看路况——可能影响我们的路线。"
                },
                {
                  "en": "I appreciate you being so patient during long car rides — not all kids are like that.",
                  "zh": "我很感谢你在长途车上这么有耐心——不是所有孩子都这样。"
                }
              ]
            }
          },
          "bus": {
            "name": "坐公交/地铁",
            "keywords": [
              "公交",
              "公交车",
              "巴士",
              "地铁",
              "站台",
              "刷卡"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "The bus is coming!",
                  "zh": "公交车来了！"
                },
                {
                  "en": "Hold my hand on the bus.",
                  "zh": "在公交车上牵着我的手。"
                },
                {
                  "en": "Sit on the seat.",
                  "zh": "坐在座位上。"
                },
                {
                  "en": "We get off here!",
                  "zh": "我们在这站下！"
                }
              ],
              "A1": [
                {
                  "en": "Let's wait at the bus stop. Can you see our bus coming?",
                  "zh": "我们在公交站等吧，看到我们的车了吗？"
                },
                {
                  "en": "Get your bus card ready. Beep! There you go.",
                  "zh": "把公交卡准备好，嘀！好了。"
                },
                {
                  "en": "The subway is coming. Stand behind the yellow line.",
                  "zh": "地铁来了，站在黄线后面。"
                },
                {
                  "en": "Let's count how many stops until we get off.",
                  "zh": "我们数数还有几站下车。"
                }
              ],
              "A2": [
                {
                  "en": "Public transportation is not only economical but also better for the environment.",
                  "zh": "公共交通不仅省钱，还对环境更好。"
                },
                {
                  "en": "The subway is a bit crowded today. Stay close to me.",
                  "zh": "今天地铁有点挤，跟紧我。"
                },
                {
                  "en": "Learning to navigate the city by public transport is an important life skill.",
                  "zh": "学会用公共交通在城市里出行是重要的生活技能。"
                }
              ],
              "B1": [
                {
                  "en": "The new subway line has made our commute so much more convenient.",
                  "zh": "新地铁线让我们的出行方便多了。"
                },
                {
                  "en": "One day you'll be navigating the city on your own — these skills will serve you well.",
                  "zh": "总有一天你会自己在城市里出行——这些技能会很有用。"
                }
              ]
            }
          },
          "walking": {
            "name": "走路/过马路",
            "keywords": [
              "走路",
              "过马路",
              "红绿灯",
              "斑马线",
              "人行道",
              "步行"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Hold my hand!",
                  "zh": "牵着我的手！"
                },
                {
                  "en": "Stop! Look! Listen!",
                  "zh": "停��看！听！"
                },
                {
                  "en": "Red means stop. Green means go.",
                  "zh": "红灯停，绿灯行。"
                },
                {
                  "en": "Walk, don't run.",
                  "zh": "走路，别跑。"
                }
              ],
              "A1": [
                {
                  "en": "Always hold my hand when we cross the street.",
                  "zh": "过马路一定要牵着我的手。"
                },
                {
                  "en": "Look left, look right, then left again before crossing.",
                  "zh": "过马路前左看看、右看看、再左看看。"
                },
                {
                  "en": "Let's use the crosswalk. That's the safest way to cross.",
                  "zh": "我们走斑马线，那是最安全的过马路方式。"
                },
                {
                  "en": "Wait for the green man before we cross. See him? Now we can go!",
                  "zh": "等绿灯小人亮了再过，看到了吗？现在可以走了！"
                }
              ],
              "A2": [
                {
                  "en": "Remember to look both ways even when the light is green — some drivers don't always stop.",
                  "zh": "就算是绿灯也要左右看——有些司机不一定停。"
                },
                {
                  "en": "Walking is the most basic form of transportation, and it's also the healthiest.",
                  "zh": "走路是最基本的出行方式，也是最健康的。"
                }
              ],
              "B1": [
                {
                  "en": "Road safety awareness is something that could save your life one day. Take it seriously.",
                  "zh": "道路安全意识可能有一天会救你的命，要认真对待。"
                }
              ]
            }
          },
          "taxi": {
            "name": "打车/网约车",
            "keywords": [
              "打车",
              "出租车",
              "叫车",
              "等车",
              "到了",
              "网约车"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Call a taxi!",
                  "zh": "叫出租车！"
                },
                {
                  "en": "The car is here!",
                  "zh": "车来了！"
                },
                {
                  "en": "Get in!",
                  "zh": "上车！"
                },
                {
                  "en": "Buckle up!",
                  "zh": "系安全带！"
                }
              ],
              "A1": [
                {
                  "en": "Let's call a ride on the phone — it'll be here in a few minutes.",
                  "zh": "我们用手机叫个车——几分钟就到。"
                },
                {
                  "en": "Watch for the car's license plate number so we get in the right one.",
                  "zh": "注意看车牌号，别上错车。"
                },
                {
                  "en": "Taxis and ride-hailing apps make getting around so convenient.",
                  "zh": "出租车和叫车软件让出行变得好方便。"
                },
                {
                  "en": "Always check the driver's name and car details before getting in.",
                  "zh": "上车前一定要核对司机名字和车辆信息。"
                }
              ],
              "A2": [
                {
                  "en": "Ride-hailing is a modern convenience — but always prioritize safety over speed.",
                  "zh": "网约车是现代便利——但安全永远比速度重要。"
                },
                {
                  "en": "Learning to navigate different transport options is an important urban skill.",
                  "zh": "学会使用不同交通方式是重要的城市技能。"
                },
                {
                  "en": "One day you'll be calling your own rides — these small lessons add up.",
                  "zh": "总有一天你会自己叫车——这些小小的课程在积累。"
                }
              ],
              "B1": [
                {
                  "en": "Understanding how to use ride services safely is part of being street-smart in the modern world.",
                  "zh": "懂得安全使用叫车服务是现代都市智慧的一部分。"
                },
                {
                  "en": "The convenience of modern transport shouldn't make us complacent about safety.",
                  "zh": "现代交通的便利不应让我们对安全掉以轻心。"
                },
                {
                  "en": "Every mode of transport teaches you something different about navigating the world.",
                  "zh": "每种交通方式都教你一些关于在这个世界出行的不同东西。"
                }
              ]
            }
          },
          "ebike": {
            "name": "骑电动车",
            "keywords": [
              "电动车",
              "电瓶车",
              "头盔",
              "坐好",
              "扶稳",
              "充电"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Get on the bike!",
                  "zh": "上车吧！",
                  "keywords": [
                    "上车"
                  ]
                },
                {
                  "en": "Hold onto me!",
                  "zh": "抱紧我！",
                  "keywords": [
                    "抱紧"
                  ]
                },
                {
                  "en": "Go slow!",
                  "zh": "慢点！"
                },
                {
                  "en": "We're here!",
                  "zh": "到了！"
                }
              ],
              "A1": [
                {
                  "en": "Always wear your helmet when riding the e-bike — safety comes first.",
                  "zh": "骑电动车一定要戴头盔——安全第一。"
                },
                {
                  "en": "Hold onto me tightly and keep your feet on the footrests.",
                  "zh": "抓紧我，脚放在脚踏上。"
                },
                {
                  "en": "E-bikes are convenient but we need to follow the traffic rules just like cars.",
                  "zh": "电动车方便但我们要像汽车一样遵守交规。"
                }
              ],
              "A2": [
                {
                  "en": "E-bikes are an eco-friendly way to get around the city — good for us and the planet.",
                  "zh": "电动车是环保的城市出行方式——对我们和地球都好。"
                },
                {
                  "en": "Learning traffic awareness as a passenger helps you become a better driver someday.",
                  "zh": "作为乘客学习交通意识，有朝一日帮你成为更好的驾驶者。"
                },
                {
                  "en": "The wind in your face on an e-bike ride is a simple pleasure of daily life.",
                  "zh": "骑电动车时风吹在脸上是日常生活的简单快乐。"
                }
              ],
              "B1": [
                {
                  "en": "Electric vehicles represent the future of urban transport — you're experiencing it firsthand.",
                  "zh": "电动车代表着城市交通的未来——你正在亲身体验。"
                },
                {
                  "en": "The discipline of always wearing safety gear builds a mindset that protects you for life.",
                  "zh": "始终穿戴安全装备的纪律培养了保护你一生的思维方式。"
                },
                {
                  "en": "Sustainable transport choices are small daily votes for the kind of planet we want to leave behind.",
                  "zh": "可持续的出行选择是我们为想留给后代的星球投下的小小每日选票。"
                }
              ]
            }
          }
        }
      },
      "long_travel": {
        "name": "长途旅行",
        "keywords": [
          "旅行",
          "火车",
          "飞机",
          "酒店",
          "自驾",
          "坐船",
          "长途",
          "出行"
        ],
        "sub_scenes": {
          "train": {
            "name": "坐火车/高铁",
            "keywords": [
              "火车",
              "高铁",
              "动车",
              "站台",
              "检票"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "The train is coming! Choo choo!",
                  "zh": "火车来了！呜呜！"
                },
                {
                  "en": "Let's find our seat.",
                  "zh": "我们找座位。"
                },
                {
                  "en": "Look out the window! So fast!",
                  "zh": "看窗外！好快！"
                }
              ],
              "A1": [
                {
                  "en": "We're taking the high-speed train today. It goes super fast!",
                  "zh": "今天坐高铁，跑得超级快！"
                },
                {
                  "en": "Let's find our carriage and seat number on the ticket.",
                  "zh": "我们在票上找车厢号和座位号。"
                },
                {
                  "en": "The train ride will take about two hours. What shall we do to pass the time?",
                  "zh": "火车要坐两小时，我们做什么打发时间？"
                }
              ],
              "A2": [
                {
                  "en": "Train travel is my favorite way to go — you get to see the countryside pass by.",
                  "zh": "坐火车是我最喜欢的出行方式——可以看到乡间风景掠过。"
                },
                {
                  "en": "Let's pack some snacks and a book for the journey. Being prepared makes travel more enjoyable.",
                  "zh": "我们打包些零食和一本书，做好准备让旅途更愉快。"
                }
              ],
              "B1": [
                {
                  "en": "Travel broadens your perspective in ways that staying home never can.",
                  "zh": "旅行开阔视野的方式是待在家里永远做不到的。"
                }
              ]
            }
          },
          "airplane": {
            "name": "坐飞机",
            "keywords": [
              "飞机",
              "机场",
              "登机",
              "起飞",
              "降落",
              "航班"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look! An airplane! So big!",
                  "zh": "看！飞机！好大！"
                },
                {
                  "en": "We're flying! Up in the sky!",
                  "zh": "我们在飞！在天上！"
                },
                {
                  "en": "Look at the clouds below!",
                  "zh": "看下面的云！"
                }
              ],
              "A1": [
                {
                  "en": "We're going to the airport. Are you excited to fly?",
                  "zh": "我们去机场，要坐飞机了兴奋吗？"
                },
                {
                  "en": "We need to go through security first. Put your bag on the belt.",
                  "zh": "先过安检，把包放在传送带上。"
                },
                {
                  "en": "Find your seat and fasten your seatbelt. The plane is about to take off.",
                  "zh": "找到座位系好安全带，飞机要起飞了。"
                },
                {
                  "en": "Your ears might feel funny when we go up. Try swallowing or yawning!",
                  "zh": "起飞时耳朵可能不舒服，试试吞咽或打哈欠！"
                }
              ],
              "A2": [
                {
                  "en": "The flight attendant will bring us snacks and drinks during the flight.",
                  "zh": "飞行途中空乘会给我们送零食和饮料。"
                },
                {
                  "en": "Flying is the fastest way to travel long distances. We'll be there before you know it!",
                  "zh": "飞机是长途旅行最快的方式，转眼就到了！"
                }
              ],
              "B1": [
                {
                  "en": "Air travel has made the world so much smaller — we can reach almost anywhere in a day.",
                  "zh": "航空旅行让世界变得小多了——我们几乎一天内能到达任何地方。"
                }
              ]
            }
          },
          "hotel": {
            "name": "住酒店",
            "keywords": [
              "酒店",
              "宾馆",
              "入住",
              "房间",
              "住宿"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "This is our room! So nice!",
                  "zh": "这是我们的房间！好漂亮！"
                },
                {
                  "en": "Let's jump on the big bed!",
                  "zh": "我们在大床上跳跳！"
                }
              ],
              "A1": [
                {
                  "en": "Let's check in at the front desk. We need to get our room key.",
                  "zh": "我们在前台办理入住，拿房间钥匙。"
                },
                {
                  "en": "This is our home for the next few days. Let's unpack and get comfortable.",
                  "zh": "这是接下来几天的家，我们打开行李安顿下来。"
                },
                {
                  "en": "Hotel rooms are exciting, aren't they? Everything feels like an adventure!",
                  "zh": "酒店房间很令人兴奋对吧？一切都像冒险！"
                }
              ],
              "A2": [
                {
                  "en": "When we stay at a hotel, we should be respectful — keep the noise down and tidy up after ourselves.",
                  "zh": "住酒店要有礼貌——保持安静、自己收拾。"
                }
              ],
              "B1": [
                {
                  "en": "Travel teaches adaptability — every new place is a chance to learn and grow.",
                  "zh": "旅行教人适应能力——每个新地方都是学习和成长的机会。"
                }
              ]
            }
          },
          "road_trip": {
            "name": "自驾游",
            "keywords": [
              "自驾",
              "开车",
              "导航",
              "服务区",
              "休息",
              "加油站",
              "长途"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Road trip!",
                  "zh": "自驾游！"
                },
                {
                  "en": "Are we there yet?",
                  "zh": "到了吗？"
                },
                {
                  "en": "See the mountains!",
                  "zh": "看那些山！",
                  "keywords": [
                    "山",
                    "看"
                  ]
                },
                {
                  "en": "Rest stop!",
                  "zh": "休息站！"
                }
              ],
              "A1": [
                {
                  "en": "We're going on a road trip — it's a long drive but we'll have fun along the way.",
                  "zh": "我们去自驾游——路程很长但一路上会很好玩。"
                },
                {
                  "en": "Let's play a car game: count how many red cars you can spot!",
                  "zh": "我们玩个车上游戏：数数你能看到多少辆红色汽车！"
                },
                {
                  "en": "Road trips are about the journey, not just the destination.",
                  "zh": "自驾游的意义在于旅程，不只是目的地。"
                }
              ],
              "A2": [
                {
                  "en": "Some of the best family memories are made during long car rides together.",
                  "zh": "最好的家庭回忆有些是在长途车程中创造的。"
                },
                {
                  "en": "Road trips teach patience — long journeys make the arrival even sweeter.",
                  "zh": "自驾游教会耐心——漫长的旅途让到达更加甜蜜。"
                },
                {
                  "en": "The changing scenery outside the window is like a moving painting.",
                  "zh": "窗外变换的风景就像一幅流动的画。"
                }
              ],
              "B1": [
                {
                  "en": "Road trips embody the spirit of adventure — the open road represents freedom and possibility.",
                  "zh": "自驾游体现了冒险精神——开阔的道路代表自由和可能性。"
                },
                {
                  "en": "The conversations that happen on long drives are often the most meaningful ones.",
                  "zh": "长途驾驶中发生的对话往往是最有意义的。"
                },
                {
                  "en": "Travel teaches you that the world is both bigger and smaller than you imagined.",
                  "zh": "旅行教会你，世界既比你想象的更大，也更小。"
                }
              ]
            }
          },
          "ferry": {
            "name": "坐船/轮渡",
            "keywords": [
              "坐船",
              "轮船",
              "渡轮",
              "甲板",
              "海",
              "浪",
              "码头"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "The big boat!",
                  "zh": "大船！"
                },
                {
                  "en": "Look at the water!",
                  "zh": "看水！"
                },
                {
                  "en": "Seagulls!",
                  "zh": "海鸥！"
                },
                {
                  "en": "We're moving!",
                  "zh": "我们在动！"
                }
              ],
              "A1": [
                {
                  "en": "Let's go on the ferry — you can stand on the deck and feel the sea breeze.",
                  "zh": "我们坐轮渡——你可以站在甲板上感受海风。"
                },
                {
                  "en": "Watch the waves — see how the boat cuts through the water?",
                  "zh": "看海浪——看到船怎么破开水面吗？"
                },
                {
                  "en": "Being on a boat feels like a little adventure every time.",
                  "zh": "每次坐船都像一次小冒险。"
                }
              ],
              "A2": [
                {
                  "en": "Ferries have been connecting people across waters for thousands of years.",
                  "zh": "轮渡连接水两岸的人们已经有几千年历史了。"
                },
                {
                  "en": "The rhythm of the waves and the fresh sea air is incredibly calming.",
                  "zh": "波浪的节奏和新鲜的海风令人无比平静。"
                },
                {
                  "en": "Traveling by water gives you a completely different perspective of the city.",
                  "zh": "水上旅行让你对城市有完全不同的视角。"
                }
              ],
              "B1": [
                {
                  "en": "Maritime travel is one of humanity's oldest traditions — you're part of a timeless experience.",
                  "zh": "海上旅行是人类最古老的传统之一——你在体验一种永恒。"
                },
                {
                  "en": "There's something profound about being on open water — it reminds us how small we are.",
                  "zh": "在开阔水域上有种深刻的东西——提醒我们有多渺小。"
                },
                {
                  "en": "The ferry connects islands and shores, just as travel connects cultures and hearts.",
                  "zh": "轮渡连接岛屿和海岸，正如旅行连接文化和心灵。"
                }
              ]
            }
          }
        }
      },
      "safety": {
        "name": "安全出行",
        "keywords": [
          "安全",
          "安全带",
          "头盔",
          "交通规则",
          "车内",
          "窗外",
          "电话",
          "出行安全"
        ],
        "sub_scenes": {
          "car_safety": {
            "name": "系安全带/戴头盔",
            "keywords": [
              "安全带",
              "头盔",
              "安全座椅"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Buckle up! Click!",
                  "zh": "系好安全带！咔嗒！"
                },
                {
                  "en": "Put on your helmet!",
                  "zh": "戴上头盔！"
                }
              ],
              "A1": [
                {
                  "en": "Safety first! Always buckle your seatbelt before the car moves.",
                  "zh": "安全第一！车开动前一定要系好安全带。"
                },
                {
                  "en": "Your helmet is like a shield for your head. Never ride without it.",
                  "zh": "头盔就像你头部的盾牌，骑车千万别不戴。"
                },
                {
                  "en": "The car seat keeps you safe. Let me make sure it's buckled properly.",
                  "zh": "安全座椅保护你，我确认一下扣好了。"
                }
              ],
              "A2": [
                {
                  "en": "Safety habits like wearing a seatbelt should become automatic — you do it without even thinking.",
                  "zh": "系安全带这样的安全习惯应该变成自动行为——想都不用想就做了。"
                }
              ],
              "B1": [
                {
                  "en": "The few seconds it takes to buckle up could be the most important seconds of your life.",
                  "zh": "系安全带的几秒钟可能是你人生中最重要的几秒。"
                }
              ]
            }
          },
          "traffic_rules": {
            "name": "遵守交通规则",
            "keywords": [
              "交通规则",
              "红灯",
              "绿灯",
              "停",
              "看",
              "等",
              "斑马线"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Red light, stop!",
                  "zh": "红灯，停！"
                },
                {
                  "en": "Green light, go!",
                  "zh": "绿灯，走！"
                },
                {
                  "en": "Look both ways!",
                  "zh": "左右看！"
                },
                {
                  "en": "Wait for the signal!",
                  "zh": "等信号！"
                }
              ],
              "A1": [
                {
                  "en": "Always look left and right before crossing — even when the light is green.",
                  "zh": "过马路前一定左右看——即使绿灯也要看。"
                },
                {
                  "en": "Traffic lights keep everyone safe — red means stop, green means go, yellow means slow down.",
                  "zh": "红绿灯保护大家安全——红灯停，绿灯行，黄灯减速。"
                },
                {
                  "en": "Hold my hand when we cross the street — safety first.",
                  "zh": "过马路时牵我的手——安全第一。"
                }
              ],
              "A2": [
                {
                  "en": "Understanding traffic rules isn't just about following laws — it's about respecting everyone's safety.",
                  "zh": "理解交通规则不只是遵守法律——是尊重每个人的安全。"
                },
                {
                  "en": "The habits you form now as a pedestrian will make you a better driver someday.",
                  "zh": "你现在作为行人养成的习惯，会让你将来成为更好的驾驶者。"
                },
                {
                  "en": "Road safety is a shared responsibility — everyone plays a part.",
                  "zh": "道路安全是共同责任——每个人都参与其中。"
                }
              ],
              "B1": [
                {
                  "en": "Traffic rules are a social contract — they work because we all agree to follow them.",
                  "zh": "交通规则是社会契约——它们有效是因为我们都同意遵守。"
                },
                {
                  "en": "The discipline of following rules even when no one is watching builds true character.",
                  "zh": "在没人看着时也遵守规则的纪律塑造真正的品格。"
                },
                {
                  "en": "A moment of impatience at a crosswalk is never worth a lifetime of regret.",
                  "zh": "在斑马线前的一时急躁永远不值得用一生的遗憾来换。"
                }
              ]
            }
          },
          "car_behavior": {
            "name": "不在车内打闹",
            "keywords": [
              "车内",
              "打闹",
              "安静",
              "坐好",
              "吵闹",
              "不要",
              "安全"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Sit nicely!",
                  "zh": "坐好！"
                },
                {
                  "en": "No fighting!",
                  "zh": "别打架！"
                },
                {
                  "en": "Quiet in the car!",
                  "zh": "车里安静！"
                },
                {
                  "en": "Buckle up!",
                  "zh": "系好安全带！",
                  "keywords": [
                    "安全带"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Please don't fight in the car — it distracts the driver and that's dangerous.",
                  "zh": "别在车里打闹——会分散驾驶员注意力很危险。"
                },
                {
                  "en": "Let's keep the car peaceful so we all arrive safely.",
                  "zh": "我们保持车内安静，这样大家都能安全到达。"
                },
                {
                  "en": "I know long car rides can be boring, but we need to stay calm and seated.",
                  "zh": "我知道长途坐车很无聊，但我们需要保持冷静坐好。"
                }
              ],
              "A2": [
                {
                  "en": "Car safety isn't just about seatbelts — it's about creating a calm environment for the driver.",
                  "zh": "车内安全不只是安全带——是为驾驶员创造安静的环境。"
                },
                {
                  "en": "Learning to behave in a car is part of being a responsible passenger.",
                  "zh": "学会在车内守规矩是做负责任乘客的一部分。"
                },
                {
                  "en": "When everyone cooperates, car rides become quality family time instead of stressful trips.",
                  "zh": "当大家配合时，车程变成优质家庭时光而不是紧张旅途。"
                }
              ],
              "B1": [
                {
                  "en": "Self-control in confined spaces like a car is a skill that serves you well in many situations.",
                  "zh": "在车里这样密闭空间中的自控力是一项在很多情况下都有用的技能。"
                },
                {
                  "en": "Being considerate of the driver is a form of respect that shows maturity.",
                  "zh": "为驾驶员着想是一种显示成熟的尊重。"
                },
                {
                  "en": "The car is a shared space — keeping it peaceful is everyone's responsibility.",
                  "zh": "车是共享空间——保持安静是每个人的责任。"
                }
              ]
            }
          },
          "no_reaching_out": {
            "name": "不把头手伸出窗外",
            "keywords": [
              "窗外",
              "伸手",
              "探头",
              "危险",
              "不要",
              "车窗"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Hands inside!",
                  "zh": "手放进来！"
                },
                {
                  "en": "Don't lean out!",
                  "zh": "别探出去！"
                },
                {
                  "en": "Window up!",
                  "zh": "关窗！"
                },
                {
                  "en": "Danger!",
                  "zh": "危险！"
                }
              ],
              "A1": [
                {
                  "en": "Never put your hands or head out the car window — it's very dangerous.",
                  "zh": "绝对不要把手或头伸出车窗外——非常危险。"
                },
                {
                  "en": "Keep your arms inside the car at all times when we're moving.",
                  "zh": "车在行驶时手臂始终放在车内。"
                },
                {
                  "en": "I know the breeze feels nice, but safety is more important.",
                  "zh": "我知道风吹着很舒服，但安全更重要。"
                }
              ],
              "A2": [
                {
                  "en": "Cars and other vehicles pass very close — even a small reach out can cause serious injury.",
                  "zh": "汽车和其他车辆离得很近——哪怕只伸出去一点都可能造成严重伤害。"
                },
                {
                  "en": "This rule applies on buses and trains too — always keep your body inside.",
                  "zh": "这条规则在公交车和火车上也适用——身体始终保持在车内。"
                },
                {
                  "en": "Understanding why rules exist helps you remember to follow them.",
                  "zh": "理解规则为什么存在，帮你记住遵守它们。"
                }
              ],
              "B1": [
                {
                  "en": "Some safety rules exist because of tragedies that have already happened — we learn from them.",
                  "zh": "有些安全规则之所以存在是因为已经发生过的悲剧——我们从中学习。"
                },
                {
                  "en": "The momentary temptation to feel the wind is never worth the permanent consequences of an accident.",
                  "zh": "感受风的一时诱惑永远不值得事故的永久后果。"
                },
                {
                  "en": "Protecting your body is one of the most fundamental responsibilities you have to yourself.",
                  "zh": "保护自己的身体是你对自己最基本的责任之一。"
                }
              ]
            }
          },
          "remember_phone": {
            "name": "记住家长电话",
            "keywords": [
              "电话",
              "号码",
              "记住",
              "找",
              "求助",
              "走丢",
              "联系"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "What's mommy's number?",
                  "zh": "妈妈的号码是多少？"
                },
                {
                  "en": "Repeat after me!",
                  "zh": "跟我念！",
                  "keywords": [
                    "跟我念",
                    "重复"
                  ]
                },
                {
                  "en": "Good memory!",
                  "zh": "记性真好！"
                },
                {
                  "en": "Call me!",
                  "zh": "打给我！"
                }
              ],
              "A1": [
                {
                  "en": "Let's practice remembering my phone number — it's important in case you ever get lost.",
                  "zh": "我们练习记住我的电话号码——万一你走丢了很重要。"
                },
                {
                  "en": "If you ever can't find me, find a police officer or a store worker and give them this number.",
                  "zh": "如果找不到我，找警察或店员给他们这个号码。"
                },
                {
                  "en": "Knowing your parents' phone numbers is one of the most important safety skills.",
                  "zh": "记住家长电话号码是最重要的安全技能之一。"
                }
              ],
              "A2": [
                {
                  "en": "In an emergency, being able to call your parents could make all the difference.",
                  "zh": "紧急情况下，能给父母打电话可能改变一切。"
                },
                {
                  "en": "Memorizing important numbers is like having a safety net in your pocket at all times.",
                  "zh": "记住重要号码就像口袋里随时装着安全网。"
                },
                {
                  "en": "Let's make it a game — I'll quiz you on our phone numbers and see how fast you can answer.",
                  "zh": "我们把它当游戏——我考你电话号码看你能多快回答。"
                }
              ],
              "B1": [
                {
                  "en": "The ability to reach your family in an emergency is a life skill that gives you confidence and security.",
                  "zh": "紧急情况下能联系到家人是一项给你信心和安全感的生活技能。"
                },
                {
                  "en": "In the digital age, we rely on phones to store numbers — but memorizing them is still essential.",
                  "zh": "数字时代我们依赖手机存号码——但记住它们仍然至关重要。"
                },
                {
                  "en": "The peace of mind that comes from knowing you can always reach your family is priceless.",
                  "zh": "知道自己总能联系到家人带来的安心是无价的。"
                }
              ]
            }
          }
        }
      }
    }
  },
  {
    "id": "school",
    "name": "学校与社交",
    "name_en": "School & Social",
    "icon": "🏫",
    "categories": {
      "school_prep": {
        "name": "上学准备",
        "keywords": [
          "上学",
          "书包",
          "出门",
          "校服",
          "作业",
          "水壶",
          "便当",
          "准备"
        ],
        "sub_scenes": {
          "pack_bag": {
            "name": "收拾书包",
            "keywords": [
              "收拾书包",
              "书包",
              "准备",
              "文具"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Get your bag ready!",
                  "zh": "把书包准备好！"
                },
                {
                  "en": "Put your book in the bag.",
                  "zh": "把书放进书包。"
                },
                {
                  "en": "Don't forget your water bottle!",
                  "zh": "别忘了水壶！"
                }
              ],
              "A1": [
                {
                  "en": "Let's pack your school bag together. What do you need for today?",
                  "zh": "我们一起收拾书包吧，今天需要带什么？"
                },
                {
                  "en": "Don't forget your lunch box and water bottle.",
                  "zh": "别忘了午餐盒和水壶。"
                },
                {
                  "en": "Check your timetable — do you have PE today? You might need your sports shoes.",
                  "zh": "看看课表——今天有体育课吗？可能需要运动鞋。"
                },
                {
                  "en": "Put everything you need in your bag so you don't forget anything.",
                  "zh": "把需要的东西都放进去，别漏了。"
                }
              ],
              "A2": [
                {
                  "en": "Packing your own bag teaches responsibility. Let me know if you need help remembering anything.",
                  "zh": "自己收拾书包培养责任感，如果有什么记不住需要提醒就告诉我。"
                },
                {
                  "en": "Let's pack your bag the night before so the morning isn't rushed.",
                  "zh": "我们前一晚把书包收拾好，这样早上就不赶了。"
                }
              ],
              "B1": [
                {
                  "en": "Being organized is a skill that will serve you well throughout your education and beyond.",
                  "zh": "有条理是一项能贯穿你整个教育阶段甚至更远的有用技能。"
                }
              ]
            }
          },
          "goodbye": {
            "name": "出门说再见",
            "keywords": [
              "出门",
              "说再见",
              "送",
              "接送"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Bye bye! Have fun!",
                  "zh": "拜拜！玩开心！"
                },
                {
                  "en": "See you later!",
                  "zh": "待会见！"
                },
                {
                  "en": "Have a great day at school!",
                  "zh": "在学校度过美好的一天！"
                }
              ],
              "A1": [
                {
                  "en": "Have a great day at school! I'll pick you up later.",
                  "zh": "在学校度过美好的一天！晚点我来接你。"
                },
                {
                  "en": "Say goodbye to daddy — he's heading to work too.",
                  "zh": "跟爸爸说再见——他也要去上班了。"
                },
                {
                  "en": "I'll be thinking of you. Learn something fun today!",
                  "zh": "我会想你的，今天学点好玩的东西！"
                }
              ],
              "A2": [
                {
                  "en": "I know saying goodbye can be hard sometimes, but you always have a good time once you're there.",
                  "zh": "我知道有时候说再见很难，但一到学校你就会玩得很开心的。"
                },
                {
                  "en": "Remember I'm just a phone call away if you need anything.",
                  "zh": "记住，需要什么随时给我打电话。"
                }
              ],
              "B1": [
                {
                  "en": "Learning to separate and reunite is part of growing up — and it makes our time together even more special.",
                  "zh": "学会分别和重逢是成长的一部分——这让我们的相处时光更加珍贵。"
                }
              ]
            }
          },
          "uniform": {
            "name": "穿校服/园服",
            "keywords": [
              "校服",
              "园服",
              "穿",
              "整齐",
              "扣子",
              "校徽"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Put on your uniform!",
                  "zh": "穿校服！"
                },
                {
                  "en": "Button up!",
                  "zh": "扣好！"
                },
                {
                  "en": "So smart!",
                  "zh": "真精神！"
                },
                {
                  "en": "Ready for school!",
                  "zh": "准备好上学了！"
                }
              ],
              "A1": [
                {
                  "en": "Let's get your school uniform on — make sure everything is neat and tidy.",
                  "zh": "把校服穿上——确保一切都整齐。"
                },
                {
                  "en": "Wearing your uniform with pride shows respect for your school.",
                  "zh": "自豪地穿校服体现了对学校的尊重。"
                },
                {
                  "en": "Check that your shirt is tucked in and your collar is straight.",
                  "zh": "检查上衣是否掖好，领子是否整齐。"
                }
              ],
              "A2": [
                {
                  "en": "School uniforms create a sense of belonging — everyone is part of the same team.",
                  "zh": "校服创造归属感——每个人都是同一个团队的一部分。"
                },
                {
                  "en": "Taking care of your uniform teaches responsibility for your belongings.",
                  "zh": "爱护校服教会你对物品的责任感。"
                },
                {
                  "en": "When you look neat and prepared, you feel more confident walking into school.",
                  "zh": "当你看起来整洁准备好时，走进学校会更自信。"
                }
              ],
              "B1": [
                {
                  "en": "A uniform is more than clothing — it represents the values and community of your school.",
                  "zh": "校服不只是衣服——它代表学校的价值观和社区。"
                },
                {
                  "en": "The habit of presenting yourself well each morning builds self-respect that lasts a lifetime.",
                  "zh": "每天早晨好好打理自己的习惯培养了持续一生的自尊。"
                },
                {
                  "en": "How you wear your uniform reflects your attitude — wear it with pride.",
                  "zh": "你怎么穿校服反映你的态度——自豪地穿。"
                }
              ]
            }
          },
          "check_homework": {
            "name": "检查作业",
            "keywords": [
              "检查",
              "作业",
              "带齐",
              "别忘了",
              "看看",
              "书包"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Check your bag!",
                  "zh": "检查书包！"
                },
                {
                  "en": "Got everything?",
                  "zh": "都带了吗？"
                },
                {
                  "en": "Don't forget!",
                  "zh": "别忘了！"
                },
                {
                  "en": "All set!",
                  "zh": "齐了！"
                }
              ],
              "A1": [
                {
                  "en": "Let's double-check your bag — homework, books, pencil case, water bottle?",
                  "zh": "我们再检查一下书包——作业、书、笔袋、水壶？"
                },
                {
                  "en": "Making a checklist for school items helps you remember everything.",
                  "zh": "做个上学物品清单帮你记住所有东西。"
                },
                {
                  "en": "The habit of checking before you leave will serve you well your whole life.",
                  "zh": "出门前检查的习惯会让你终身受益。"
                }
              ],
              "A2": [
                {
                  "en": "Being organized for school reduces morning stress for everyone.",
                  "zh": "为上学做好准备减少每个人早上的压力。"
                },
                {
                  "en": "I'm proud that you're learning to take responsibility for your own school preparations.",
                  "zh": "我为你学会对自己的上学准备负责感到骄傲。"
                },
                {
                  "en": "A few minutes of checking now saves a lot of trouble later.",
                  "zh": "现在花几分钟检查，以后省很多麻烦。"
                }
              ],
              "B1": [
                {
                  "en": "Self-organization is one of the most valuable skills you'll develop during your school years.",
                  "zh": "自我组织是你在学校期间培养的最宝贵技能之一。"
                },
                {
                  "en": "The discipline of preparing the night before is a habit of highly successful people.",
                  "zh": "头天晚上准备就绪的纪律是高度成功人士的习惯。"
                },
                {
                  "en": "Taking ownership of your school readiness is a step toward full independence.",
                  "zh": "对自己的上学准备负责是走向完全独立的一步。"
                }
              ]
            }
          },
          "lunchbox": {
            "name": "带水壶/便当",
            "keywords": [
              "水壶",
              "便当",
              "午餐盒",
              "装",
              "别忘了",
              "午饭"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Get your lunchbox!",
                  "zh": "拿便当！"
                },
                {
                  "en": "Fill your water bottle!",
                  "zh": "装水壶！"
                },
                {
                  "en": "Yummy lunch!",
                  "zh": "好吃的午饭！"
                },
                {
                  "en": "Don't leave it!",
                  "zh": "别忘了！"
                }
              ],
              "A1": [
                {
                  "en": "Don't forget your lunchbox and water bottle — you'll need them at school.",
                  "zh": "别忘了便当和水壶——在学校用得上。"
                },
                {
                  "en": "Staying hydrated throughout the school day helps you concentrate better.",
                  "zh": "上学期间保持水分帮你更集中注意力。"
                },
                {
                  "en": "I packed something special in your lunchbox today — see if you can find it!",
                  "zh": "今天我在你便当里放了点特别的——看看能不能找到！"
                }
              ],
              "A2": [
                {
                  "en": "Preparing your own lunch is a skill you'll appreciate when you're older.",
                  "zh": "自己准备午餐是长大后你会感激的技能。"
                },
                {
                  "en": "A balanced lunch gives you the energy to learn and play all afternoon.",
                  "zh": "均衡的午餐给你整个下午学习和玩耍的能量。"
                },
                {
                  "en": "Taking care of your lunchbox and water bottle is part of being responsible.",
                  "zh": "爱护便当和水壶是负责任的一部分。"
                }
              ],
              "B1": [
                {
                  "en": "The food you eat at lunch directly affects your afternoon performance — choose wisely.",
                  "zh": "午餐吃的食物直接影响下午的表现——明智选择。"
                },
                {
                  "en": "Learning to pack your own nutritious lunch is a cornerstone of independent living.",
                  "zh": "学会自己打包营养午餐是独立生活的基石。"
                },
                {
                  "en": "A well-packed lunch is a form of self-care that says 'I value my health and energy.'",
                  "zh": "好好打包的午餐是一种自我关爱，在说'我重视我的健康和精力'。"
                }
              ]
            }
          }
        }
      },
      "classroom": {
        "name": "课堂活动",
        "keywords": [
          "上课",
          "课间",
          "画画",
          "音乐",
          "体育",
          "学校",
          "课堂",
          "学习"
        ],
        "sub_scenes": {
          "in_class": {
            "name": "上课/举手发言",
            "keywords": [
              "上课",
              "听讲",
              "举手",
              "发言",
              "回答"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Listen to the teacher!",
                  "zh": "听老师讲！"
                },
                {
                  "en": "Raise your hand!",
                  "zh": "举手！"
                },
                {
                  "en": "Good job answering!",
                  "zh": "回答得真好！"
                }
              ],
              "A1": [
                {
                  "en": "Did you raise your hand in class today?",
                  "zh": "今天在课堂上举手了吗？"
                },
                {
                  "en": "It's okay to make mistakes — that's how we learn.",
                  "zh": "犯错了没关系——我们就是这样学习的。"
                },
                {
                  "en": "What was the most interesting thing you learned today?",
                  "zh": "今天学的最有趣的事是什么？"
                },
                {
                  "en": "I'm so proud of you for trying your best.",
                  "zh": "你尽力了，我特别骄傲。"
                }
              ],
              "A2": [
                {
                  "en": "Tell me about the most interesting thing you learned today.",
                  "zh": "跟我说说今天学的最有趣的事。"
                },
                {
                  "en": "If you're having trouble with a subject, we can work on it together after dinner.",
                  "zh": "如果哪科有困难，晚饭后我们一起攻克。"
                },
                {
                  "en": "Your teachers mentioned you've been participating more in class — that takes courage!",
                  "zh": "老师们说你上课发言更积极了——这需要勇气！"
                }
              ],
              "B1": [
                {
                  "en": "The questions you ask are just as important as the answers you give.",
                  "zh": "你提出的问题和给出的答案一样重要。"
                }
              ]
            }
          },
          "recess": {
            "name": "课间休息/做早操",
            "keywords": [
              "课间",
              "休息",
              "早操",
              "操场",
              "下课"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Time to play outside!",
                  "zh": "出去玩的时间！"
                },
                {
                  "en": "Run and jump! Have fun!",
                  "zh": "跑跑跳跳！玩开心！"
                }
              ],
              "A1": [
                {
                  "en": "Did you play outside during recess today?",
                  "zh": "今天课间在外面玩了吗？"
                },
                {
                  "en": "Who did you play with at recess?",
                  "zh": "课间跟谁一起玩的？"
                },
                {
                  "en": "Recess is a great time to run around and get your energy out.",
                  "zh": "课间是跑跑跳跳释放精力的好时机。"
                }
              ],
              "A2": [
                {
                  "en": "Taking breaks between lessons actually helps your brain learn better.",
                  "zh": "课间休息其实能帮助大脑更好地学习。"
                }
              ],
              "B1": [
                {
                  "en": "Balance is key — work hard during class, but also enjoy your breaks fully.",
                  "zh": "平衡是关键——上课认真，但休息也要尽兴。"
                }
              ]
            }
          },
          "art_class": {
            "name": "画画课/手工课",
            "keywords": [
              "画画",
              "手工",
              "做",
              "剪",
              "贴",
              "彩纸",
              "美术课"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Art class!",
                  "zh": "美术课！"
                },
                {
                  "en": "Draw with me!",
                  "zh": "跟我画！"
                },
                {
                  "en": "Cut carefully!",
                  "zh": "小心剪！"
                },
                {
                  "en": "Show me yours!",
                  "zh": "给我看你的！"
                }
              ],
              "A1": [
                {
                  "en": "What did you make in art class today? I'd love to see your creation.",
                  "zh": "今天美术课做了什么？我很想看你的作品。"
                },
                {
                  "en": "Art class is where you can express yourself freely — there are no wrong answers.",
                  "zh": "美术课是你可以自由表达的地方——没有错误答案。"
                },
                {
                  "en": "The skills you learn in art — patience, observation, creativity — help in every subject.",
                  "zh": "美术课学的技能——耐心、观察、创造力——对每门课都有帮助。"
                }
              ],
              "A2": [
                {
                  "en": "Art education isn't about becoming an artist — it's about learning to see the world differently.",
                  "zh": "美术教育不是要成为艺术家——是学会用不同眼光看世界。"
                },
                {
                  "en": "Every masterpiece starts with a single line — don't be afraid to begin.",
                  "zh": "每幅杰作都从一条线开始——不要害怕开始。"
                },
                {
                  "en": "The creativity you develop in art class will serve you in ways you can't yet imagine.",
                  "zh": "美术课培养的创造力会以你还无法想象的方式帮到你。"
                }
              ],
              "B1": [
                {
                  "en": "Art teaches us that there are many ways to solve a problem — a lesson that applies everywhere.",
                  "zh": "美术教我们解决问题有很多方法——这个道理适用于各处。"
                },
                {
                  "en": "The confidence to create something from nothing is one of the most empowering feelings there is.",
                  "zh": "从无到有创造东西的信心是最有力量的感觉之一。"
                },
                {
                  "en": "Great artists aren't born — they're made through curiosity, practice, and the courage to try.",
                  "zh": "伟大艺术家不是天生的——是通过好奇、练习和尝试的勇气造就的。"
                }
              ]
            }
          },
          "music_class": {
            "name": "音乐课",
            "keywords": [
              "唱歌",
              "音乐",
              "乐器",
              "拍手",
              "节奏",
              "音符",
              "音乐课"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Sing with me!",
                  "zh": "跟我唱！"
                },
                {
                  "en": "Clap your hands!",
                  "zh": "拍拍手！"
                },
                {
                  "en": "La la la!",
                  "zh": "啦啦啦！"
                },
                {
                  "en": "Play the drum!",
                  "zh": "打鼓！"
                }
              ],
              "A1": [
                {
                  "en": "What song did you learn in music class today? Can you teach me?",
                  "zh": "今天音乐课学了什么歌？能教我吗？"
                },
                {
                  "en": "Music class is so fun — you get to sing, play instruments, and learn about rhythm.",
                  "zh": "音乐课太好玩了——唱歌、玩乐器、学节奏。"
                },
                {
                  "en": "Clapping along to the beat helps you feel the music in your whole body.",
                  "zh": "跟着节拍拍手帮你全身感受音乐。"
                }
              ],
              "A2": [
                {
                  "en": "Learning music develops parts of your brain that help with math, language, and creativity.",
                  "zh": "学音乐开发大脑中帮助数学、语言和创造力的部分。"
                },
                {
                  "en": "Music is a universal language — it connects people across all cultures.",
                  "zh": "音乐是通用语言——它连接所有文化的人们。"
                },
                {
                  "en": "The discipline of practicing an instrument teaches patience and perseverance.",
                  "zh": "练习乐器的纪律教会耐心和毅力。"
                }
              ],
              "B1": [
                {
                  "en": "Music education isn't just about notes and rhythms — it's about expressing the inexpressible.",
                  "zh": "音乐教育不只是音符和节奏——是表达不可言说之物。"
                },
                {
                  "en": "The ability to appreciate and create music enriches your life in ways that few other things can.",
                  "zh": "欣赏和创造音乐的能力以极少其他事物能及的方式丰富你的人生。"
                },
                {
                  "en": "Every culture in human history has made music — it's one of the things that makes us human.",
                  "zh": "人类历史上每种文化都创造音乐——这是使我们成为人类的东西之一。"
                }
              ]
            }
          },
          "pe_class": {
            "name": "体育课",
            "keywords": [
              "体育课",
              "跑步",
              "运动",
              "操场",
              "排队",
              "热身",
              "体育"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "PE time!",
                  "zh": "体育课时间！"
                },
                {
                  "en": "Run fast!",
                  "zh": "快跑！"
                },
                {
                  "en": "Stretch your arms!",
                  "zh": "伸伸胳膊！"
                },
                {
                  "en": "Line up!",
                  "zh": "排队！"
                }
              ],
              "A1": [
                {
                  "en": "What games did you play in PE class today? Did you have fun?",
                  "zh": "今天体育课玩了什么游戏？开心吗？"
                },
                {
                  "en": "PE class keeps your body strong and healthy — it's just as important as any other subject.",
                  "zh": "体育课让身体强壮健康——和其他课一样重要。"
                },
                {
                  "en": "Remember to drink water after PE — your body needs to rehydrate.",
                  "zh": "体育课后记得喝水——身体需要补充水分。"
                }
              ],
              "A2": [
                {
                  "en": "Physical education teaches teamwork, sportsmanship, and the joy of movement.",
                  "zh": "体育教育教会团队合作、体育精神和运动的快乐。"
                },
                {
                  "en": "The exercise habits you build now will keep you healthy for decades.",
                  "zh": "你现在养成的运动习惯会保持你几十年健康。"
                },
                {
                  "en": "Winning isn't everything in PE — trying your best and supporting your classmates matters more.",
                  "zh": "体育课上赢不是一切——尽力而为和支持同学更重要。"
                }
              ],
              "B1": [
                {
                  "en": "A sound mind in a sound body — the ancient Greeks understood this thousands of years ago.",
                  "zh": "健康的心灵寓于健康的身体——古希腊人几千年前就明白这一点。"
                },
                {
                  "en": "Physical literacy is just as important as reading literacy for a full and healthy life.",
                  "zh": "身体素养和阅读素养对充实健康的人生同样重要。"
                },
                {
                  "en": "The lessons of sportsmanship — grace in victory and dignity in defeat — are life lessons.",
                  "zh": "体育精神的课程——胜不骄败不馁——是人生课程。"
                }
              ]
            }
          }
        }
      },
      "social": {
        "name": "同伴社交",
        "keywords": [
          "朋友",
          "打招呼",
          "分享",
          "帮助",
          "冲突",
          "同学",
          "社交",
          "玩"
        ],
        "sub_scenes": {
          "greeting": {
            "name": "打招呼/问候",
            "keywords": [
              "打招呼",
              "问候",
              "你好",
              "介绍"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Say hello!",
                  "zh": "说你好！"
                },
                {
                  "en": "What's your name?",
                  "zh": "你叫什么名字？"
                },
                {
                  "en": "Nice to meet you!",
                  "zh": "很高兴见到你！"
                }
              ],
              "A1": [
                {
                  "en": "When you meet someone new, what do you say?",
                  "zh": "见到新朋友，你该说什么？"
                },
                {
                  "en": "A smile and a friendly 'hello' can make someone's day.",
                  "zh": "一个微笑和一句友好的'你好'能让别人开心一整天。"
                },
                {
                  "en": "Let's practice introducing yourself: 'Hi, I'm [name]. Nice to meet you!'",
                  "zh": "我们练习自我介绍吧：'你好，我叫[名字]，很高兴认识你！'"
                }
              ],
              "A2": [
                {
                  "en": "Good social skills start with simple things like making eye contact and smiling.",
                  "zh": "好的社交技能从简单的眼神交流和微笑开始。"
                }
              ],
              "B1": [
                {
                  "en": "First impressions matter, but it's consistency and kindness that build real friendships.",
                  "zh": "第一印象很重要，但持续的真诚和善良才能建立真正的友谊。"
                }
              ]
            }
          },
          "sharing": {
            "name": "分享/轮流/道歉",
            "keywords": [
              "分享",
              "轮流",
              "道歉",
              "和好",
              "吵架",
              "对不起"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Share your toys!",
                  "zh": "分享玩具！"
                },
                {
                  "en": "Your turn! My turn!",
                  "zh": "轮到你了！轮到我了！"
                },
                {
                  "en": "It's okay. Friends again!",
                  "zh": "没关系，又是朋友了！"
                }
              ],
              "A1": [
                {
                  "en": "It's nice to share. Your friend will be so happy!",
                  "zh": "分享是好事，你的朋友会很开心的！"
                },
                {
                  "en": "Let's take turns. You go first, then your friend.",
                  "zh": "我们轮流来，你先，然后你朋友。"
                },
                {
                  "en": "When you hurt someone's feelings, saying sorry is the right thing to do.",
                  "zh": "伤害了别人的感情，道歉是对的。"
                },
                {
                  "en": "Everyone makes mistakes. The important thing is to learn and make things right.",
                  "zh": "每个人都会犯错，重要的是学会并弥补。"
                }
              ],
              "A2": [
                {
                  "en": "Sharing doesn't mean giving away your things — it means letting others enjoy them too.",
                  "zh": "分享不意味着把东西送人——而是让别人也能享受。"
                },
                {
                  "en": "A sincere apology has three parts: say what you did wrong, say sorry, and try to do better.",
                  "zh": "真诚的道歉有三部分：说出做错了什么、说对不起、努力做得更好。"
                }
              ],
              "B1": [
                {
                  "en": "The ability to apologize sincerely and forgive genuinely are signs of emotional maturity.",
                  "zh": "真诚道歉和真心原谅的能力是情感成熟的标志。"
                }
              ]
            }
          },
          "make_friends": {
            "name": "交新朋友",
            "keywords": [
              "新朋友",
              "名字",
              "一起玩",
              "介绍",
              "认识",
              "朋友"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "New friend!",
                  "zh": "新朋友！"
                },
                {
                  "en": "What's your name?",
                  "zh": "你叫什么？"
                },
                {
                  "en": "Let's play!",
                  "zh": "一起玩！"
                },
                {
                  "en": "Let's play together!",
                  "zh": "一起玩吧！",
                  "keywords": [
                    "一起玩"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Did you make any new friends at school today? Tell me about them.",
                  "zh": "今天在学校交新朋友了吗？跟我说说他们。"
                },
                {
                  "en": "Making friends takes courage — just say hi and ask if they want to play.",
                  "zh": "交朋友需要勇气——说声嗨问问要不要一起玩。"
                },
                {
                  "en": "Everyone feels a little shy sometimes — your new friend might be feeling shy too.",
                  "zh": "每个人有时都会害羞——你的新朋友可能也在害羞。"
                }
              ],
              "A2": [
                {
                  "en": "Friendships are one of the most valuable things you'll build in school.",
                  "zh": "友谊是你在学校建立的最宝贵的东西之一。"
                },
                {
                  "en": "Being a good friend means listening, sharing, and being kind even when it's hard.",
                  "zh": "做好朋友意味着倾听、分享、在困难时也保持善良。"
                },
                {
                  "en": "The friends you make now might be in your life for decades — treasure these connections.",
                  "zh": "你现在交的朋友可能会陪伴你几十年——珍惜这些连接。"
                }
              ],
              "B1": [
                {
                  "en": "The ability to connect with new people is one of the most important skills for success and happiness.",
                  "zh": "与新人建立连接的能力是成功和幸福最重要的技能之一。"
                },
                {
                  "en": "Quality friendships are built on trust, respect, and shared experiences over time.",
                  "zh": "优质友谊建立在信任、尊重和长期共同经历之上。"
                },
                {
                  "en": "Every close friend was once a stranger — the courage to say hello can change your life.",
                  "zh": "每个亲密朋友都曾是陌生人——说嗨的勇气可能改变你的人生。"
                }
              ]
            }
          },
          "help_others": {
            "name": "帮助同学",
            "keywords": [
              "帮助",
              "帮忙",
              "借",
              "谢谢",
              "不用谢",
              "同学"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "I'll help you!",
                  "zh": "我帮你！"
                },
                {
                  "en": "Here you go!",
                  "zh": "给你！"
                },
                {
                  "en": "You're welcome!",
                  "zh": "不客气！"
                },
                {
                  "en": "Team work!",
                  "zh": "一起做！"
                }
              ],
              "A1": [
                {
                  "en": "Did you help any classmates today? Helping others feels good, doesn't it?",
                  "zh": "今天帮助同学了吗？帮助别人感觉很好对吧？"
                },
                {
                  "en": "If someone drops their things, helping them pick up is a kind thing to do.",
                  "zh": "如果有人东西掉了，帮忙捡起来是善良的举动。"
                },
                {
                  "en": "Being helpful makes you a leader that others look up to.",
                  "zh": "乐于助人让你成为别人尊敬的领导者。"
                }
              ],
              "A2": [
                {
                  "en": "The best leaders are those who serve others — helping classmates is leadership practice.",
                  "zh": "最好的领导者是服务他人的人——帮助同学是领导力练习。"
                },
                {
                  "en": "Small acts of kindness create ripples that spread far beyond what you can see.",
                  "zh": "小小的善举创造的涟漪远比你看到的传播得更远。"
                },
                {
                  "en": "When you help someone learn, you actually learn the material better yourself.",
                  "zh": "帮别人学习时，你自己其实学得更好。"
                }
              ],
              "B1": [
                {
                  "en": "A life of contribution and service to others is one of the most meaningful lives you can lead.",
                  "zh": "贡献和服务他人的一生是你能过的最有意义的人生之一。"
                },
                {
                  "en": "The habit of looking for ways to help will open doors and build relationships throughout your life.",
                  "zh": "寻找帮助方式��习惯会在你整个人生中打开大门、建立关系。"
                },
                {
                  "en": "True success isn't measured by what you achieve alone, but by how many people you lift up along the way.",
                  "zh": "真正的成功不是用你独自取得的成就衡量，而是用你一路上帮助了多少人。"
                }
              ]
            }
          },
          "handle_conflict": {
            "name": "应对冲突",
            "keywords": [
              "冲突",
              "抢",
              "打人",
              "告老师",
              "解决",
              "生气",
              "和好"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Use your words!",
                  "zh": "用话说！"
                },
                {
                  "en": "No hitting!",
                  "zh": "不打人！"
                },
                {
                  "en": "Say sorry!",
                  "zh": "说对不起！"
                },
                {
                  "en": "Friends again!",
                  "zh": "又是朋友了！"
                }
              ],
              "A1": [
                {
                  "en": "If someone upsets you at school, use your words to tell them how you feel.",
                  "zh": "如果学校有人让你不开心，用话说出你的感受。"
                },
                {
                  "en": "Hitting never solves problems — talking and listening does.",
                  "zh": "打人永远解决不了问题——说话和倾听可以。"
                },
                {
                  "en": "It's okay to be angry, but it's not okay to hurt others because you're angry.",
                  "zh": "生气没关系，但因为生气伤害别人是不行的。"
                }
              ],
              "A2": [
                {
                  "en": "Conflict is a normal part of relationships — learning to handle it well is a superpower.",
                  "zh": "冲突是关系中的正常部分——学会处理好是一种超能力。"
                },
                {
                  "en": "The strongest people aren't those who never get angry — they're the ones who control their anger.",
                  "zh": "最强大的人不是从不生气的人——是能控制愤怒的人。"
                },
                {
                  "en": "Every conflict is an opportunity to understand someone better and grow closer.",
                  "zh": "每次冲突都是更好理解某人、变得更亲近的机会。"
                }
              ],
              "B1": [
                {
                  "en": "Emotional intelligence — the ability to manage your emotions and understand others — predicts success better than IQ.",
                  "zh": "情商——管理情绪和理解他人的能力——比智商更能预测成功。"
                },
                {
                  "en": "The conflicts you learn to navigate now prepare you for the complex relationships of adult life.",
                  "zh": "你现在学会处理的冲突为成年后复杂的关系做好准备。"
                },
                {
                  "en": "Peace isn't the absence of conflict — it's the ability to resolve conflict with respect and empathy.",
                  "zh": "和平不是没有冲突——是用尊重和同理心解决冲突的能力。"
                }
              ]
            }
          }
        }
      },
      "after_school": {
        "name": "课后活动",
        "keywords": [
          "放学",
          "兴趣班",
          "同学家",
          "托管",
          "户外",
          "课后",
          "活动"
        ],
        "sub_scenes": {
          "come_home": {
            "name": "放学回家",
            "keywords": [
              "放学",
              "回家",
              "接"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "How was school?",
                  "zh": "学校怎么样？"
                },
                {
                  "en": "Show me your bag.",
                  "zh": "给我看看你的书包。"
                },
                {
                  "en": "Let's go home now.",
                  "zh": "我们回家吧。"
                },
                {
                  "en": "Did you play today?",
                  "zh": "今天玩了吗？"
                }
              ],
              "A1": [
                {
                  "en": "How was your day at school? Tell me everything!",
                  "zh": "今天在学校过得怎么样？都告诉我！"
                },
                {
                  "en": "Did you have fun with your friends today?",
                  "zh": "今天跟朋友们玩得开心吗？"
                },
                {
                  "en": "Let me see what you made at school today!",
                  "zh": "让我看看你今天在学校做了什么！"
                },
                {
                  "en": "Who did you sit with at lunch today?",
                  "zh": "今天午饭跟谁一起坐的？"
                }
              ],
              "A2": [
                {
                  "en": "I love hearing about your day. What was the best part and the hardest part?",
                  "zh": "我喜欢听你讲今天的事，最开心和最难的分别是什么？"
                },
                {
                  "en": "Let's have a snack and chat about your day before we start homework.",
                  "zh": "先吃点零食聊聊今天的事，再做作业。"
                }
              ],
              "B1": [
                {
                  "en": "Those few minutes after school when you share your day are some of my favorite moments.",
                  "zh": "放学后你分享一天的那几分钟，是我最喜欢的时光之一。"
                }
              ]
            }
          },
          "extracurricular": {
            "name": "兴趣班",
            "keywords": [
              "兴趣班",
              "课外班",
              "补习",
              "特长",
              "钢琴",
              "舞蹈",
              "画画班"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Time for your class!",
                  "zh": "上课时间到！"
                },
                {
                  "en": "Have fun learning!",
                  "zh": "学得开心！"
                }
              ],
              "A1": [
                {
                  "en": "Are you excited for your art class today?",
                  "zh": "今天的美术课期待吗？"
                },
                {
                  "en": "What did you learn in your piano lesson today?",
                  "zh": "今天钢琴课学了什么？"
                },
                {
                  "en": "Practice makes progress! Keep up the good work.",
                  "zh": "练习就会有进步！继续加油。"
                }
              ],
              "A2": [
                {
                  "en": "Extracurricular activities are great for discovering what you're passionate about.",
                  "zh": "课外活动是发现你热爱什么的好方式。"
                },
                {
                  "en": "It's okay if you want to try different activities — that's how you find what you love.",
                  "zh": "想尝试不同活动没关系——这样才能找到你真正喜欢的。"
                }
              ],
              "B1": [
                {
                  "en": "The discipline you learn from regular practice applies to everything in life.",
                  "zh": "从定期练习中学到的自律适用于生活中的一切。"
                }
              ]
            }
          },
          "playdate": {
            "name": "去同学家玩",
            "keywords": [
              "同学家",
              "去玩",
              "做客",
              "礼貌",
              "敲门",
              "邀请"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Playdate!",
                  "zh": "去同学家玩！"
                },
                {
                  "en": "Knock knock!",
                  "zh": "咚咚咚！"
                },
                {
                  "en": "Thank you for having me!",
                  "zh": "谢谢招待！"
                },
                {
                  "en": "Time to go home!",
                  "zh": "该回家了！"
                }
              ],
              "A1": [
                {
                  "en": "You're going to your friend's house today — remember to be polite and say please and thank you.",
                  "zh": "今天去同学家玩——记得有礼貌说请和谢谢。"
                },
                {
                  "en": "When you're a guest, follow their family's rules and help clean up toys before you leave.",
                  "zh": "做客时要遵守他们家的规矩，走之前帮忙收玩具。"
                },
                {
                  "en": "Having playdates is a great way to build friendships outside of school.",
                  "zh": "去同学家玩是在校外建立友谊的好方式。"
                }
              ],
              "A2": [
                {
                  "en": "Being a good guest is a skill that will serve you well throughout your life.",
                  "zh": "做个好客人是让你终身受益的技能。"
                },
                {
                  "en": "Every home has different rules — adapting shows respect and maturity.",
                  "zh": "每家有不同的规矩——适应显示尊重和成熟。"
                },
                {
                  "en": "The friendships you build through playdates often become the strongest ones.",
                  "zh": "通过去同学家玩建立的友谊往往是最牢固的。"
                }
              ],
              "B1": [
                {
                  "en": "Social skills like being a gracious guest are just as important as academic skills.",
                  "zh": "做优雅客人的社交技能和学术技能一样重要。"
                },
                {
                  "en": "The ability to feel comfortable in different homes and cultures is a mark of a worldly person.",
                  "zh": "能在不同家庭和文化中感到自在是见过世面的人的标志。"
                },
                {
                  "en": "Every invitation to someone's home is a gift of trust — honor it with your best behavior.",
                  "zh": "每次去别人家的邀请都是信任的礼物——用最好的行为来尊重它。"
                }
              ]
            }
          },
          "aftercare": {
            "name": "课后托管",
            "keywords": [
              "托管",
              "等",
              "做作业",
              "老师",
              "接",
              "晚托"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Wait for me!",
                  "zh": "等我！"
                },
                {
                  "en": "Do your homework!",
                  "zh": "做作业！"
                },
                {
                  "en": "Be good!",
                  "zh": "要乖！"
                },
                {
                  "en": "I'll pick you up!",
                  "zh": "我来接你！"
                }
              ],
              "A1": [
                {
                  "en": "You'll stay at after-school care today — I'll pick you up at five.",
                  "zh": "今天你在课后托管——我五点来接你。"
                },
                {
                  "en": "Use your time at aftercare to finish your homework so we have more time together later.",
                  "zh": "在托管时间把作业做完，这样回家后我们有更多时间在一起。"
                },
                {
                  "en": "The teachers at aftercare are there to help you — don't be afraid to ask.",
                  "zh": "托管老师在那里帮你——不要害怕问。"
                }
              ],
              "A2": [
                {
                  "en": "After-school programs give you a chance to socialize and learn in a relaxed environment.",
                  "zh": "课后托管让你有机会在轻松环境中社交和学习。"
                },
                {
                  "en": "Being independent at aftercare is great practice for managing your own time.",
                  "zh": "在托管独立是管理自己时间的很好练习。"
                },
                {
                  "en": "I know you miss me, and I miss you too — the hours apart make our time together even sweeter.",
                  "zh": "我知道你想我，我也想你——分开的时光让我们在一起时更甜蜜。"
                }
              ],
              "B1": [
                {
                  "en": "Learning to thrive in different environments builds adaptability — one of life's most valuable traits.",
                  "zh": "学会在不同环境中茁壮成长培养适应性——人生最有价值的特质之一。"
                },
                {
                  "en": "The independence you develop in aftercare is preparing you for the greater independence of adulthood.",
                  "zh": "在托管中培养的独立性正在为你成年后更大的独立做准备。"
                },
                {
                  "en": "Every moment apart is also a moment of growth — for both of us.",
                  "zh": "每一刻分离也是成长的时刻——对我们俩都是。"
                }
              ]
            }
          },
          "playground_games": {
            "name": "户外游戏",
            "keywords": [
              "操场",
              "游戏",
              "玩",
              "追",
              "跑",
              "户外",
              "课间游戏"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's play outside!",
                  "zh": "出去玩！"
                },
                {
                  "en": "Tag, you're it!",
                  "zh": "抓到你啦！"
                },
                {
                  "en": "Hide and seek!",
                  "zh": "捉迷藏！"
                },
                {
                  "en": "Swing me higher!",
                  "zh": "推高点！"
                }
              ],
              "A1": [
                {
                  "en": "What games did you play on the playground after school today?",
                  "zh": "今天放学后在操场玩了什么游戏？"
                },
                {
                  "en": "Playing outside after school is a great way to burn off energy and have fun.",
                  "zh": "放学后在户外玩是消耗精力享受乐趣的好方式。"
                },
                {
                  "en": "Running around with friends in the fresh air — that's what childhood is all about.",
                  "zh": "在新鲜空气中和朋友跑来跑去——这就是童年的意义。"
                }
              ],
              "A2": [
                {
                  "en": "Unstructured outdoor play is essential for creativity, social skills, and physical health.",
                  "zh": "无组织的户外游戏对创造力、社交技能和身体健康至关重要。"
                },
                {
                  "en": "Some of the best learning happens on the playground, not in the classroom.",
                  "zh": "最好的学习有些发生在操场上，不是教室里。"
                },
                {
                  "en": "The games you invent with friends are just as valuable as the ones with rules.",
                  "zh": "你和朋友发明的游戏和有规则的游戏一样有价值。"
                }
              ],
              "B1": [
                {
                  "en": "Free play is the work of childhood — through it, children learn to navigate the social world.",
                  "zh": "自由玩耍是童年的工作——通过它，孩子学会在社交世界中导航。"
                },
                {
                  "en": "The creativity sparked on the playground carries over into every other area of life.",
                  "zh": "操场上激发的创造力会延续到生活的每个其他领域。"
                },
                {
                  "en": "Never underestimate the value of running around with friends — it builds bodies, minds, and bonds.",
                  "zh": "永远不要低估和朋友跑来跑去的价值——它塑造身体、心灵和纽带。"
                }
              ]
            }
          }
        }
      },
      "emotions": {
        "name": "情绪表达",
        "keywords": [
          "情绪",
          "开心",
          "难过",
          "谢谢",
          "需求",
          "赞美",
          "挫折",
          "表达",
          "感受"
        ],
        "sub_scenes": {
          "feelings": {
            "name": "表达情绪",
            "keywords": [
              "开心",
              "难过",
              "生气",
              "害怕",
              "哭",
              "笑"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Are you happy?",
                  "zh": "你开心吗？"
                },
                {
                  "en": "It's okay to cry.",
                  "zh": "哭没关系。"
                },
                {
                  "en": "Don't be sad. I'm here.",
                  "zh": "别难过，我在呢。"
                },
                {
                  "en": "I love your smile!",
                  "zh": "我喜欢你的笑容！"
                }
              ],
              "A1": [
                {
                  "en": "How are you feeling right now? Happy? Sad? Tired?",
                  "zh": "你现在感觉怎么样？开心？难过？累了？"
                },
                {
                  "en": "It's okay to feel angry sometimes. Let's talk about what's bothering you.",
                  "zh": "有时候生气是正常的，我们聊聊什么在困扰你。"
                },
                {
                  "en": "I can see you're upset. Do you want a hug?",
                  "zh": "我看得出你不开心，想要抱抱吗？"
                },
                {
                  "en": "Using words to tell me how you feel is always better than crying or shouting.",
                  "zh": "用语言告诉我你的感受，永远比哭或喊好。"
                }
              ],
              "A2": [
                {
                  "en": "All feelings are okay — it's what we do with them that matters.",
                  "zh": "所有情绪都是可以的——重要的是我们如何处理它们。"
                },
                {
                  "en": "When you're feeling overwhelmed, try taking three deep breaths. It really helps.",
                  "zh": "觉得压力大的时候，试试深呼吸三次，真的很管用。"
                }
              ],
              "B1": [
                {
                  "en": "Emotional intelligence — understanding and managing your feelings — is just as important as academic intelligence.",
                  "zh": "情商——理解和管理自己的情绪——和学术智力同等重要。"
                },
                {
                  "en": "I want you to know that you can always talk to me about anything, no matter how big or small.",
                  "zh": "我想让你知道，不管大事小事，你随时都可以跟我聊。"
                }
              ]
            }
          },
          "gratitude": {
            "name": "说谢谢/对不起",
            "keywords": [
              "谢谢",
              "对不起",
              "感谢",
              "道歉"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Say thank you!",
                  "zh": "说谢谢！"
                },
                {
                  "en": "Say sorry.",
                  "zh": "说对不起。"
                }
              ],
              "A1": [
                {
                  "en": "What do you say when someone gives you something?",
                  "zh": "别人给你东西，你该说什么？"
                },
                {
                  "en": "Thank you for being so helpful today!",
                  "zh": "谢谢你今天这么帮忙！"
                },
                {
                  "en": "When you make a mistake, saying sorry shows you're brave and honest.",
                  "zh": "犯了错，说对不起说明你勇敢又诚实。"
                }
              ],
              "A2": [
                {
                  "en": "Gratitude is like a muscle — the more you use it, the stronger it gets.",
                  "zh": "感恩就像肌肉——越用越强。"
                },
                {
                  "en": "A heartfelt 'thank you' can brighten someone's entire day.",
                  "zh": "一句真心'谢谢'能点亮别人一整天。"
                }
              ],
              "B1": [
                {
                  "en": "Practicing gratitude regularly has been shown to increase happiness and well-being.",
                  "zh": "研究表明，经常练习感恩能增加幸福感和身心健康。"
                }
              ]
            }
          },
          "express_needs": {
            "name": "表达需求",
            "keywords": [
              "想要",
              "需要",
              "帮忙",
              "渴",
              "饿",
              "累",
              "说"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "I want...",
                  "zh": "我想要……"
                },
                {
                  "en": "Help me!",
                  "zh": "帮帮我！"
                },
                {
                  "en": "I'm thirsty!",
                  "zh": "我渴了！"
                },
                {
                  "en": "I'm tired!",
                  "zh": "我累了！"
                }
              ],
              "A1": [
                {
                  "en": "It's important to tell me what you need — I can't help if I don't know.",
                  "zh": "告诉我你需要什么很重要——我不知道的话没法帮你。"
                },
                {
                  "en": "Use your words to express your needs instead of crying or whining.",
                  "zh": "用话说出你的需求，而不是哭或撒娇。"
                },
                {
                  "en": "I'm always here to listen — whatever you need, just ask.",
                  "zh": "我永远在听——不管你需要什么，说出来。"
                }
              ],
              "A2": [
                {
                  "en": "Being able to clearly express your needs is a skill that will benefit every relationship in your life.",
                  "zh": "能清楚表达需求是一项让你生命中每段关系受益的技能。"
                },
                {
                  "en": "No one can read your mind — learning to communicate your needs is essential for happiness.",
                  "zh": "没人能读你的心——学会表达需求对幸福至关重要。"
                },
                {
                  "en": "The courage to ask for help is a sign of strength, not weakness.",
                  "zh": "求助的勇气是力量的标志，不是软弱。"
                }
              ],
              "B1": [
                {
                  "en": "Self-advocacy — speaking up for your own needs — is one of the most important life skills you can develop.",
                  "zh": "自我倡导——为自己的需求发声——是你能培养的最重要生活技能之一。"
                },
                {
                  "en": "The ability to articulate what you need clearly and calmly is a cornerstone of emotional intelligence.",
                  "zh": "清晰冷静地表达需求的能力是情商的基石。"
                },
                {
                  "en": "People who can express their needs effectively build stronger, healthier relationships throughout life.",
                  "zh": "能有效表达需求的人一生中建立更强大更健康的关系。"
                }
              ]
            }
          },
          "compliment": {
            "name": "赞美他人",
            "keywords": [
              "真棒",
              "好看",
              "厉害",
              "喜欢",
              "羡慕",
              "赞美",
              "夸奖"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "You're great!",
                  "zh": "你真棒！"
                },
                {
                  "en": "I like your drawing!",
                  "zh": "我喜欢你的画！"
                },
                {
                  "en": "So cool!",
                  "zh": "好酷！"
                },
                {
                  "en": "Nice job!",
                  "zh": "干得好！"
                }
              ],
              "A1": [
                {
                  "en": "Did you say something nice to someone today? Compliments make people feel happy.",
                  "zh": "今天对别人说好话了吗？赞美让人开心。"
                },
                {
                  "en": "When you notice something good about someone, tell them — it might make their whole day.",
                  "zh": "注意到别人的优点时告诉他们——可能改变他们一整天。"
                },
                {
                  "en": "Giving genuine compliments is a gift that costs nothing but means everything.",
                  "zh": "真诚赞美是不花钱但意义重大的礼物。"
                }
              ],
              "A2": [
                {
                  "en": "People who lift others up are the ones who get lifted up in return.",
                  "zh": "抬举别人的人也会被抬举。"
                },
                {
                  "en": "Learning to see the good in others is a skill that makes you happier too.",
                  "zh": "学会看到别人的优点也是一项让你更快乐的技能。"
                },
                {
                  "en": "A sincere compliment creates a moment of connection between two people.",
                  "zh": "真诚的赞美在两人之间创造连接的瞬间。"
                }
              ],
              "B1": [
                {
                  "en": "The ability to genuinely celebrate others' success is a mark of true confidence and character.",
                  "zh": "真诚为他人成功喝彩的能力是真正自信和品格的标志。"
                },
                {
                  "en": "In a world that can be critical, being someone who notices and voices the good is a gift.",
                  "zh": "在一个可能充满批评的世界里，成为一个注意并说出美好的人是一份礼物。"
                },
                {
                  "en": "The words you speak to others become the voice they hear in their head — choose them wisely.",
                  "zh": "你对别人说的话成为他们脑海中听到的声音——明智选择。"
                }
              ]
            }
          },
          "face_setbacks": {
            "name": "面对挫折",
            "keywords": [
              "失败",
              "没关系",
              "再来",
              "加油",
              "试试",
              "挫折",
              "坚持"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Try again!",
                  "zh": "再试一次！"
                },
                {
                  "en": "You can do it!",
                  "zh": "你能做到！"
                },
                {
                  "en": "Don't give up!",
                  "zh": "别放弃！"
                },
                {
                  "en": "Almost there!",
                  "zh": "快成功了！"
                }
              ],
              "A1": [
                {
                  "en": "It's okay to fail — everyone fails sometimes. What matters is that you try again.",
                  "zh": "失败没关系——每个人都会失败。重要的是你再试一次。"
                },
                {
                  "en": "I'm proud of you for trying, not just for succeeding.",
                  "zh": "我为你尝试而骄傲，不只是为成功。"
                },
                {
                  "en": "Every mistake is a chance to learn something new.",
                  "zh": "每个错误都是学新东西的机会。"
                }
              ],
              "A2": [
                {
                  "en": "Resilience — the ability to bounce back from failure — is more important than talent.",
                  "zh": "韧性——从失败中反弹的能力——比天赋更重要。"
                },
                {
                  "en": "The most successful people in history failed many times before they succeeded.",
                  "zh": "历史上最成功的人在成功前都失败过很多次。"
                },
                {
                  "en": "When something is hard, that means you're growing — easy things don't make you stronger.",
                  "zh": "当事情很难时，意味着你在成长——容易的事不会让你变强。"
                }
              ],
              "B1": [
                {
                  "en": "Grit — passion and perseverance for long-term goals — is the single biggest predictor of success.",
                  "zh": "毅力——对长期目标的热情和坚持——是成功最大的单一预测因素。"
                },
                {
                  "en": "The way you handle failure says more about your character than the way you handle success.",
                  "zh": "你处理失败的方式比你处理成功的方式更能说明你的品格。"
                },
                {
                  "en": "Every champion was once a beginner who refused to give up.",
                  "zh": "每个冠军都曾是拒绝放弃的初学者。"
                }
              ]
            }
          }
        }
      }
    }
  },
  {
    "id": "health",
    "name": "健康与就医",
    "name_en": "Health & Care",
    "icon": "🏥",
    "categories": {
      "body_parts": {
        "name": "身体部位",
        "keywords": [
          "身体",
          "五官",
          "感觉",
          "左右",
          "动作",
          "变化",
          "成长",
          "认识"
        ],
        "sub_scenes": {
          "learn_body": {
            "name": "认识身体",
            "keywords": [
              "身体",
              "五官",
              "部位"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Where is your nose?",
                  "zh": "你的鼻子在哪？"
                },
                {
                  "en": "Touch your head!",
                  "zh": "摸摸你的头！"
                },
                {
                  "en": "Point to your eyes!",
                  "zh": "指出你的眼睛！"
                },
                {
                  "en": "Show me your hands!",
                  "zh": "给我看看你的手！"
                },
                {
                  "en": "Wiggle your fingers!",
                  "zh": "动动手指！"
                }
              ],
              "A1": [
                {
                  "en": "Can you name all the parts of your face? Eyes, nose, mouth, ears...",
                  "zh": "你能说出脸上所有部位吗？眼睛、鼻子、嘴巴、耳朵……"
                },
                {
                  "en": "Your heart is inside your chest. Can you feel it beating?",
                  "zh": "你的心脏在胸腔里，能感觉到它在跳吗？"
                },
                {
                  "en": "How many fingers do you have? Let's count them together!",
                  "zh": "你有几根手指？我们一起数！"
                }
              ],
              "A2": [
                {
                  "en": "Your body is amazing — every part has a special job to do.",
                  "zh": "你的身体太神奇了——每个部位都有特殊的工作。"
                },
                {
                  "en": "Did you know your brain controls everything your body does?",
                  "zh": "你知道吗，你的大脑控制着身体做的一切？"
                }
              ],
              "B1": [
                {
                  "en": "Understanding how your body works helps you take better care of it.",
                  "zh": "了解身体如何运作，能帮你更好地照顾它。"
                }
              ]
            }
          },
          "five_senses": {
            "name": "五官感觉",
            "keywords": [
              "看",
              "听",
              "闻",
              "尝",
              "摸",
              "感觉",
              "五感"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "I see you!",
                  "zh": "我看到你了！"
                },
                {
                  "en": "Listen!",
                  "zh": "听！"
                },
                {
                  "en": "Smell this!",
                  "zh": "闻闻这个！"
                },
                {
                  "en": "Touch it!",
                  "zh": "摸摸！"
                }
              ],
              "A1": [
                {
                  "en": "Our five senses help us explore the world — seeing, hearing, smelling, tasting, and touching.",
                  "zh": "五种感官帮我们探索世界——看、听、闻、尝、摸。"
                },
                {
                  "en": "Close your eyes and tell me what you hear — how many different sounds?",
                  "zh": "闭上眼睛告诉我你听到了什么——有多少种不同的声音？"
                },
                {
                  "en": "Let's play a game: I'll give you something to smell, and you guess what it is!",
                  "zh": "我们玩个游戏：我给你闻个东西，你猜是什么！"
                }
              ],
              "A2": [
                {
                  "en": "Your senses are like superpowers — they gather information about the world around you.",
                  "zh": "你的感官像超能力——它们收集周围世界的信息。"
                },
                {
                  "en": "Scientists study how our brains process sensory information — it's incredibly complex.",
                  "zh": "科学家研究大脑如何处理感官信息——极其复杂。"
                },
                {
                  "en": "Being mindful of your senses helps you appreciate the richness of everyday experiences.",
                  "zh": "留意感官帮你欣赏日常体验的丰富性。"
                }
              ],
              "B1": [
                {
                  "en": "Our senses are the interface between our inner world and the external universe — they define our reality.",
                  "zh": "感官是我们内在世界和外部宇宙之间的界面——它们定义我们的现实。"
                },
                {
                  "en": "Developing sensory awareness is a form of mindfulness that enriches every moment.",
                  "zh": "培养感官意识是一种丰富每一刻的正念形式。"
                },
                {
                  "en": "The five senses are just the beginning — scientists now recognize many more, like balance and body awareness.",
                  "zh": "五种感官只是开始——科学家现在认识到更多，如平衡感和身体意识。"
                }
              ]
            }
          },
          "left_right": {
            "name": "左右方向",
            "keywords": [
              "左",
              "右",
              "左手",
              "右手",
              "左脚",
              "右脚",
              "方向"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Left hand!",
                  "zh": "左手！"
                },
                {
                  "en": "Right foot!",
                  "zh": "右脚！"
                },
                {
                  "en": "Turn left!",
                  "zh": "向左转！"
                },
                {
                  "en": "This way!",
                  "zh": "这边！"
                }
              ],
              "A1": [
                {
                  "en": "Let's practice left and right — raise your left hand. Now your right foot!",
                  "zh": "我们练习左右——举起左手。现在抬右脚！"
                },
                {
                  "en": "Knowing left from right helps you follow directions and read maps.",
                  "zh": "分清左右帮你遵循方向和看地图。"
                },
                {
                  "en": "Here's a trick: make an L with your left hand — the hand that makes the L is your left!",
                  "zh": "有个技巧：用左手比L——比出L的那只就是左手！"
                }
              ],
              "A2": [
                {
                  "en": "Spatial awareness — knowing where things are in relation to you — develops with practice.",
                  "zh": "空间意识——知道东西相对于你的位置——随练习发展。"
                },
                {
                  "en": "Left and right are concepts we use constantly without thinking — but they took time to learn.",
                  "zh": "左右是我们不假思索持续使用的概念——但学会它们花了时间。"
                },
                {
                  "en": "Understanding directions is the first step toward reading maps and navigating the world.",
                  "zh": "理解方向是看地图和在世界中导航的第一步。"
                }
              ],
              "B1": [
                {
                  "en": "Directional awareness is foundational to geometry, navigation, and even dance and sports.",
                  "zh": "方向意识是几何、导航甚至舞蹈和运动的基础。"
                },
                {
                  "en": "The simple concepts of left and right underpin complex fields like physics and engineering.",
                  "zh": "左右这些简单概念支撑着物理和工程等复杂领域。"
                },
                {
                  "en": "Mastering spatial relationships in childhood opens doors to STEM fields later in life.",
                  "zh": "童年掌握空间关系为日后STEM领域打开大门。"
                }
              ]
            }
          },
          "body_movements": {
            "name": "身体动作",
            "keywords": [
              "跳",
              "跑",
              "走",
              "蹲",
              "转",
              "弯腰",
              "动作"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Jump!",
                  "zh": "跳！"
                },
                {
                  "en": "Run!",
                  "zh": "跑！"
                },
                {
                  "en": "Spin around!",
                  "zh": "转圈！"
                },
                {
                  "en": "Touch your toes!",
                  "zh": "摸脚趾！"
                }
              ],
              "A1": [
                {
                  "en": "Let's move our bodies — can you hop on one foot? Now try the other!",
                  "zh": "我们活动身体——能单脚跳吗？试试另一只！"
                },
                {
                  "en": "Your body can do so many amazing things — stretch, bend, twist, and balance.",
                  "zh": "你的身体能做很多了不起的事——伸展、弯曲、扭转、平衡。"
                },
                {
                  "en": "Moving your body every day keeps your muscles strong and your heart healthy.",
                  "zh": "每天活动身体让肌肉强壮心脏健康。"
                }
              ],
              "A2": [
                {
                  "en": "Understanding how your body moves helps you excel in sports, dance, and everyday activities.",
                  "zh": "理解身体如何运动帮你在体育、舞蹈和日常活动中表现出色。"
                },
                {
                  "en": "Every movement you make involves dozens of muscles working together in perfect coordination.",
                  "zh": "你的每个动作都涉及几十块肌肉完美协调工作。"
                },
                {
                  "en": "The joy of movement is one of life's simplest and most accessible pleasures.",
                  "zh": "运动的快乐是生活中最简单最容易获得的快乐之一。"
                }
              ],
              "B1": [
                {
                  "en": "Kinesthetic intelligence — body awareness — is one of the multiple intelligences that make each person unique.",
                  "zh": "动觉智能——身体意识——是使每个人独特��多元智能之一。"
                },
                {
                  "en": "The human body is capable of extraordinary feats — from ballet to marathon running to brain surgery.",
                  "zh": "人体能够完成非凡壮举——从芭蕾到马拉松到脑外科手术。"
                },
                {
                  "en": "Respecting what your body can do is the foundation of a positive relationship with physical activity.",
                  "zh": "尊重身体的能力是与身体活动建立积极关系的基础。"
                }
              ]
            }
          },
          "growing_up": {
            "name": "身体变化",
            "keywords": [
              "长高",
              "长大",
              "牙齿",
              "掉牙",
              "换牙",
              "成长",
              "变化"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "You're so tall!",
                  "zh": "你好高！"
                },
                {
                  "en": "Wiggly tooth!",
                  "zh": "牙齿松了！"
                },
                {
                  "en": "Growing up!",
                  "zh": "长大了！"
                },
                {
                  "en": "New tooth!",
                  "zh": "新牙！"
                }
              ],
              "A1": [
                {
                  "en": "Look how much you've grown! Let's measure your height on the wall.",
                  "zh": "看你长多高了！我们在墙上量量身高。"
                },
                {
                  "en": "Losing baby teeth means you're growing up — the tooth fairy will be excited!",
                  "zh": "掉乳牙说明你在长大——牙仙子会很兴奋！"
                },
                {
                  "en": "Your body is changing every day — that's how you become bigger and stronger.",
                  "zh": "你的身体每天都在变化——这样你才能变得更大更强。"
                }
              ],
              "A2": [
                {
                  "en": "Growing up is an amazing journey — your body knows exactly what to do.",
                  "zh": "成长是奇妙的旅程——你的身体知道该做什么。"
                },
                {
                  "en": "The changes in your body are signs that you're healthy and developing just as you should.",
                  "zh": "身体的变化是健康和正常发育的标志。"
                },
                {
                  "en": "Every growth spurt, every new tooth, is a milestone worth celebrating.",
                  "zh": "每次猛长期、每颗新牙都是值得庆祝的里程碑。"
                }
              ],
              "B1": [
                {
                  "en": "Puberty and growth are natural processes that every human goes through — there's nothing to be embarrassed about.",
                  "zh": "青春期和成长是每个人经历的自然过程——没什么好尴尬的。"
                },
                {
                  "en": "Understanding your changing body empowers you to take good care of yourself during these important years.",
                  "zh": "理解变化中的身体让你在这些重要岁月中好好照顾自己。"
                },
                {
                  "en": "The body you're growing into will carry you through a lifetime of adventures — treat it with respect.",
                  "zh": "你正在长成的身体将承载你一生的冒险——尊重它。"
                }
              ]
            }
          }
        }
      },
      "medical": {
        "name": "生病就医",
        "keywords": [
          "看病",
          "医生",
          "吃药",
          "打针",
          "牙医",
          "感冒",
          "受伤",
          "医院"
        ],
        "sub_scenes": {
          "see_doctor": {
            "name": "看医生/体检",
            "keywords": [
              "看病",
              "医生",
              "体检",
              "医院",
              "诊所"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's see the doctor!",
                  "zh": "我们去看医生！"
                },
                {
                  "en": "Open your mouth: ahh!",
                  "zh": "张开嘴：啊——"
                },
                {
                  "en": "You are so brave!",
                  "zh": "你真勇敢！"
                },
                {
                  "en": "It's okay, don't cry.",
                  "zh": "没事，别哭。"
                },
                {
                  "en": "All done! Good job!",
                  "zh": "好了！真棒！"
                }
              ],
              "A1": [
                {
                  "en": "We're going to see the doctor for a check-up. Nothing to worry about.",
                  "zh": "我们去看医生做个检查，没什么好担心的。"
                },
                {
                  "en": "The doctor just wants to make sure you're healthy and strong.",
                  "zh": "医生只是想确认你健康强壮。"
                },
                {
                  "en": "Can you tell the doctor where it hurts?",
                  "zh": "你能告诉医生哪里疼吗？"
                },
                {
                  "en": "It's okay to feel nervous. I'm right here with you.",
                  "zh": "紧张是正常的，我就在你身边。"
                }
              ],
              "A2": [
                {
                  "en": "This is just a routine check-up. The doctor will measure your height and weight.",
                  "zh": "这只是常规体检，医生会量一下你的身高体重。"
                },
                {
                  "en": "If you're feeling nervous, you can hold my hand the whole time.",
                  "zh": "如果你紧张，可以一直握着我的手。"
                },
                {
                  "en": "Prevention is better than cure — that's why we do regular check-ups.",
                  "zh": "预防胜于治疗——这就是为什么我们要定期体检。"
                }
              ],
              "B1": [
                {
                  "en": "Regular check-ups are like maintenance for your body — they catch problems before they become serious.",
                  "zh": "定期体检就像身体的保养——在问题变严重之前发现它。"
                },
                {
                  "en": "The doctor is your ally, not someone to be afraid of. They're here to help you.",
                  "zh": "医生是你的盟友，不是该怕的人。他们是来帮你的。"
                }
              ]
            }
          },
          "medicine": {
            "name": "吃药/打针",
            "keywords": [
              "吃药",
              "打针",
              "疫苗",
              "注射"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Take your medicine.",
                  "zh": "吃药。"
                },
                {
                  "en": "Brave boy/girl!",
                  "zh": "勇敢的孩子！"
                },
                {
                  "en": "Just a little pinch!",
                  "zh": "就像被轻轻掐一下！"
                }
              ],
              "A1": [
                {
                  "en": "You were so brave during the check-up! I'm so proud!",
                  "zh": "检查的时候你太勇敢了！我太骄傲了！"
                },
                {
                  "en": "Let's get your medicine. It will help you feel better soon.",
                  "zh": "我们去拿药吧，吃了很快就会好的。"
                },
                {
                  "en": "I know getting a shot isn't fun, but it protects you from getting really sick.",
                  "zh": "我知道打针不好玩，但它能保护你不得重病。"
                },
                {
                  "en": "The medicine might taste a bit bitter, but it will help you recover faster.",
                  "zh": "药可能有点苦，但能帮你快点好起来。"
                }
              ],
              "A2": [
                {
                  "en": "You handled that injection so well! Even I get nervous about shots sometimes.",
                  "zh": "你打针表现太好了！有时候我打针也会紧张呢。"
                },
                {
                  "en": "Let's follow the doctor's advice so you can get back to playing soon.",
                  "zh": "我们听医生的话，这样你就能快点恢复去玩了。"
                }
              ],
              "B1": [
                {
                  "en": "Vaccines are one of the greatest medical achievements — they've saved countless lives.",
                  "zh": "疫苗是最伟大的医学成就之一——它们挽救了无数生命。"
                }
              ]
            }
          },
          "dentist": {
            "name": "看牙医",
            "keywords": [
              "牙医",
              "牙齿",
              "补牙",
              "牙科"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's see the dentist!",
                  "zh": "我们去看牙医！"
                },
                {
                  "en": "Open wide! Show your teeth!",
                  "zh": "张大嘴！露出牙齿！"
                }
              ],
              "A1": [
                {
                  "en": "The dentist just wants to count your teeth and make sure they're healthy.",
                  "zh": "牙医只是想数数你的牙，确保它们健康。"
                },
                {
                  "en": "The dentist said your teeth look great! Keep brushing!",
                  "zh": "牙医说你的牙齿很好！继续好好刷牙！"
                }
              ],
              "A2": [
                {
                  "en": "The dentist appointment is next Tuesday. Let's mark it on the calendar.",
                  "zh": "牙医预约在下周二，我们记在日历上。"
                },
                {
                  "en": "Regular dental check-ups prevent cavities and keep your smile bright.",
                  "zh": "定期牙科检查能预防蛀牙，保持笑容灿烂。"
                }
              ],
              "B1": [
                {
                  "en": "Dental health is connected to overall health — taking care of your teeth is taking care of your body.",
                  "zh": "牙齿健康和全身健康息息相关——爱护牙齿就是爱护身体。"
                }
              ]
            }
          },
          "sick": {
            "name": "感冒发烧",
            "keywords": [
              "感冒",
              "发烧",
              "咳嗽",
              "流鼻涕",
              "不舒服",
              "生病"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Are you feeling sick?",
                  "zh": "你不舒服吗？"
                },
                {
                  "en": "Let's check your temperature.",
                  "zh": "我们量一下体温。"
                },
                {
                  "en": "Rest in bed. Get well soon!",
                  "zh": "在床上休息，快点好起来！"
                }
              ],
              "A1": [
                {
                  "en": "You have a little fever. Let's stay home and rest today.",
                  "zh": "你有点发烧，今天在家休息吧。"
                },
                {
                  "en": "Remember to drink lots of water when you're sick.",
                  "zh": "生病了记得多喝水。"
                },
                {
                  "en": "Rest is the best medicine. Let's make sure you get plenty of sleep.",
                  "zh": "休息是最好的药，一定要好好睡。"
                }
              ],
              "A2": [
                {
                  "en": "Your body is fighting the germs right now. Let's give it the help it needs.",
                  "zh": "你的身体正在跟病菌战斗，我们给它需要的帮助吧。"
                },
                {
                  "en": "If you're ever in pain or feeling unwell, please tell me right away.",
                  "zh": "如果哪里疼或者不舒服，马上告诉我。"
                }
              ],
              "B1": [
                {
                  "en": "Your health is the most important thing. Everything else can wait.",
                  "zh": "你的健康是最重要的，其他一切都可以等。"
                }
              ]
            }
          },
          "injury": {
            "name": "受伤处理",
            "keywords": [
              "受伤",
              "摔倒",
              "擦伤",
              "创可贴",
              "消毒",
              "疼",
              "伤口"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Are you okay?",
                  "zh": "你还好吗？"
                },
                {
                  "en": "Let me see!",
                  "zh": "让我看看！"
                },
                {
                  "en": "Put on a bandage!",
                  "zh": "贴创可贴！"
                },
                {
                  "en": "All better!",
                  "zh": "好了！"
                }
              ],
              "A1": [
                {
                  "en": "Oh no, you fell! Let me see where it hurts — I'll take care of you.",
                  "zh": "哎呀摔倒了！让我看看哪里疼——我来照顾你。"
                },
                {
                  "en": "We'll clean the scrape first, then put on a bandage to protect it.",
                  "zh": "我们先清洗擦伤，然后贴创可贴保护。"
                },
                {
                  "en": "It might sting a little when we clean it, but it will feel better soon.",
                  "zh": "清洗时可能会有点刺痛，但很快就会好。"
                }
              ],
              "A2": [
                {
                  "en": "Minor injuries are part of an active childhood — knowing how to handle them builds confidence.",
                  "zh": "小伤是活跃童年的一部分——知道怎么处理能建立信心。"
                },
                {
                  "en": "Learning basic first aid now will help you take care of yourself and others.",
                  "zh": "现在学基本急救帮你在将来照顾自己和他人。"
                },
                {
                  "en": "The body has an amazing ability to heal itself — a scrape today will be gone in a few days.",
                  "zh": "身体有惊人的自愈能力——今天的擦伤几天后就会消失。"
                }
              ],
              "B1": [
                {
                  "en": "First aid knowledge is a life skill that everyone should have — it empowers you to help in emergencies.",
                  "zh": "急救知识是每个人都应该拥有的生活技能——它让你在紧急情况下有能力帮忙。"
                },
                {
                  "en": "Staying calm when someone is hurt is one of the most valuable things you can do.",
                  "zh": "当有人受伤时保持冷静是你能做的最有价值的事之一。"
                },
                {
                  "en": "The resilience of the human body is remarkable — healing is happening inside you every moment.",
                  "zh": "人体的韧性是非凡的——治愈每时每刻都在你体内发生。"
                }
              ]
            }
          }
        }
      },
      "healthy_habits": {
        "name": "健康习惯",
        "keywords": [
          "健康",
          "眼睛",
          "饮食",
          "睡眠",
          "运动",
          "习惯",
          "身体"
        ],
        "sub_scenes": {
          "daily_health": {
            "name": "日常健康习惯",
            "keywords": [
              "健康",
              "习惯",
              "喝水",
              "运动",
              "作息"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Drink your water!",
                  "zh": "喝水！"
                },
                {
                  "en": "Wash your hands before eating!",
                  "zh": "吃饭前先洗手！"
                },
                {
                  "en": "Go to bed early!",
                  "zh": "早点睡觉！"
                }
              ],
              "A1": [
                {
                  "en": "Remember to wash your hands before every meal.",
                  "zh": "记得每餐前都要洗手。"
                },
                {
                  "en": "Drinking water keeps your body healthy and strong.",
                  "zh": "喝水能让身体健康强壮。"
                },
                {
                  "en": "Going to bed early helps you grow and have energy for tomorrow.",
                  "zh": "早睡能帮你长高，明天有精神。"
                },
                {
                  "en": "Let's do some exercise together — it's good for our bodies!",
                  "zh": "我们一起做点运动吧——对身体好！"
                }
              ],
              "A2": [
                {
                  "en": "Good health habits are like saving money — small daily deposits add up over time.",
                  "zh": "好的健康习惯就像存钱——每天存一点，时间长了就很多。"
                },
                {
                  "en": "Let's be proactive about your health — eat well, exercise, and get enough sleep.",
                  "zh": "我们主动管理健康——吃好、运动、睡够。"
                }
              ],
              "B1": [
                {
                  "en": "The choices you make about your health today will shape your wellbeing for decades to come.",
                  "zh": "你今天做的健康选择，将塑造未来几十年的身心状态。"
                },
                {
                  "en": "A healthy lifestyle isn't about being perfect — it's about making good choices most of the time.",
                  "zh": "健康的生活方式不是完美——而是大多数时候做出好的选择。"
                }
              ]
            }
          },
          "eye_care": {
            "name": "保护眼睛",
            "keywords": [
              "眼睛",
              "视力",
              "远眺",
              "少看屏幕",
              "眼保健操",
              "保护"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look far away!",
                  "zh": "看远处！"
                },
                {
                  "en": "Rest your eyes!",
                  "zh": "休息眼睛！"
                },
                {
                  "en": "Step back a bit!",
                  "zh": "往后退一点！",
                  "keywords": [
                    "后退",
                    "距离"
                  ]
                },
                {
                  "en": "Blink, blink!",
                  "zh": "眨眨眼！"
                }
              ],
              "A1": [
                {
                  "en": "After looking at screens, let's look out the window at something far away for a minute.",
                  "zh": "看屏幕后，我们看窗外远处的东西一分钟。"
                },
                {
                  "en": "Good lighting is important when you're reading — don't read in the dark.",
                  "zh": "阅读时光线好很重要——不要在暗处读书。"
                },
                {
                  "en": "Your eyes work hard all day — they need breaks just like the rest of your body.",
                  "zh": "眼睛整天辛苦工作——像身体其他部分一样需要休息。"
                }
              ],
              "A2": [
                {
                  "en": "Eye health is something many people don't think about until there's a problem — start good habits early.",
                  "zh": "眼睛健康是很多人出问题前不会想的事——早点养成好习惯。"
                },
                {
                  "en": "The 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.",
                  "zh": "20-20-20法则：每20分钟看20英尺外的东西20秒。"
                },
                {
                  "en": "Protecting your vision now will serve you well for decades to come.",
                  "zh": "现在保护视力会让你未来几十年受益。"
                }
              ],
              "B1": [
                {
                  "en": "Vision is one of our most precious senses — the habits you form now will protect it for life.",
                  "zh": "视力是我们最珍贵的感官之一——你现在养成的习惯会保护它一生。"
                },
                {
                  "en": "In the digital age, eye strain is becoming an epidemic — being proactive about eye health sets you apart.",
                  "zh": "数字时代眼疲劳正成为流行病——主动保护眼睛让你与众不同。"
                },
                {
                  "en": "Good eye care isn't about restriction — it's about balance and awareness.",
                  "zh": "好的眼部护理不是限制——是平衡和意识。"
                }
              ]
            }
          },
          "healthy_eating": {
            "name": "饮食健康",
            "keywords": [
              "蔬菜",
              "水果",
              "营养",
              "少吃糖",
              "均衡",
              "健康饮食"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Eat your veggies!",
                  "zh": "吃蔬菜！"
                },
                {
                  "en": "Try the greens!",
                  "zh": "尝尝绿色菜！"
                },
                {
                  "en": "Too much sugar!",
                  "zh": "糖太多了！"
                },
                {
                  "en": "Drink water!",
                  "zh": "喝水！"
                }
              ],
              "A1": [
                {
                  "en": "Eating a rainbow of fruits and vegetables gives your body all the nutrients it needs.",
                  "zh": "吃彩虹色的水果蔬菜给身体所需的所有营养。"
                },
                {
                  "en": "A little treat is fine, but our bodies need healthy food most of the time to grow strong.",
                  "zh": "偶尔吃零食没关系，但身体大部分时候需要健康食物才能长壮。"
                },
                {
                  "en": "Let's try one new vegetable each week — you might discover a new favorite!",
                  "zh": "每周试一种新蔬菜——你可能会发现新的最爱！"
                }
              ],
              "A2": [
                {
                  "en": "The food choices you make every day add up to your long-term health.",
                  "zh": "你每天的食物选择累积成你的长期健康。"
                },
                {
                  "en": "Understanding nutrition helps you make choices that give you energy and keep you healthy.",
                  "zh": "理解营养帮你做出给你能量保持健康的选择。"
                },
                {
                  "en": "Healthy eating isn't about being perfect — it's about making good choices most of the time.",
                  "zh": "健康饮食不是完美——是大部分时候做出好选择。"
                }
              ],
              "B1": [
                {
                  "en": "Food is fuel for your body and brain — the quality of what you eat affects how you think and feel.",
                  "zh": "食物是身体和大脑的燃料——你吃的质量影响你的思维和感受。"
                },
                {
                  "en": "Developing a healthy relationship with food now prevents struggles with diet and body image later.",
                  "zh": "现在建立与食物的健康关系，防止以后与饮食和身体形象的挣扎。"
                },
                {
                  "en": "The habits you build around food in childhood shape your health for the rest of your life.",
                  "zh": "童年建立的饮食相关习惯塑造你余生的健康。"
                }
              ]
            }
          },
          "sleep_habit": {
            "name": "睡眠习惯",
            "keywords": [
              "早睡",
              "睡眠",
              "午睡",
              "休息",
              "困",
              "作息"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Nap time!",
                  "zh": "午睡时间！"
                },
                {
                  "en": "Sleepy time!",
                  "zh": "睡觉时间！"
                },
                {
                  "en": "Yawn!",
                  "zh": "打哈欠！"
                },
                {
                  "en": "Early to bed!",
                  "zh": "早点睡！"
                }
              ],
              "A1": [
                {
                  "en": "A good night's sleep helps your body grow and your brain remember what you learned.",
                  "zh": "好的睡眠帮身体成长，帮大脑记住学的东西。"
                },
                {
                  "en": "Let's stick to the same bedtime every night — it helps your body know when to get sleepy.",
                  "zh": "我们每晚固定时间睡觉——帮身体知道什么时候该困。"
                },
                {
                  "en": "No screens an hour before bed — the blue light makes it harder to fall asleep.",
                  "zh": "睡前一个小时不看屏幕——蓝光让人更难入睡。"
                }
              ],
              "A2": [
                {
                  "en": "Sleep is when your brain processes the day and prepares for tomorrow — it's not wasted time.",
                  "zh": "睡眠是大脑处理今天准备明天的时候——不是浪费的时间。"
                },
                {
                  "en": "Consistent sleep habits are one of the most powerful things you can do for your health.",
                  "zh": "稳定的睡眠习惯是你能为健康做的最有力的事情之一。"
                },
                {
                  "en": "If you're having trouble sleeping, a warm bath and a quiet story can help you wind down.",
                  "zh": "如果睡不着，温水澡和安静的故事能帮你放松。"
                }
              ],
              "B1": [
                {
                  "en": "Sleep is the foundation of physical health, mental clarity, and emotional stability.",
                  "zh": "睡眠是身体健康、思维清晰和情绪稳定的基础。"
                },
                {
                  "en": "In a world that glorifies busyness, prioritizing sleep is a radical act of self-care.",
                  "zh": "在一个崇尚忙碌的世界里，优先睡眠是一种激进的自我关爱。"
                },
                {
                  "en": "The sleep habits you establish now will affect your health, mood, and performance for decades.",
                  "zh": "你现在建立的睡眠习惯将影响你几十年的健康、情绪和表现。"
                }
              ]
            }
          },
          "exercise_habit": {
            "name": "运动习惯",
            "keywords": [
              "运动",
              "每天",
              "跑步",
              "跳绳",
              "坚持",
              "锻炼"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's exercise!",
                  "zh": "我们运动吧！"
                },
                {
                  "en": "Move your body!",
                  "zh": "动起来！"
                },
                {
                  "en": "One more time!",
                  "zh": "再来一次！"
                },
                {
                  "en": "Feel your heartbeat!",
                  "zh": "感受心跳！"
                }
              ],
              "A1": [
                {
                  "en": "Let's make exercise a daily habit — even just 20 minutes of moving makes a big difference.",
                  "zh": "我们让运动成为日常习惯——哪怕只动20分钟也有大不同。"
                },
                {
                  "en": "Find a sport or activity you love — exercise shouldn't feel like a chore.",
                  "zh": "找一项你爱的运动或活动——锻炼不应该像苦差事。"
                },
                {
                  "en": "Your heart is a muscle — exercise makes it stronger, just like running makes your legs stronger.",
                  "zh": "心脏是肌肉——运动让它更强壮，就像跑步让腿更强壮一样。"
                }
              ],
              "A2": [
                {
                  "en": "Regular exercise boosts your mood, improves your focus, and helps you sleep better.",
                  "zh": "定期运动提升情绪、改善注意力、帮你睡得更好。"
                },
                {
                  "en": "The best exercise is the one you enjoy enough to do consistently.",
                  "zh": "最好的运动是你足够喜欢能坚持做的那种。"
                },
                {
                  "en": "Building an exercise habit now is an investment in a long, healthy, and active life.",
                  "zh": "现在建立运动习惯是对长寿、健康、积极人生的投资。"
                }
              ],
              "B1": [
                {
                  "en": "Physical fitness is not about looking a certain way — it's about feeling strong and capable in your own body.",
                  "zh": "身体健康不是关于某种外表——是关于在你自己身体里感到强壮和有能力。"
                },
                {
                  "en": "The discipline of regular exercise builds mental toughness alongside physical strength.",
                  "zh": "定期运动的纪律在锻炼身体力量的同时培养心理韧性。"
                },
                {
                  "en": "A lifelong love of movement is one of the greatest gifts you can give yourself.",
                  "zh": "一生热爱运动是你能给自己的最伟大礼物之一。"
                }
              ]
            }
          }
        }
      }
    }
  },
  {
    "id": "places",
    "name": "外出场所",
    "icon": "🛒",
    "categories": {
      "supermarket": {
        "name": "超市购物",
        "keywords": [
          "超市",
          "购物",
          "买菜",
          "商场",
          "便利店",
          "买东西",
          "结账",
          "收银",
          "推车",
          "选商品"
        ],
        "sub_scenes": {
          "shopping_list": {
            "name": "列购物清单",
            "keywords": [
              "清单",
              "购物清单",
              "列清单",
              "要买什么",
              "需要什么",
              "记下来"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's make a list!",
                  "zh": "我们来列个清单！"
                },
                {
                  "en": "What do we need?",
                  "zh": "我们需要什么？"
                },
                {
                  "en": "Milk! Bread!",
                  "zh": "牛奶！面包！"
                },
                {
                  "en": "What else do we need?",
                  "zh": "还需要什么？",
                  "keywords": [
                    "需要",
                    "什么"
                  ]
                },
                {
                  "en": "We've got everything we need!",
                  "zh": "我们需要的东西都齐了！"
                }
              ],
              "A1": [
                {
                  "en": "Let's write down what we need to buy.",
                  "zh": "我们把要买的东西写下来。"
                },
                {
                  "en": "We need milk, eggs, and bread.",
                  "zh": "我们需要牛奶、鸡蛋和面包。"
                },
                {
                  "en": "Is there anything else you want?",
                  "zh": "你还想要别的什么吗？"
                },
                {
                  "en": "Can you remember three things on our list?",
                  "zh": "你能记住清单上的三样东西吗？"
                },
                {
                  "en": "Let's check the fridge first.",
                  "zh": "我们先看看冰箱里有什么。"
                }
              ],
              "A2": [
                {
                  "en": "Let's make a shopping list together so we don't forget anything.",
                  "zh": "我们一起列个购物清单，免得忘了什么。"
                },
                {
                  "en": "We're running out of milk, so that goes on the list first.",
                  "zh": "牛奶快喝完了，先写上。"
                },
                {
                  "en": "Let's organize the list by section — fruits, dairy, and snacks.",
                  "zh": "我们按区域整理清单——水果、奶制品和零食。"
                },
                {
                  "en": "Do you want to be in charge of the list today?",
                  "zh": "今天你来负责清单好不好？"
                },
                {
                  "en": "We should check what we already have before adding more.",
                  "zh": "我们先看看家里还有什么，再加到清单上。"
                }
              ],
              "B1": [
                {
                  "en": "Let's plan our meals for the next few days, then write the shopping list accordingly.",
                  "zh": "我们先规划接下来几天的饭菜，再根据计划写购物清单。"
                },
                {
                  "en": "Categorizing the list helps us shop more efficiently.",
                  "zh": "把清单分类能帮我们购物更高效。"
                },
                {
                  "en": "We should also check for any coupons or discounts before we go.",
                  "zh": "出发前我们也看看有没有优惠券或打折信息。"
                },
                {
                  "en": "Let's estimate how much everything will cost and set a budget.",
                  "zh": "我们估算一下总共要花多少钱，定个预算。"
                }
              ]
            }
          },
          "browse_cart": {
            "name": "推车逛超市",
            "keywords": [
              "推车",
              "购物车",
              "逛逛",
              "找东西",
              "在哪里",
              "拿",
              "放"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Push the cart!",
                  "zh": "推着购物车！"
                },
                {
                  "en": "Put it in.",
                  "zh": "放进去。"
                },
                {
                  "en": "Where is the milk?",
                  "zh": "牛奶在哪里？"
                },
                {
                  "en": "Let's go!",
                  "zh": "我们走！"
                },
                {
                  "en": "Stop here.",
                  "zh": "停在这里。"
                }
              ],
              "A1": [
                {
                  "en": "Can you push the cart for me?",
                  "zh": "你能帮我推一下购物车吗？"
                },
                {
                  "en": "Let's go to the fruit section first.",
                  "zh": "我们先去水果区。"
                },
                {
                  "en": "Where can we find the bread?",
                  "zh": "面包在哪里能找到？"
                },
                {
                  "en": "Please put the apples in the cart gently.",
                  "zh": "请轻轻把苹果放进购物车。"
                },
                {
                  "en": "The cart is getting heavy!",
                  "zh": "购物车越来越重了！"
                }
              ],
              "A2": [
                {
                  "en": "Let's start from the left side and work our way through the store.",
                  "zh": "我们从左边开始，慢慢逛完整家店。"
                },
                {
                  "en": "Could you grab a basket while I get the cart?",
                  "zh": "我去推车，你去拿个篮子好吗？"
                },
                {
                  "en": "The dairy section is at the back, let's go there after the produce.",
                  "zh": "奶制品区在后面，我们买完蔬果再去。"
                },
                {
                  "en": "Be careful not to bump into anyone with the cart.",
                  "zh": "推车小心点，别撞到别人。"
                },
                {
                  "en": "Let's check the signs above each aisle to find what we need.",
                  "zh": "我们看每排货架上方的标志来找东西。"
                }
              ],
              "B1": [
                {
                  "en": "Let's navigate the store efficiently by following the layout from entrance to checkout.",
                  "zh": "我们按超市布局从入口到收银台高效地逛。"
                },
                {
                  "en": "Keep an eye out for any special promotions or clearance items.",
                  "zh": "留意一下有没有特价促销或清仓商品。"
                },
                {
                  "en": "Let's compare unit prices to figure out which size offers the best deal.",
                  "zh": "我们比较一下单价，看看哪个规格最划算。"
                },
                {
                  "en": "Try to remember where everything is — it's good practice for next time.",
                  "zh": "试着记住每样东西的位置，下次就熟门熟路了。"
                }
              ]
            }
          },
          "pick_items": {
            "name": "挑选商品",
            "keywords": [
              "挑选",
              "选水果",
              "选零食",
              "比价",
              "便宜",
              "哪个好",
              "拿几个",
              "称重",
              "新鲜"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Pick one!",
                  "zh": "挑一个！"
                },
                {
                  "en": "This one?",
                  "zh": "这个？"
                },
                {
                  "en": "Red or green?",
                  "zh": "红的还是绿的？"
                },
                {
                  "en": "Which one do you like?",
                  "zh": "你喜欢哪个？"
                },
                {
                  "en": "It's big!",
                  "zh": "好大！"
                }
              ],
              "A1": [
                {
                  "en": "Which apples look better, these or those?",
                  "zh": "这些苹果和那些，哪个看起来更好？"
                },
                {
                  "en": "Let's pick the freshest vegetables.",
                  "zh": "我们挑最新鲜的蔬菜。"
                },
                {
                  "en": "How many bananas should we get?",
                  "zh": "我们买几根香蕉？"
                },
                {
                  "en": "You can choose one snack today.",
                  "zh": "今天你可以选一样零食。"
                },
                {
                  "en": "This one feels soft, let's try another.",
                  "zh": "这个摸起来有点软，换一个试试。"
                }
              ],
              "A2": [
                {
                  "en": "Let's compare the prices before we decide which brand to buy.",
                  "zh": "我们先比较一下价格再决定买哪个牌子。"
                },
                {
                  "en": "Can you help me weigh these apples on the scale?",
                  "zh": "你能帮我在秤上称一下这些苹果吗？"
                },
                {
                  "en": "Check the expiration date before putting it in the cart.",
                  "zh": "放进购物车前先看看保质期。"
                },
                {
                  "en": "We should pick fruits that are in season — they're cheaper and taste better.",
                  "zh": "我们应该选当季的水果，又便宜又好吃。"
                },
                {
                  "en": "This one has a bruise, let's find a better one.",
                  "zh": "这个有碰伤，我们找个好一点的。"
                }
              ],
              "B1": [
                {
                  "en": "Let's read the nutrition labels and compare the ingredients.",
                  "zh": "我们看看营养成分表，比较一下配料。"
                },
                {
                  "en": "Buying in bulk is cheaper per unit, but only if we can finish it before it expires.",
                  "zh": "大包装单价更便宜，但前提是能在过期前吃完。"
                },
                {
                  "en": "I want you to learn how to pick quality produce — look at the color, smell, and firmness.",
                  "zh": "我想让你学会挑优质食材——看颜色、闻气味、摸硬度。"
                },
                {
                  "en": "Let's stick to our shopping list and avoid impulse purchases.",
                  "zh": "按购物清单来，别冲动消费。"
                }
              ]
            }
          },
          "checkout": {
            "name": "排队结账",
            "keywords": [
              "结账",
              "收银",
              "排队",
              "付钱",
              "买单",
              "扫码",
              "找零"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's pay now!",
                  "zh": "我们去付钱吧！"
                },
                {
                  "en": "Wait in line.",
                  "zh": "排队等等。"
                },
                {
                  "en": "Put it on the counter.",
                  "zh": "放到台子上。"
                }
              ],
              "A1": [
                {
                  "en": "Let's line up and wait for our turn.",
                  "zh": "我们排队等轮到我们。"
                },
                {
                  "en": "Please put everything on the counter.",
                  "zh": "请把所有东西放到收银台上。"
                },
                {
                  "en": "How much is it altogether?",
                  "zh": "一共多少钱？"
                },
                {
                  "en": "Can you help me put things in the bag?",
                  "zh": "你能帮我把东西装进袋子里吗？"
                },
                {
                  "en": "Don't forget to say thank you to the cashier.",
                  "zh": "别忘了跟收银员说谢谢。"
                }
              ],
              "A2": [
                {
                  "en": "Let's head to the checkout. Do you see which line is shorter?",
                  "zh": "我们去结账吧，你看哪条队更短？"
                },
                {
                  "en": "I'll pay with my phone. Can you help me scan the code?",
                  "zh": "我用手机支付，你能帮我扫一下码吗？"
                },
                {
                  "en": "Let's count the items as the cashier scans them to make sure everything is right.",
                  "zh": "收银员扫码的时候我们一起数，确保没错。"
                },
                {
                  "en": "We should bring our own bags next time to be more eco-friendly.",
                  "zh": "下次我们带自己的袋子，更环保。"
                },
                {
                  "en": "Would you like to hand the money to the cashier?",
                  "zh": "你想把钱递给收银员吗？"
                }
              ],
              "B1": [
                {
                  "en": "Let's review the receipt to make sure there are no mistakes.",
                  "zh": "我们核对一下小票，确保没有差错。"
                },
                {
                  "en": "Using self-checkout can be faster, but we need to weigh the produce correctly.",
                  "zh": "用自助结账可能更快，但我们需要正确称重蔬果。"
                },
                {
                  "en": "I noticed they charged us twice for the milk — let's go to customer service.",
                  "zh": "我发现牛奶被收了两次钱，我们去服务台问问。"
                },
                {
                  "en": "Let's calculate the total before we reach the register so there are no surprises.",
                  "zh": "到收银台前我们先算算总价，免得太意外。"
                }
              ]
            }
          },
          "pack_leave": {
            "name": "装袋离开",
            "keywords": [
              "装袋",
              "袋子",
              "拿东西",
              "走",
              "回家",
              "搬",
              "提",
              "重"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's go home!",
                  "zh": "我们回家吧！"
                },
                {
                  "en": "Carry this.",
                  "zh": "拿这个。"
                },
                {
                  "en": "It's heavy!",
                  "zh": "好重！"
                },
                {
                  "en": "Can you help carry this bag?",
                  "zh": "能帮忙提这个袋子吗？"
                },
                {
                  "en": "Good shopping!",
                  "zh": "购物愉快！"
                }
              ],
              "A1": [
                {
                  "en": "Can you help me carry one bag?",
                  "zh": "你能帮我提一个袋子吗？"
                },
                {
                  "en": "Put the cold things together in one bag.",
                  "zh": "把冷藏的东西放在一个袋子里。"
                },
                {
                  "en": "Let's walk to the car carefully.",
                  "zh": "我们小心走到车那边。"
                },
                {
                  "en": "We got everything we needed!",
                  "zh": "我们买齐了所有需要的东西！"
                },
                {
                  "en": "You were a great helper today!",
                  "zh": "你今天帮了大忙！"
                }
              ],
              "A2": [
                {
                  "en": "Let's organize the bags — heavy items on the bottom, light ones on top.",
                  "zh": "我们整理一下袋子，重的放下面，轻的放上面。"
                },
                {
                  "en": "Remember to put the cold items in the fridge as soon as we get home.",
                  "zh": "记住一到家就把冷藏的东西放冰箱。"
                },
                {
                  "en": "Let's check the receipt one more time before we leave.",
                  "zh": "离开前我们再核对一下小票。"
                },
                {
                  "en": "Great teamwork today! Shopping is much easier when we do it together.",
                  "zh": "今天合作愉快！一起购物轻松多了。"
                }
              ],
              "B1": [
                {
                  "en": "Let's reflect on our shopping trip — did we stick to the budget and the list?",
                  "zh": "我们回顾一下这次购物——有没有按预算和清单来？"
                },
                {
                  "en": "Next time, we can try a different supermarket to compare prices and quality.",
                  "zh": "下次我们可以试试另一家超市，比较一下价格和品质。"
                },
                {
                  "en": "Carrying groceries is good exercise — it builds strength and responsibility.",
                  "zh": "提购物袋是不错的锻炼，能增强力量和责任感。"
                },
                {
                  "en": "Let's make a note of what we forgot so we don't miss it next time.",
                  "zh": "记一下这次忘了买什么，下次别忘了。"
                }
              ]
            }
          }
        }
      },
      "restaurant": {
        "name": "餐厅用餐",
        "keywords": [
          "餐厅",
          "饭店",
          "吃饭",
          "外面吃",
          "出去吃",
          "点菜",
          "服务员",
          "打包"
        ],
        "sub_scenes": {
          "order_food": {
            "name": "看菜单点菜",
            "keywords": [
              "点菜",
              "菜单",
              "吃什么",
              "要什么",
              "点餐",
              "选",
              "点"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "I want this!",
                  "zh": "我要这个！"
                },
                {
                  "en": "What do you recommend?",
                  "zh": "你推荐什么？"
                },
                {
                  "en": "Rice or noodles?",
                  "zh": "米饭还是面条？"
                },
                {
                  "en": "I'm hungry!",
                  "zh": "我饿了！"
                }
              ],
              "A1": [
                {
                  "en": "What would you like to eat?",
                  "zh": "你想吃什么？"
                },
                {
                  "en": "Let's look at the menu together.",
                  "zh": "我们一起看看菜单。"
                },
                {
                  "en": "Do you want rice or noodles?",
                  "zh": "你要米饭还是面条？"
                },
                {
                  "en": "Can you tell the waiter what you want?",
                  "zh": "你能告诉服务员你想要什么吗？"
                },
                {
                  "en": "Let's order one dish each.",
                  "zh": "我们每人点一个菜。"
                }
              ],
              "A2": [
                {
                  "en": "Let's look through the menu and pick something we both like.",
                  "zh": "我们翻翻菜单，挑我们都喜欢的。"
                },
                {
                  "en": "Would you like to try something new today?",
                  "zh": "今天想不想试试新的菜？"
                },
                {
                  "en": "Can you read the menu and tell me what looks good?",
                  "zh": "你能看看菜单，告诉我哪个看起来不错吗？"
                },
                {
                  "en": "Let's order a balanced meal — some vegetables, protein, and rice.",
                  "zh": "我们点一顿均衡的饭菜——蔬菜、蛋白质和米饭都要有。"
                },
                {
                  "en": "Excuse me, we're ready to order now.",
                  "zh": "你好，我们可以点菜了。"
                }
              ],
              "B1": [
                {
                  "en": "Let's consider the portion sizes so we don't order too much or too little.",
                  "zh": "我们考虑一下分量，别点太多或太少。"
                },
                {
                  "en": "You can practice ordering in English — I'll help if you get stuck.",
                  "zh": "你可以试着用英语点菜，卡住了我帮你。"
                },
                {
                  "en": "Let's check if there are any daily specials or recommendations from the chef.",
                  "zh": "我们看看有没有今日特价或主厨推荐。"
                },
                {
                  "en": "When dining out, it's good to try dishes you can't easily make at home.",
                  "zh": "在外面吃饭，可以试试家里不容易做的菜。"
                }
              ]
            }
          },
          "wait_eat": {
            "name": "等餐用餐",
            "keywords": [
              "等餐",
              "上菜",
              "好吃",
              "筷子",
              "勺子",
              "叉子",
              "慢慢吃",
              "礼仪",
              "烫",
              "辣"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "It's hot!",
                  "zh": "好烫！"
                },
                {
                  "en": "Use your spoon.",
                  "zh": "用勺子。"
                },
                {
                  "en": "Yummy!",
                  "zh": "好吃！"
                },
                {
                  "en": "More please.",
                  "zh": "还要。"
                }
              ],
              "A1": [
                {
                  "en": "The food is coming! Let's wait patiently.",
                  "zh": "菜来了！我们耐心等一下。"
                },
                {
                  "en": "Be careful, it might be hot.",
                  "zh": "小心，可能很烫。"
                },
                {
                  "en": "Use your chopsticks properly.",
                  "zh": "好好用筷子。"
                },
                {
                  "en": "Do you like it? Is it tasty?",
                  "zh": "你喜欢吗？好吃吗？"
                },
                {
                  "en": "Chew slowly and enjoy your food.",
                  "zh": "慢慢嚼，好好享受食物。"
                }
              ],
              "A2": [
                {
                  "en": "Let's wait until everyone's food arrives before we start eating.",
                  "zh": "等大家的菜都上齐了再开始吃。"
                },
                {
                  "en": "Remember your table manners — don't talk with your mouth full.",
                  "zh": "注意餐桌礼仪，嘴里有东西别说话。"
                },
                {
                  "en": "Would you like to try a bite of my dish?",
                  "zh": "要不要尝一口我的菜？"
                },
                {
                  "en": "If you don't like something, just tell me politely.",
                  "zh": "如果有不喜欢的，礼貌地告诉我就好。"
                },
                {
                  "en": "This restaurant makes really good food, doesn't it?",
                  "zh": "这家餐厅做得真好吃，对吧？"
                }
              ],
              "B1": [
                {
                  "en": "Let's practice mindful eating — focus on the flavors and textures of each bite.",
                  "zh": "我们练习正念饮食，感受每一口的味道和口感。"
                },
                {
                  "en": "Different cuisines have different dining etiquette — let's learn as we go.",
                  "zh": "不同菜系有不同的用餐礼仪，我们边吃边学。"
                },
                {
                  "en": "It's polite to offer to share your dish with others at the table.",
                  "zh": "主动跟同桌的人分享你的菜是一种礼貌。"
                },
                {
                  "en": "If the food isn't what you expected, we can politely ask the server about it.",
                  "zh": "如果菜不合预期，我们可以礼貌地跟服务员反映。"
                }
              ]
            }
          },
          "pay_bill": {
            "name": "结账打包",
            "keywords": [
              "买单",
              "结账",
              "打包",
              "带走",
              "剩菜",
              "付钱",
              "小票"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Time to head home!",
                  "zh": "该回家了！"
                },
                {
                  "en": "Take it home.",
                  "zh": "带回家。"
                },
                {
                  "en": "Say bye-bye!",
                  "zh": "说拜拜！"
                },
                {
                  "en": "Thank you!",
                  "zh": "谢谢！"
                }
              ],
              "A1": [
                {
                  "en": "Can we have the bill please?",
                  "zh": "请给我们账单。"
                },
                {
                  "en": "We didn't finish this, let's take it home.",
                  "zh": "这个没吃完，我们打包带回家。"
                },
                {
                  "en": "Can you ask for a box to pack the leftovers?",
                  "zh": "你能要一个盒子来打包剩菜吗？"
                },
                {
                  "en": "How much did our meal cost?",
                  "zh": "我们这顿饭花了多少钱？"
                },
                {
                  "en": "Don't forget your jacket before we leave.",
                  "zh": "走之前别忘了拿外套。"
                }
              ],
              "A2": [
                {
                  "en": "Let's ask for the check and split the leftovers into boxes.",
                  "zh": "我们买单吧，然后把剩菜分装到盒子里。"
                },
                {
                  "en": "It's good practice to check the bill before paying.",
                  "zh": "付款前核对一下账单是个好习惯。"
                },
                {
                  "en": "We can ask the server to pack this for us.",
                  "zh": "我们可以请服务员帮我们打包。"
                },
                {
                  "en": "Would you like to leave a tip? Good service deserves appreciation.",
                  "zh": "要不要留点小费？服务好值得感谢。"
                }
              ],
              "B1": [
                {
                  "en": "Let's calculate the tip — usually 10 to 15 percent of the total is appropriate here.",
                  "zh": "我们算一下小费，这里一般给总价的10%到15%比较合适。"
                },
                {
                  "en": "Packing leftovers is not only economical but also reduces food waste.",
                  "zh": "打包剩菜不仅省钱，还能减少食物浪费。"
                },
                {
                  "en": "Let's reflect on the meal — what did you enjoy most and what would you try differently?",
                  "zh": "回顾一下这顿饭，你最喜欢哪道菜，下次想换什么？"
                }
              ]
            }
          },
          "fast_food": {
            "name": "快餐店",
            "keywords": [
              "快餐",
              "麦当劳",
              "肯德基",
              "汉堡",
              "薯条",
              "冰淇淋",
              "鸡块",
              "可乐"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "I want fries!",
                  "zh": "我要薯条！"
                },
                {
                  "en": "Burger please!",
                  "zh": "请给我汉堡！"
                },
                {
                  "en": "Ice cream!",
                  "zh": "冰淇淋！"
                },
                {
                  "en": "Ketchup please.",
                  "zh": "请给我番茄酱。"
                },
                {
                  "en": "Yummy yum!",
                  "zh": "好好吃！"
                }
              ],
              "A1": [
                {
                  "en": "What would you like? A hamburger or chicken nuggets?",
                  "zh": "你想要什么？汉堡还是鸡块？"
                },
                {
                  "en": "Do you want a small or large fries?",
                  "zh": "你要小份薯条还是大份？"
                },
                {
                  "en": "Let's find a table first.",
                  "zh": "我们先找个位子。"
                },
                {
                  "en": "Can you throw away the trash when you're done?",
                  "zh": "吃完能把垃圾扔掉吗？"
                },
                {
                  "en": "Would you like a toy with your meal?",
                  "zh": "你想要套餐里带的玩具吗？"
                }
              ],
              "A2": [
                {
                  "en": "Let's look at the combo meals — they're usually a better deal.",
                  "zh": "我们看看套餐，通常更划算。"
                },
                {
                  "en": "Can you order for us? Tell them what we want.",
                  "zh": "你能帮我们点餐吗？告诉他们我们要什么。"
                },
                {
                  "en": "Remember to say please and thank you when ordering.",
                  "zh": "点餐的时候记得说请和谢谢。"
                },
                {
                  "en": "Let's share a large fries instead of getting two small ones.",
                  "zh": "我们合买一份大薯条吧，比分两份小的划算。"
                }
              ],
              "B1": [
                {
                  "en": "Fast food is fine once in a while, but let's not make it a habit.",
                  "zh": "偶尔吃快餐可以，但别养成习惯。"
                },
                {
                  "en": "Let's compare the nutritional information of different meals.",
                  "zh": "我们比较一下不同套餐的营养信息。"
                },
                {
                  "en": "You can practice your English by reading the menu and placing the order yourself.",
                  "zh": "你可以通过看菜单和自己点餐来练习英语。"
                }
              ]
            }
          },
          "behave_well": {
            "id": "behave_well",
            "name": "用餐礼仪",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Sit nicely!",
                  "zh": "坐好！",
                  "keywords": [
                    "坐好",
                    "礼仪"
                  ]
                },
                {
                  "en": "Use your spoon.",
                  "zh": "用勺子。",
                  "keywords": [
                    "勺子",
                    "餐具"
                  ]
                },
                {
                  "en": "No playing with food!",
                  "zh": "不要玩食物！",
                  "keywords": [
                    "玩",
                    "食物"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Don't talk with your mouth full.",
                  "zh": "嘴里有东西别说话。",
                  "keywords": [
                    "说话",
                    "嘴里"
                  ]
                },
                {
                  "en": "Wipe your mouth with a napkin.",
                  "zh": "用餐巾擦擦嘴。",
                  "keywords": [
                    "餐巾",
                    "擦嘴"
                  ]
                },
                {
                  "en": "Chew with your mouth closed.",
                  "zh": "闭着嘴嚼。",
                  "keywords": [
                    "嚼",
                    "闭嘴"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "Please use your fork and knife properly.",
                  "zh": "请正确使用刀叉。",
                  "keywords": [
                    "刀叉",
                    "正确"
                  ]
                },
                {
                  "en": "Wait until everyone is served before eating.",
                  "zh": "等大家都上齐了再吃。",
                  "keywords": [
                    "等",
                    "上齐"
                  ]
                },
                {
                  "en": "Don't reach across the table, ask someone to pass it.",
                  "zh": "别伸手够，请别人递给你。",
                  "keywords": [
                    "伸手",
                    "递"
                  ]
                },
                {
                  "en": "Don't slurp your soup — it's considered rude.",
                  "zh": "喝汤不要出声——这样不礼貌。",
                  "keywords": [
                    "喝汤",
                    "出声"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "It's important to have good table manners.",
                  "zh": "良好的餐桌礼仪很重要。",
                  "keywords": [
                    "礼仪",
                    "重要"
                  ]
                },
                {
                  "en": "Put your napkin on your lap before you start eating.",
                  "zh": "吃饭前把餐巾放在腿上。",
                  "keywords": [
                    "餐巾",
                    "腿上"
                  ]
                },
                {
                  "en": "When you're finished, place your utensils together on the plate.",
                  "zh": "吃完了把餐具放在盘子上。",
                  "keywords": [
                    "餐具",
                    "盘子"
                  ]
                }
              ]
            }
          }
        }
      },
      "zoo": {
        "name": "动物园",
        "keywords": [
          "动物园",
          "动物",
          "老虎",
          "大象",
          "猴子",
          "熊猫",
          "看动物",
          "喂动物"
        ],
        "sub_scenes": {
          "buy_tickets": {
            "name": "买票入园",
            "keywords": [
              "买票",
              "门票",
              "入园",
              "地图",
              "入口",
              "排队",
              "进去"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's go in!",
                  "zh": "我们进去吧！"
                },
                {
                  "en": "Ticket please.",
                  "zh": "请给我票。"
                },
                {
                  "en": "Where is the map?",
                  "zh": "地图在哪里？"
                },
                {
                  "en": "Stay close to me!",
                  "zh": "跟紧我！",
                  "keywords": [
                    "跟紧",
                    "靠近"
                  ]
                },
                {
                  "en": "Exciting!",
                  "zh": "好兴奋！"
                }
              ],
              "A1": [
                {
                  "en": "Let's buy the tickets first.",
                  "zh": "我们先买票。"
                },
                {
                  "en": "How much is a child's ticket?",
                  "zh": "儿童票多少钱？"
                },
                {
                  "en": "Let's get a map so we know where to go.",
                  "zh": "我们拿张地图，就知道去哪了。"
                },
                {
                  "en": "Which animal do you want to see first?",
                  "zh": "你想先看什么动物？"
                },
                {
                  "en": "Stay close to me, it's crowded today.",
                  "zh": "跟紧我，今天人很多。"
                }
              ],
              "A2": [
                {
                  "en": "Let's check if there's a family package — it might save us some money.",
                  "zh": "我们看看有没有家庭套票，可能更省钱。"
                },
                {
                  "en": "Can you help me read the map and plan our route?",
                  "zh": "你能帮我看地图，规划一下路线吗？"
                },
                {
                  "en": "Let's note the show times for the animal performances.",
                  "zh": "我们记一下动物表演的时间。"
                },
                {
                  "en": "We should start early to avoid the crowds at popular exhibits.",
                  "zh": "我们应该早点去，避开热门展区的人流。"
                }
              ],
              "B1": [
                {
                  "en": "Let's compare the different ticket options — some include extra activities.",
                  "zh": "我们比较一下不同的票种，有些包含额外的活动。"
                },
                {
                  "en": "Planning our route efficiently means we can see everything without rushing.",
                  "zh": "高效规划路线可以让我们不赶时间就看遍所有动物。"
                },
                {
                  "en": "Many zoos now offer online booking, which can save us time at the entrance.",
                  "zh": "很多动物园现在支持网上订票，省去门口排队的时间。"
                }
              ]
            }
          },
          "see_animals": {
            "name": "看动物",
            "keywords": [
              "动物",
              "老虎",
              "大象",
              "猴子",
              "熊猫",
              "狮子",
              "长颈鹿",
              "企鹅",
              "看",
              "认识"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look! A tiger!",
                  "zh": "看！老虎！"
                },
                {
                  "en": "The elephant is big!",
                  "zh": "大象好大！"
                },
                {
                  "en": "Monkey! Monkey!",
                  "zh": "猴子！猴子！"
                },
                {
                  "en": "What's that?",
                  "zh": "那是什么？"
                },
                {
                  "en": "It's sleeping.",
                  "zh": "它在睡觉。"
                }
              ],
              "A1": [
                {
                  "en": "Look at the giraffe! It has a very long neck.",
                  "zh": "看长颈鹿！它的脖子好长。"
                },
                {
                  "en": "What sound does a lion make? Roar!",
                  "zh": "狮子怎么叫？吼！"
                },
                {
                  "en": "The penguins are so cute when they walk.",
                  "zh": "企鹅走路的样子真可爱。"
                },
                {
                  "en": "Can you count how many monkeys you see?",
                  "zh": "你能数数看到几只猴子吗？"
                },
                {
                  "en": "Let's read the sign to learn about this animal.",
                  "zh": "我们看牌子上的介绍，了解这种动物。"
                }
              ],
              "A2": [
                {
                  "en": "Let's observe how the animals behave — are they eating, playing, or resting?",
                  "zh": "我们观察一下动物的行为，它们在吃东西、玩耍还是休息？"
                },
                {
                  "en": "This animal is native to Africa. Can you find Africa on the map?",
                  "zh": "这种动物原产非洲，你能在地图上找到非洲吗？"
                },
                {
                  "en": "Let's compare the size of different animals — which is the biggest you've seen?",
                  "zh": "我们比较一下不同动物的大小，你看到最大的是什么？"
                },
                {
                  "en": "The zookeeper is feeding them now — let's watch and learn.",
                  "zh": "饲养员正在喂它们，我们看看学学。"
                }
              ],
              "B1": [
                {
                  "en": "Let's discuss the habitats — why do polar bears need cold environments and camels need deserts?",
                  "zh": "我们讨论一下栖息地，为什么北极熊需要寒冷环境而骆驼需要沙漠？"
                },
                {
                  "en": "Many of these animals are endangered. Let's learn what we can do to help protect them.",
                  "zh": "很多动物都濒危了，我们了解一下能做些什么来保护它们。"
                },
                {
                  "en": "Observing animals in a zoo is different from seeing them in the wild — let's talk about the differences.",
                  "zh": "在动物园看动物和在野外看是不一样的，我们聊聊区别。"
                }
              ]
            }
          },
          "feed_interact": {
            "name": "喂动物互动",
            "keywords": [
              "喂",
              "互动",
              "摸",
              "拍照",
              "骑马",
              "小动物",
              "兔子",
              "山羊"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Feed the goat!",
                  "zh": "喂山羊！"
                },
                {
                  "en": "Be gentle.",
                  "zh": "轻轻的。"
                },
                {
                  "en": "Take a picture!",
                  "zh": "拍张照！"
                },
                {
                  "en": "So soft!",
                  "zh": "好软！"
                }
              ],
              "A1": [
                {
                  "en": "Do you want to feed the goats? Hold your hand flat.",
                  "zh": "你想喂山羊吗？把手摊平。"
                },
                {
                  "en": "Let's take a photo with the parrot!",
                  "zh": "我们跟鹦鹉合个影！"
                },
                {
                  "en": "You can pet the rabbit gently.",
                  "zh": "你可以轻轻摸摸兔子。"
                },
                {
                  "en": "Would you like to ride the pony?",
                  "zh": "你想骑小马吗？"
                },
                {
                  "en": "Remember to wash your hands after touching the animals.",
                  "zh": "摸完动物记得洗手。"
                }
              ],
              "A2": [
                {
                  "en": "The petting zoo is a great place to interact with friendly animals.",
                  "zh": "宠物园区是和温顺动物互动的好地方。"
                },
                {
                  "en": "Let's ask the zookeeper what we can and can't feed the animals.",
                  "zh": "我们问问饲养员什么能喂什么不能喂。"
                },
                {
                  "en": "Be respectful of the animals — don't chase them or make loud noises.",
                  "zh": "尊重动物，别追它们或大声喊叫。"
                },
                {
                  "en": "Let's take some photos to remember this special day.",
                  "zh": "我们拍些照片记住这特别的一天。"
                }
              ],
              "B1": [
                {
                  "en": "Interacting with animals teaches us empathy and responsibility toward other living beings.",
                  "zh": "和动物互动教会我们对其他生命要有同理心和责任感。"
                },
                {
                  "en": "Let's observe the zookeeper's instructions carefully before entering the petting area.",
                  "zh": "进入互动区前，我们仔细听饲养员的指导。"
                },
                {
                  "en": "Not all animals enjoy being touched — let's learn to read their body language.",
                  "zh": "不是所有动物都喜欢被摸，我们学会观察它们的肢体语言。"
                }
              ]
            }
          },
          "zoo_play": {
            "name": "休息游玩",
            "keywords": [
              "休息",
              "喝水",
              "吃东西",
              "纪念品",
              "商店",
              "坐下",
              "累了",
              "厕所"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Need a break?",
                  "zh": "要歇会儿吗？",
                  "keywords": [
                    "休息",
                    "歇"
                  ]
                },
                {
                  "en": "Let's sit down.",
                  "zh": "我们坐下吧。"
                },
                {
                  "en": "Have some juice!",
                  "zh": "喝点果汁！",
                  "keywords": [
                    "果汁",
                    "喝"
                  ]
                },
                {
                  "en": "I want that!",
                  "zh": "我要那个！"
                },
                {
                  "en": "Go home?",
                  "zh": "回家吗？"
                }
              ],
              "A1": [
                {
                  "en": "Are you tired? Let's take a break.",
                  "zh": "累了吗？我们休息一下。"
                },
                {
                  "en": "Let's have a snack and drink some water.",
                  "zh": "我们吃点零食喝点水。"
                },
                {
                  "en": "Do you want to buy a souvenir to remember today?",
                  "zh": "你想买个纪念品记住今天吗？"
                },
                {
                  "en": "Let's find the restroom before we continue.",
                  "zh": "我们找一下厕所再继续逛。"
                },
                {
                  "en": "What was your favorite animal today?",
                  "zh": "今天你最喜欢的动物是什么？"
                }
              ],
              "A2": [
                {
                  "en": "Let's sit in the shade for a while and recharge.",
                  "zh": "我们在阴凉处坐一会儿，充充电。"
                },
                {
                  "en": "You can pick one souvenir — let's choose something meaningful.",
                  "zh": "你可以挑一样纪念品，选个有意义的。"
                },
                {
                  "en": "Let's review the map to see what we haven't visited yet.",
                  "zh": "我们看看地图，还有什么没逛到。"
                },
                {
                  "en": "It's been a wonderful day at the zoo. What did you learn?",
                  "zh": "今天在动物园真开心，你学到了什么？"
                }
              ],
              "B1": [
                {
                  "en": "Let's budget for a souvenir — decide how much you want to spend before we look.",
                  "zh": "我们给纪念品定个预算，先决定花多少钱再看。"
                },
                {
                  "en": "Taking breaks is important — it helps us enjoy the experience without getting exhausted.",
                  "zh": "适时休息很重要，这样我们才能尽兴而不累垮。"
                },
                {
                  "en": "Let's write down our favorite moments from today in a journal when we get home.",
                  "zh": "回家后我们把今天最喜欢的瞬间写在日记里。"
                }
              ]
            }
          },
          "souvenir_shop": {
            "id": "souvenir_shop",
            "name": "纪念品商店",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look at the toys!",
                  "zh": "看这些玩具！",
                  "keywords": [
                    "玩具",
                    "看"
                  ]
                },
                {
                  "en": "Pick one thing.",
                  "zh": "选一样。",
                  "keywords": [
                    "选",
                    "一样"
                  ]
                },
                {
                  "en": "Look at this one!",
                  "zh": "看这个！",
                  "keywords": [
                    "看",
                    "这个"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Which stuffed animal do you like?",
                  "zh": "你喜欢哪个毛绒玩具？",
                  "keywords": [
                    "毛绒玩具",
                    "喜欢"
                  ]
                },
                {
                  "en": "We can buy one small souvenir.",
                  "zh": "我们可以买一个小纪念品。",
                  "keywords": [
                    "纪念品",
                    "买"
                  ]
                },
                {
                  "en": "This panda keychain is adorable.",
                  "zh": "这个熊猫钥匙扣好可爱。",
                  "keywords": [
                    "熊猫",
                    "钥匙扣"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "Let's pick a souvenir to remember our trip to the zoo.",
                  "zh": "我们挑个纪念品来纪念动物园之旅吧。",
                  "keywords": [
                    "纪念品",
                    "纪念"
                  ]
                },
                {
                  "en": "This T-shirt has a tiger on it!",
                  "zh": "这件T恤上有老虎！",
                  "keywords": [
                    "T恤",
                    "老虎"
                  ]
                },
                {
                  "en": "We should save some money for snacks too.",
                  "zh": "我们也得留点钱买零食。",
                  "keywords": [
                    "留钱",
                    "零食"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "Instead of buying souvenirs, let's take lots of photos.",
                  "zh": "与其买纪念品，不如多拍些照片。",
                  "keywords": [
                    "照片",
                    "纪念品"
                  ]
                },
                {
                  "en": "The money from souvenirs helps the zoo take care of the animals.",
                  "zh": "纪念品的收入帮助动物园照顾动物。",
                  "keywords": [
                    "收入",
                    "照顾"
                  ]
                },
                {
                  "en": "Which souvenir will remind you most of today's adventure?",
                  "zh": "哪个纪念品最能让你想起今天的冒险？",
                  "keywords": [
                    "提醒",
                    "冒险"
                  ]
                }
              ]
            }
          }
        }
      },
      "playground_venue": {
        "name": "游乐场",
        "keywords": [
          "游乐场",
          "游乐园",
          "主题乐园",
          "迪士尼",
          "室内游乐场",
          "蹦床",
          "海洋球",
          "滑梯"
        ],
        "sub_scenes": {
          "indoor_play": {
            "name": "室内游乐场",
            "keywords": [
              "室内游乐场",
              "蹦床",
              "海洋球",
              "滑梯",
              "攀爬"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Wheee! So fun!",
                  "zh": "呜——真好玩！"
                },
                {
                  "en": "Jump! Jump!",
                  "zh": "跳！跳！"
                },
                {
                  "en": "Ball pit!",
                  "zh": "海洋球！"
                },
                {
                  "en": "Up we go!",
                  "zh": "上去咯！"
                },
                {
                  "en": "Again!",
                  "zh": "再来一次！"
                }
              ],
              "A1": [
                {
                  "en": "Do you want to go down the slide?",
                  "zh": "你想滑滑梯吗？"
                },
                {
                  "en": "Let's jump on the trampoline together!",
                  "zh": "我们一起跳蹦床！"
                },
                {
                  "en": "Be careful when you climb.",
                  "zh": "爬的时候小心点。"
                },
                {
                  "en": "Can you find the blue ball in the ball pit?",
                  "zh": "你能在海洋球里找到蓝色的球吗？"
                },
                {
                  "en": "Take turns with the other kids.",
                  "zh": "跟其他小朋友轮流玩。"
                }
              ],
              "A2": [
                {
                  "en": "Let's take off our shoes before going into the play area.",
                  "zh": "进游乐区前先把鞋脱了。"
                },
                {
                  "en": "Make sure you follow the safety rules posted on the wall.",
                  "zh": "一定要遵守墙上贴的安全规则。"
                },
                {
                  "en": "If you need help, just call me — I'll be watching from here.",
                  "zh": "需要帮忙就叫我，我在这边看着。"
                },
                {
                  "en": "Great job sharing the trampoline with that little boy!",
                  "zh": "跟那个小男孩分享蹦床，做得真棒！"
                }
              ],
              "B1": [
                {
                  "en": "Indoor playgrounds are great for developing motor skills and social interaction.",
                  "zh": "室内游乐场对发展运动能力和社交互动很有帮助。"
                },
                {
                  "en": "Let's set a time limit so we don't lose track of time.",
                  "zh": "我们定个时间限制，免得忘了时间。"
                },
                {
                  "en": "Notice how you're building confidence by trying new physical challenges.",
                  "zh": "你有没有发现，尝试新的体能挑战让你越来越自信了。"
                }
              ]
            }
          },
          "theme_park": {
            "name": "主题乐园",
            "keywords": [
              "主题乐园",
              "迪士尼",
              "环球",
              "乐园",
              "游乐园"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Mickey Mouse!",
                  "zh": "米老鼠！"
                },
                {
                  "en": "This place is amazing!",
                  "zh": "这个地方太棒了！"
                },
                {
                  "en": "Let's go there!",
                  "zh": "去那边！"
                },
                {
                  "en": "Castle!",
                  "zh": "城堡！"
                },
                {
                  "en": "Fireworks!",
                  "zh": "烟花！"
                }
              ],
              "A1": [
                {
                  "en": "Look at the castle! It's like a fairy tale.",
                  "zh": "看那座城堡！像童话里的一样。"
                },
                {
                  "en": "Which ride do you want to go on first?",
                  "zh": "你想先玩哪个项目？"
                },
                {
                  "en": "Let's check the show schedule so we don't miss the parade.",
                  "zh": "我们看看表演时间表，别错过巡游。"
                },
                {
                  "en": "Do you want to take a picture with the characters?",
                  "zh": "你想和卡通人物合影吗？"
                }
              ],
              "A2": [
                {
                  "en": "Let's plan our day so we can see all the highlights.",
                  "zh": "我们规划一下今天的行程，把精彩的全玩到。"
                },
                {
                  "en": "Some rides have height requirements — let's check before we line up.",
                  "zh": "有些项目有身高要求，排队前先看看。"
                },
                {
                  "en": "Let's use the park app to check wait times for each ride.",
                  "zh": "我们用乐园 App 看看每个项目的排队时间。"
                },
                {
                  "en": "The fireworks show is at 8 PM — let's find a good spot early.",
                  "zh": "烟花表演是晚上八点，我们早点占个好位置。"
                }
              ],
              "B1": [
                {
                  "en": "Theme parks are designed to create immersive experiences — notice all the details around us.",
                  "zh": "主题乐园的设计就是要创造沉浸式体验，注意我们周围的每个细节。"
                },
                {
                  "en": "Let's prioritize the most popular rides early in the day when lines are shorter.",
                  "zh": "我们趁早上人少先玩最热门的项目。"
                },
                {
                  "en": "Managing expectations is important — we might not be able to do everything in one day.",
                  "zh": "管理好预期很重要，一天可能玩不完所有项目。"
                }
              ]
            }
          },
          "ride_wait": {
            "name": "排队玩项目",
            "keywords": [
              "排队",
              "等待",
              "过山车",
              "旋转木马",
              "摩天轮",
              "碰碰车",
              "海盗船",
              "项目"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "It's almost our turn!",
                  "zh": "快到我们了！"
                },
                {
                  "en": "Our turn!",
                  "zh": "轮到我们了！"
                },
                {
                  "en": "Go go go!",
                  "zh": "快快快！"
                },
                {
                  "en": "Safety first!",
                  "zh": "安全第一！"
                },
                {
                  "en": "Whee!",
                  "zh": "哇！"
                }
              ],
              "A1": [
                {
                  "en": "We have to wait in line. Let's be patient.",
                  "zh": "我们要排队，耐心点。"
                },
                {
                  "en": "It's almost our turn! Are you excited?",
                  "zh": "快轮到我们了！兴奋吗？"
                },
                {
                  "en": "Do you want to ride the carousel or the bumper cars?",
                  "zh": "你想坐旋转木马还是碰碰车？"
                },
                {
                  "en": "Hold on to the bar and stay seated.",
                  "zh": "抓好扶手，坐稳别动。"
                },
                {
                  "en": "Was that fun? Do you want to go again?",
                  "zh": "好玩吗？想再玩一次吗？"
                }
              ],
              "A2": [
                {
                  "en": "The line is quite long — let's play a word game while we wait.",
                  "zh": "队排得挺长，我们边等边玩个词语游戏吧。"
                },
                {
                  "en": "This ride goes really fast. Are you sure you're ready for it?",
                  "zh": "这个项目速度很快，你确定准备好了吗？"
                },
                {
                  "en": "Let's observe the ride first to see if it looks too scary.",
                  "zh": "我们先看看这个项目，判断一下会不会太吓人。"
                },
                {
                  "en": "Remember, it's okay to feel nervous — everyone does before a big ride.",
                  "zh": "记住，紧张是正常的，每个人坐大项目前都会紧张。"
                }
              ],
              "B1": [
                {
                  "en": "Waiting in line is a good opportunity to practice patience and observation skills.",
                  "zh": "排队是练习耐心和观察力的好机会。"
                },
                {
                  "en": "Let's talk about the physics behind roller coasters — gravity and momentum make them work.",
                  "zh": "我们聊聊过山车的物理原理，重力和动量让它运转。"
                },
                {
                  "en": "Conquering your fear of rides is a great way to build courage and resilience.",
                  "zh": "克服对游乐项目的恐惧是锻炼勇气和韧性的好方法。"
                }
              ]
            }
          },
          "rest_snack": {
            "name": "休息吃零食",
            "keywords": [
              "休息",
              "喝水",
              "零食",
              "冰淇淋",
              "棉花糖",
              "累了",
              "坐下",
              "吃"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Want a drink?",
                  "zh": "想喝东西吗？",
                  "keywords": [
                    "喝",
                    "饮料"
                  ]
                },
                {
                  "en": "Let's take a break and have some water.",
                  "zh": "我们休息一下喝点水。"
                },
                {
                  "en": "Let's find a spot to rest.",
                  "zh": "我们找个地方休息。"
                },
                {
                  "en": "Cotton candy!",
                  "zh": "棉花糖！"
                },
                {
                  "en": "Let's rest.",
                  "zh": "休息一下。"
                }
              ],
              "A1": [
                {
                  "en": "Are you tired? Let's sit down and rest.",
                  "zh": "累了吗？我们坐下来休息。"
                },
                {
                  "en": "Let's get some ice cream to cool down.",
                  "zh": "我们买个冰淇淋凉快一下。"
                },
                {
                  "en": "Drink some water — it's important to stay hydrated.",
                  "zh": "喝点水，保持水分很重要。"
                },
                {
                  "en": "What snack would you like? Popcorn or cotton candy?",
                  "zh": "你想吃什么零食？爆米花还是棉花糖？"
                }
              ],
              "A2": [
                {
                  "en": "Let's find a shaded spot to sit and recharge for a bit.",
                  "zh": "我们找个阴凉的地方坐坐，充充电。"
                },
                {
                  "en": "We've been walking a lot — let's take a proper break and have a snack.",
                  "zh": "走了不少路了，我们好好休息一下，吃点东西。"
                },
                {
                  "en": "Let's share a treat — what flavor ice cream should we get?",
                  "zh": "我们合买一个奖励自己，要什么口味的冰淇淋？"
                },
                {
                  "en": "Check if you need sunscreen again — we've been out in the sun for a while.",
                  "zh": "看看需不需要再涂防晒，我们在外面晒了好一会儿了。"
                }
              ],
              "B1": [
                {
                  "en": "It's smart to pace ourselves — amusement parks are marathons, not sprints.",
                  "zh": "有节奏地玩才聪明，游乐园是马拉松不是短跑。"
                },
                {
                  "en": "Let's review what rides we've done and what's left on our list.",
                  "zh": "我们回顾一下玩了哪些项目，还有哪些没玩。"
                },
                {
                  "en": "Treats are part of the experience, but let's balance them with healthy snacks too.",
                  "zh": "零食是体验的一部分，但我们也要搭配些健康的。"
                }
              ]
            }
          },
          "water_rides": {
            "id": "water_rides",
            "name": "水上项目",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Water! Splash!",
                  "zh": "水！哗啦！",
                  "keywords": [
                    "水",
                    "哗啦"
                  ]
                },
                {
                  "en": "Get wet!",
                  "zh": "弄湿了！",
                  "keywords": [
                    "湿"
                  ]
                },
                {
                  "en": "Grab the handle!",
                  "zh": "抓住扶手！",
                  "keywords": [
                    "扶手",
                    "抓"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Let's go on the water ride!",
                  "zh": "我们去玩水上项目吧！",
                  "keywords": [
                    "水上项目",
                    "玩"
                  ]
                },
                {
                  "en": "You'll get a little wet, but it's fun!",
                  "zh": "你会弄湿一点，但很好玩！",
                  "keywords": [
                    "弄湿",
                    "好玩"
                  ]
                },
                {
                  "en": "Hold onto the raft tightly.",
                  "zh": "抓紧筏子。",
                  "keywords": [
                    "抓紧",
                    "筏子"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "Put on your raincoat so you don't get too wet.",
                  "zh": "穿上雨衣，别弄得太湿。",
                  "keywords": [
                    "雨衣",
                    "湿"
                  ]
                },
                {
                  "en": "The log flume is my favorite water ride!",
                  "zh": "激流勇进是我最喜欢的水上项目！",
                  "keywords": [
                    "激流勇进",
                    "喜欢"
                  ]
                },
                {
                  "en": "Let's put our phones in a waterproof bag first.",
                  "zh": "我们先把手机放进防水袋。",
                  "keywords": [
                    "手机",
                    "防水袋"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "This water ride has a 20-meter drop at the end!",
                  "zh": "这个水上项目最后有20米的落差！",
                  "keywords": [
                    "落差",
                    "米"
                  ]
                },
                {
                  "en": "Don't worry, the splash zone isn't as scary as it looks.",
                  "zh": "别担心，溅水区没有看起来那么可怕。",
                  "keywords": [
                    "溅水",
                    "可怕"
                  ]
                },
                {
                  "en": "Water rides are a great way to cool down on a hot day.",
                  "zh": "水上项目是大热天降温的好方法。",
                  "keywords": [
                    "降温",
                    "热天"
                  ]
                }
              ]
            }
          }
        }
      },
      "haircut": {
        "name": "理发店",
        "keywords": [
          "理发",
          "剪头发",
          "发型",
          "理发店",
          "头发",
          "剪"
        ],
        "sub_scenes": {
          "wait_haircut": {
            "name": "等待理发",
            "keywords": [
              "排队",
              "等待",
              "理发店",
              "轮到",
              "等一下"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Wait here.",
                  "zh": "在这里等。"
                },
                {
                  "en": "Your turn soon.",
                  "zh": "快轮到你了。"
                },
                {
                  "en": "Look at the book.",
                  "zh": "看看书。"
                }
              ],
              "A1": [
                {
                  "en": "We need to wait for our turn. Let's sit here.",
                  "zh": "我们要等轮到我们，先坐这里。"
                },
                {
                  "en": "There are two people ahead of us.",
                  "zh": "我们前面还有两个人。"
                },
                {
                  "en": "Would you like to look at a magazine while we wait?",
                  "zh": "你想边等边看杂志吗？"
                },
                {
                  "en": "The barber will call your name when it's your turn.",
                  "zh": "轮到你了理发师会叫你名字。"
                }
              ],
              "A2": [
                {
                  "en": "Let's check in at the front desk first, then wait for our number to be called.",
                  "zh": "我们先在前台登记，然后等叫号。"
                },
                {
                  "en": "While we're waiting, let's look at some hairstyle pictures to get ideas.",
                  "zh": "等的时候我们看看发型图片，找找灵感。"
                },
                {
                  "en": "The waiting area has some toys — you can play quietly until it's our turn.",
                  "zh": "等候区有些玩具，你可以安静地玩到轮到我们。"
                }
              ],
              "B1": [
                {
                  "en": "Let's use this waiting time productively — we can practice some English phrases about haircuts.",
                  "zh": "我们利用等的时间学几句关于理发的英语。"
                },
                {
                  "en": "Good things come to those who wait — patience is a valuable skill to practice.",
                  "zh": "好事多磨，耐心是值得练习的品质。"
                }
              ]
            }
          },
          "get_haircut": {
            "name": "剪头发",
            "keywords": [
              "理发",
              "剪头发",
              "发型",
              "短一点",
              "剪短",
              "剪",
              "推子",
              "剪刀"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "A little shorter.",
                  "zh": "再短一点。"
                },
                {
                  "en": "It tickles!",
                  "zh": "好痒！"
                },
                {
                  "en": "Almost done!",
                  "zh": "快好了！"
                },
                {
                  "en": "Look at you!",
                  "zh": "看看你！"
                }
              ],
              "A1": [
                {
                  "en": "Tell the barber how short you want your hair.",
                  "zh": "告诉理发师你想剪多短。"
                },
                {
                  "en": "Keep your head still while the barber is cutting.",
                  "zh": "理发师剪的时候头别动。"
                },
                {
                  "en": "Do you want it shorter on the sides?",
                  "zh": "两边要再短一点吗？"
                },
                {
                  "en": "The clipper might feel a little tickly, but it won't hurt.",
                  "zh": "推子可能会有点痒，但不会疼。"
                },
                {
                  "en": "You're being so brave! Almost finished.",
                  "zh": "你真勇敢！快剪完了。"
                }
              ],
              "A2": [
                {
                  "en": "Let's describe the hairstyle you want — short on the sides and a little longer on top?",
                  "zh": "我们描述一下你想要什么发型，两边短上面稍长？"
                },
                {
                  "en": "It's okay to tell the barber if something feels uncomfortable.",
                  "zh": "如果觉得不舒服，告诉理发师没关系的。"
                },
                {
                  "en": "A good haircut makes you feel fresh and confident.",
                  "zh": "剪个好发型会让你感觉清爽又自信。"
                },
                {
                  "en": "Remember to close your eyes when they spray water on your hair.",
                  "zh": "喷水的时候记得闭眼。"
                }
              ],
              "B1": [
                {
                  "en": "Communicating clearly with your barber ensures you get the result you want.",
                  "zh": "跟理发师清晰沟通，才能剪出你想要的效果。"
                },
                {
                  "en": "A haircut is a form of self-expression — what image do you want to present?",
                  "zh": "发型是一种自我表达，你想呈现什么形象？"
                },
                {
                  "en": "Taking care of your appearance shows self-respect and consideration for others.",
                  "zh": "打理好外表体现了自尊和对他人的尊重。"
                }
              ]
            }
          },
          "check_result": {
            "name": "看效果",
            "keywords": [
              "照镜子",
              "好看",
              "帅",
              "漂亮",
              "洗头",
              "吹干",
              "满意"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "So handsome!",
                  "zh": "好帅！"
                },
                {
                  "en": "Pretty!",
                  "zh": "好看！"
                },
                {
                  "en": "What a great haircut!",
                  "zh": "发型真好看！"
                },
                {
                  "en": "Good job!",
                  "zh": "剪得好！"
                }
              ],
              "A1": [
                {
                  "en": "Look in the mirror! Do you like your new haircut?",
                  "zh": "照照镜子！喜欢你的新发型吗？"
                },
                {
                  "en": "You look so handsome with your new haircut!",
                  "zh": "你剪了新发型好帅！"
                },
                {
                  "en": "Let's wash off the loose hair first.",
                  "zh": "我们先把碎头发洗掉。"
                },
                {
                  "en": "The barber did a great job, didn't they?",
                  "zh": "理发师剪得真好，是吧？"
                },
                {
                  "en": "Let's take a picture to show daddy!",
                  "zh": "我们拍张照给爸爸看！"
                }
              ],
              "A2": [
                {
                  "en": "Take a good look in the mirror from all angles. Are you happy with it?",
                  "zh": "从各个角度好好照照镜子，满意吗？"
                },
                {
                  "en": "A fresh haircut is a great confidence booster, isn't it?",
                  "zh": "新发型真让人自信满满，对吧？"
                },
                {
                  "en": "If there's anything you want adjusted, we can ask the barber now.",
                  "zh": "有什么想调整的，现在就可以跟理发师说。"
                },
                {
                  "en": "Remember to thank the barber for their work.",
                  "zh": "记得感谢理发师的工作。"
                }
              ],
              "B1": [
                {
                  "en": "How you feel about your appearance matters more than what others think.",
                  "zh": "你自己对发型的感觉比别人的看法更重要。"
                },
                {
                  "en": "Giving constructive feedback to the barber helps them understand your preferences for next time.",
                  "zh": "给理发师建设性的反馈，下次他们就更了解你的偏好了。"
                },
                {
                  "en": "A good grooming routine is part of presenting your best self to the world.",
                  "zh": "良好的仪表习惯是向世界展示最好自己的一部分。"
                }
              ]
            }
          },
          "wash_hair": {
            "id": "wash_hair",
            "name": "洗头发",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Wash your hair!",
                  "zh": "洗头发！",
                  "keywords": [
                    "洗头",
                    "头发"
                  ]
                },
                {
                  "en": "Tilt your head back!",
                  "zh": "头往后仰！",
                  "keywords": [
                    "后仰",
                    "头"
                  ]
                },
                {
                  "en": "Water is warm.",
                  "zh": "水是温的。",
                  "keywords": [
                    "水",
                    "温"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Lean back and let them wash your hair.",
                  "zh": "往后靠，让他们帮你洗头。",
                  "keywords": [
                    "往后靠",
                    "洗头"
                  ]
                },
                {
                  "en": "The shampoo smells nice, doesn't it?",
                  "zh": "洗发水很香，对吧？",
                  "keywords": [
                    "洗发水",
                    "香"
                  ]
                },
                {
                  "en": "Keep your eyes closed so the water doesn't get in.",
                  "zh": "闭上眼睛，别让水进去。",
                  "keywords": [
                    "闭眼",
                    "水"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "They're going to massage your scalp — it feels relaxing!",
                  "zh": "他们要给你按摩头皮——很舒服的！",
                  "keywords": [
                    "按摩",
                    "头皮"
                  ]
                },
                {
                  "en": "Tell them if the water is too hot or too cold.",
                  "zh": "如果水太热或太冷就告诉他们。",
                  "keywords": [
                    "太热",
                    "太冷"
                  ]
                },
                {
                  "en": "After washing, they'll wrap your hair in a towel.",
                  "zh": "洗完他们会用毛巾包住你的头发。",
                  "keywords": [
                    "毛巾",
                    "包"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "A scalp massage helps improve blood circulation.",
                  "zh": "头皮按摩有助于促进血液循环。",
                  "keywords": [
                    "按摩",
                    "血液循环"
                  ]
                },
                {
                  "en": "They use conditioner after shampoo to make your hair soft.",
                  "zh": "他们用完洗发水后用护发素让头发柔软。",
                  "keywords": [
                    "护发素",
                    "柔软"
                  ]
                },
                {
                  "en": "Would you like to try a different scented shampoo today?",
                  "zh": "今天想试试不同香味的洗发水吗？",
                  "keywords": [
                    "香味",
                    "洗发水"
                  ]
                }
              ]
            }
          },
          "chat_stylist": {
            "id": "chat_stylist",
            "name": "和理发师聊天",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Introduce yourself!",
                  "zh": "介绍一下自己！",
                  "keywords": [
                    "介绍",
                    "自己"
                  ]
                },
                {
                  "en": "Smile at the stylist!",
                  "zh": "对理发师笑笑！",
                  "keywords": [
                    "笑",
                    "理发师"
                  ]
                },
                {
                  "en": "Give a big smile!",
                  "zh": "笑一个大大的！",
                  "keywords": [
                    "笑",
                    "大大"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Tell the stylist how you want your hair cut.",
                  "zh": "告诉理发师你想怎么剪。",
                  "keywords": [
                    "告诉",
                    "剪"
                  ]
                },
                {
                  "en": "Can you say 'just a little trim please'?",
                  "zh": "你能说「请稍微修一下」吗？",
                  "keywords": [
                    "修",
                    "稍微"
                  ]
                },
                {
                  "en": "The stylist is very friendly, don't be shy.",
                  "zh": "理发师很友善，别害羞。",
                  "keywords": [
                    "友善",
                    "害羞"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "If you don't like something, politely tell the stylist.",
                  "zh": "如果你不喜欢什么，礼貌地告诉理发师。",
                  "keywords": [
                    "礼貌",
                    "不喜欢"
                  ]
                },
                {
                  "en": "You can ask the stylist how long they've been cutting hair.",
                  "zh": "你可以问理发师他们理发多久了。",
                  "keywords": [
                    "问",
                    "多久"
                  ]
                },
                {
                  "en": "The stylist might ask you about school — what will you say?",
                  "zh": "理发师可能会问你学校的事——你怎么回答？",
                  "keywords": [
                    "学校",
                    "回答"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "It's good practice to describe exactly the hairstyle you want.",
                  "zh": "准确描述你想要的发型是个好习惯。",
                  "keywords": [
                    "描述",
                    "发型"
                  ]
                },
                {
                  "en": "A good stylist will listen carefully and offer suggestions.",
                  "zh": "好的理发师会认真听并给出建议。",
                  "keywords": [
                    "听",
                    "建议"
                  ]
                },
                {
                  "en": "Don't hesitate to speak up if something feels uncomfortable.",
                  "zh": "如果觉得不舒服，不要犹豫说出来。",
                  "keywords": [
                    "不舒服",
                    "说出来"
                  ]
                }
              ]
            }
          }
        }
      },
      "museums": {
        "name": "展馆游览",
        "keywords": [
          "博物馆",
          "科技馆",
          "水族馆",
          "图书馆",
          "展览",
          "海洋馆",
          "书店"
        ],
        "sub_scenes": {
          "museum": {
            "name": "博物馆/科技馆",
            "keywords": [
              "博物馆",
              "科技馆",
              "展览",
              "历史",
              "科学",
              "恐龙",
              "太空",
              "化石"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look at this!",
                  "zh": "看这个！"
                },
                {
                  "en": "Dinosaur!",
                  "zh": "恐龙！"
                },
                {
                  "en": "So big!",
                  "zh": "好大！"
                },
                {
                  "en": "Don't touch.",
                  "zh": "不要碰。"
                },
                {
                  "en": "Wow!",
                  "zh": "哇！"
                }
              ],
              "A1": [
                {
                  "en": "Look at the dinosaur skeleton! It's huge!",
                  "zh": "看那个恐龙骨架！好大！"
                },
                {
                  "en": "This museum has so many interesting things to see.",
                  "zh": "这个博物馆有好多有趣的东西。"
                },
                {
                  "en": "Can you find the oldest thing in this room?",
                  "zh": "你能找到这个房间里最古老的东西吗？"
                },
                {
                  "en": "Let's read the sign to learn more about this exhibit.",
                  "zh": "我们看看牌子了解这个展品。"
                },
                {
                  "en": "Remember, we look with our eyes, not our hands.",
                  "zh": "记住，用眼睛看，不用手摸。"
                }
              ],
              "A2": [
                {
                  "en": "Let's explore the different sections — which era interests you most?",
                  "zh": "我们探索不同的展区，你对哪个时代最感兴趣？"
                },
                {
                  "en": "This artifact is over a thousand years old — imagine the stories it could tell.",
                  "zh": "这件文物有一千多年历史了，想象一下它见证的故事。"
                },
                {
                  "en": "Let's use the audio guide to learn more details about the exhibits.",
                  "zh": "我们用语音导览了解更多展品细节。"
                },
                {
                  "en": "Museums help us understand how people lived in the past.",
                  "zh": "博物馆帮我们了解过去的人是怎么生活的。"
                }
              ],
              "B1": [
                {
                  "en": "Museums preserve our cultural heritage — every artifact tells a piece of human history.",
                  "zh": "博物馆保存着我们的文化遗产，每件文物都讲述着人类历史的一页。"
                },
                {
                  "en": "Let's discuss how scientific discoveries have changed our understanding of the world.",
                  "zh": "我们讨论一下科学发现如何改变了我们对世界的认知。"
                },
                {
                  "en": "Taking notes or sketching what you see can deepen your museum experience.",
                  "zh": "做笔记或画草图能让你的博物馆体验更深刻。"
                }
              ]
            }
          },
          "aquarium": {
            "name": "水族馆/海洋馆",
            "keywords": [
              "水族馆",
              "海洋馆",
              "鱼",
              "鲨鱼",
              "海豚",
              "水母",
              "海龟"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Fish! Fish!",
                  "zh": "鱼！鱼！"
                },
                {
                  "en": "So pretty!",
                  "zh": "好漂亮！"
                },
                {
                  "en": "Nemo!",
                  "zh": "尼莫！"
                },
                {
                  "en": "Big shark!",
                  "zh": "大鲨鱼！"
                },
                {
                  "en": "Look up!",
                  "zh": "看上面！"
                }
              ],
              "A1": [
                {
                  "en": "Look at all the colorful fish swimming together!",
                  "zh": "看那些五颜六色的鱼一起游！"
                },
                {
                  "en": "The jellyfish look like they're dancing in the water.",
                  "zh": "水母看起来像在水里跳舞。"
                },
                {
                  "en": "Can you spot the turtle? It's hiding behind the rock.",
                  "zh": "你能找到海龟吗？它躲在石头后面。"
                },
                {
                  "en": "The shark is swimming right above us!",
                  "zh": "鲨鱼就在我们头顶上游！"
                },
                {
                  "en": "Let's count how many different kinds of fish we can see.",
                  "zh": "我们数数能看到多少种不同的鱼。"
                }
              ],
              "A2": [
                {
                  "en": "Let's read about each species — some of these fish can change colors!",
                  "zh": "我们了解一下每种生物，有些鱼能变色！"
                },
                {
                  "en": "The ocean tunnel makes us feel like we're walking underwater.",
                  "zh": "海底隧道让我们感觉像在水下行走。"
                },
                {
                  "en": "Many of these sea creatures are endangered due to ocean pollution.",
                  "zh": "很多海洋生物因为海洋污染而濒危。"
                },
                {
                  "en": "Let's watch the dolphin show — they're incredibly intelligent animals.",
                  "zh": "我们看海豚表演，它们是非常聪明的动物。"
                }
              ],
              "B1": [
                {
                  "en": "Marine ecosystems are incredibly complex — every species plays a vital role.",
                  "zh": "海洋生态系统极其复杂，每个物种都扮演着关键角色。"
                },
                {
                  "en": "Let's discuss what we can do to reduce plastic waste and protect the oceans.",
                  "zh": "我们讨论一下能做什么来减少塑料垃圾、保护海洋。"
                },
                {
                  "en": "Aquariums play an important role in marine conservation and public education.",
                  "zh": "水族馆在海洋保护和公众教育方面发挥着重要作用。"
                }
              ]
            }
          },
          "library": {
            "name": "图书馆/书店",
            "keywords": [
              "图书馆",
              "书店",
              "看书",
              "借书",
              "读书",
              "安静"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Shh, quiet!",
                  "zh": "嘘，安静！"
                },
                {
                  "en": "Pick a book.",
                  "zh": "选本书。"
                },
                {
                  "en": "Read to me!",
                  "zh": "读给我听！"
                },
                {
                  "en": "Put it on the shelf!",
                  "zh": "放回书架上！",
                  "keywords": [
                    "书架",
                    "放回"
                  ]
                },
                {
                  "en": "One more!",
                  "zh": "再来一本！"
                }
              ],
              "A1": [
                {
                  "en": "Let's find some books to read together.",
                  "zh": "我们找几本书一起读。"
                },
                {
                  "en": "Remember to use your quiet voice in the library.",
                  "zh": "记住在图书馆要用小声说话。"
                },
                {
                  "en": "Which book do you want to borrow?",
                  "zh": "你想借哪本书？"
                },
                {
                  "en": "Let's put the books back where we found them.",
                  "zh": "我们把书放回原来的地方。"
                },
                {
                  "en": "Would you like a storybook or a picture book?",
                  "zh": "你要故事书还是图画书？"
                }
              ],
              "A2": [
                {
                  "en": "Let's explore different sections — fiction, science, history, and art.",
                  "zh": "我们探索不同的区域——小说、科学、历史和艺术。"
                },
                {
                  "en": "The library card lets us borrow books for free — let's sign up for one.",
                  "zh": "借书卡可以免费借书，我们办一张。"
                },
                {
                  "en": "Let's check the reading level to make sure the book is right for you.",
                  "zh": "我们看看阅读等级，确保这本书适合你。"
                },
                {
                  "en": "Reading regularly is one of the best ways to improve your English.",
                  "zh": "定期阅读是提高英语最好的方法之一。"
                }
              ],
              "B1": [
                {
                  "en": "Libraries are treasure troves of knowledge — you can learn about almost anything here.",
                  "zh": "图书馆是知识的宝库，你几乎可以在这里学到任何东西。"
                },
                {
                  "en": "Let's set a reading goal — maybe one new book every two weeks?",
                  "zh": "我们定个阅读目标，比如每两周读一本新书？"
                },
                {
                  "en": "Learning to use the library catalog system is a valuable research skill.",
                  "zh": "学会使用图书馆目录系统是一项宝贵的研究技能。"
                }
              ]
            }
          },
          "planetarium": {
            "id": "planetarium",
            "name": "天文馆",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look up at the dome!",
                  "zh": "抬头看穹顶！",
                  "keywords": [
                    "抬头",
                    "穹顶"
                  ]
                },
                {
                  "en": "So many stars!",
                  "zh": "好多星星！",
                  "keywords": [
                    "星星",
                    "多"
                  ]
                },
                {
                  "en": "It's dark here.",
                  "zh": "这里好暗。",
                  "keywords": [
                    "暗"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "The planetarium shows us the night sky.",
                  "zh": "天文馆给我们展示夜空。",
                  "keywords": [
                    "天文馆",
                    "夜空"
                  ]
                },
                {
                  "en": "Can you find the Big Dipper?",
                  "zh": "你能找到北斗七星吗？",
                  "keywords": [
                    "北斗七星",
                    "找"
                  ]
                },
                {
                  "en": "The stars look so real in here!",
                  "zh": "这里的星星看起来好真实！",
                  "keywords": [
                    "星星",
                    "真实"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "The dome-shaped ceiling makes it feel like we're under the real sky.",
                  "zh": "圆顶天花板让我们感觉在真正的星空下。",
                  "keywords": [
                    "圆顶",
                    "天花板"
                  ]
                },
                {
                  "en": "They're explaining how constellations got their names.",
                  "zh": "他们在讲解星座是怎么得名的。",
                  "keywords": [
                    "星座",
                    "得名"
                  ]
                },
                {
                  "en": "Let's learn about the planets in our solar system.",
                  "zh": "我们来了解一下太阳系的行星吧。",
                  "keywords": [
                    "行星",
                    "太阳系"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "The projector can simulate the night sky from any location on Earth.",
                  "zh": "投影仪可以模拟地球上任何地方的夜空。",
                  "keywords": [
                    "投影仪",
                    "模拟"
                  ]
                },
                {
                  "en": "Ancient civilizations used stars for navigation and telling time.",
                  "zh": "古代文明用星星来导航和计时。",
                  "keywords": [
                    "古代",
                    "导航"
                  ]
                },
                {
                  "en": "Would you like to attend the astronomy workshop after the show?",
                  "zh": "看完演出你想参加天文工作坊吗？",
                  "keywords": [
                    "工作坊",
                    "天文"
                  ]
                }
              ]
            }
          },
          "art_gallery": {
            "id": "art_gallery",
            "name": "美术馆",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look at the painting!",
                  "zh": "看这幅画！",
                  "keywords": [
                    "画",
                    "看"
                  ]
                },
                {
                  "en": "What do you see?",
                  "zh": "你看到了什么？",
                  "keywords": [
                    "看到",
                    "什么"
                  ]
                },
                {
                  "en": "What a masterpiece!",
                  "zh": "真是杰作！",
                  "keywords": [
                    "杰作",
                    "厉害"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "This painting has so many bright colors.",
                  "zh": "这幅画有好多鲜艳的颜色。",
                  "keywords": [
                    "画",
                    "颜色"
                  ]
                },
                {
                  "en": "What do you see in this picture?",
                  "zh": "你在这幅画里看到了什么？",
                  "keywords": [
                    "看到",
                    "画"
                  ]
                },
                {
                  "en": "The artist used a big brush for this one.",
                  "zh": "艺术家用大笔画了这幅。",
                  "keywords": [
                    "艺术家",
                    "笔"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "This is an oil painting — can you see the thick strokes?",
                  "zh": "这是油画——你能看到厚厚的笔触吗？",
                  "keywords": [
                    "油画",
                    "笔触"
                  ]
                },
                {
                  "en": "Every artist has their own unique style.",
                  "zh": "每个艺术家都有自己独特的风格。",
                  "keywords": [
                    "风格",
                    "独特"
                  ]
                },
                {
                  "en": "Let's read the description to learn what the painting is about.",
                  "zh": "我们读一下说明来了解这幅画讲什么。",
                  "keywords": [
                    "说明",
                    "了解"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "Abstract art doesn't try to look like real things — it expresses feelings.",
                  "zh": "抽象艺术不试图画得像真东西——它表达情感。",
                  "keywords": [
                    "抽象",
                    "情感"
                  ]
                },
                {
                  "en": "This exhibition features works from the Impressionist period.",
                  "zh": "这个展览展出了印象派时期的作品。",
                  "keywords": [
                    "印象派",
                    "展览"
                  ]
                },
                {
                  "en": "Would you like to try sketching one of the paintings yourself?",
                  "zh": "你想试着临摹其中一幅画吗？",
                  "keywords": [
                    "临摹",
                    "素描"
                  ]
                }
              ]
            }
          }
        }
      }
    }
  },
  {
    "id": "festivals",
    "name": "节日与特殊日子",
    "name_en": "Special Days",
    "icon": "🎉",
    "categories": {
      "birthday": {
        "name": "生日庆祝",
        "keywords": [
          "生日",
          "派对",
          "蛋糕",
          "蜡烛",
          "礼物",
          "许愿",
          "庆祝",
          "气球",
          "生日歌",
          "朋友",
          "聚会"
        ],
        "sub_scenes": {
          "birthday_party": {
            "name": "生日派对",
            "keywords": [
              "生日",
              "派对",
              "庆祝",
              "蛋糕",
              "蜡烛",
              "礼物",
              "许愿"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Happy birthday to you!",
                  "zh": "祝你生日快乐！"
                },
                {
                  "en": "Make a wish!",
                  "zh": "许个愿！"
                },
                {
                  "en": "Blow out the candles!",
                  "zh": "吹蜡烛！"
                },
                {
                  "en": "Open your present!",
                  "zh": "拆礼物！"
                },
                {
                  "en": "What a big cake!",
                  "zh": "好大的蛋糕！"
                },
                {
                  "en": "So many balloons!",
                  "zh": "好多气球！"
                },
                {
                  "en": "You're a big kid now!",
                  "zh": "你是大孩子啦！"
                }
              ],
              "A1": [
                {
                  "en": "Happy birthday, my sweetheart! You're growing up so fast!",
                  "zh": "生日快乐，宝贝！你长得太快了！"
                },
                {
                  "en": "How old are you today? Can you show me with your fingers?",
                  "zh": "今天你几岁了？用手指比给我看看？"
                },
                {
                  "en": "Let's put the candles on the cake. How many do we need?",
                  "zh": "我们把蜡烛插上吧，需要几根？"
                },
                {
                  "en": "Close your eyes and make a wish. Don't tell anyone!",
                  "zh": "闭上眼睛许愿，别说出来哦！"
                },
                {
                  "en": "Who came to your party? Can you name all your friends?",
                  "zh": "谁来参加你的派对了？能说出所有朋友的名字吗？"
                },
                {
                  "en": "This present is from grandma. What do you say?",
                  "zh": "这个礼物是奶奶送的，你该说什么？"
                }
              ],
              "A2": [
                {
                  "en": "Let's decorate the room before the guests arrive.",
                  "zh": "客人来之前我们把房间布置一下。"
                },
                {
                  "en": "I can't believe you're turning seven! It feels like yesterday you were a baby.",
                  "zh": "真不敢相信你七岁了！感觉你昨天还是个小宝宝。"
                },
                {
                  "en": "Let's write thank-you cards to everyone who gave you gifts.",
                  "zh": "我们给每个送礼物的人写感谢卡吧。"
                },
                {
                  "en": "You get to choose what we have for dinner — it's your special day!",
                  "zh": "今天晚饭你来选——今天是你的特别日子！"
                },
                {
                  "en": "I'm so proud of the kind and wonderful person you're becoming.",
                  "zh": "看到你成长为一个善良美好的人，我特别骄傲。"
                }
              ],
              "B1": [
                {
                  "en": "Another year older means another year of growth, learning, and wonderful memories.",
                  "zh": "又长一岁，意味着又一年成长、学习和美好回忆。"
                },
                {
                  "en": "I want you to know that the greatest gift isn't what's in the boxes — it's having you in our lives.",
                  "zh": "我想让你知道，最好的礼物不是盒子里的东西——而是有你出现在我们的生命里。"
                },
                {
                  "en": "No matter how old you get, you'll always be my baby. Happy birthday.",
                  "zh": "不管你多大，你永远是我的宝贝。生日快乐。"
                }
              ]
            }
          },
          "invite_friends": {
            "id": "invite_friends",
            "name": "邀请朋友",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Come to my party!",
                  "zh": "来参加我的派对！",
                  "keywords": [
                    "派对",
                    "来"
                  ]
                },
                {
                  "en": "It's my birthday!",
                  "zh": "是我的生日！",
                  "keywords": [
                    "生日"
                  ]
                },
                {
                  "en": "You're invited!",
                  "zh": "你被邀请了！",
                  "keywords": [
                    "邀请"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "I'm having a birthday party, will you come?",
                  "zh": "我要办生日派对，你来吗？",
                  "keywords": [
                    "派对",
                    "来"
                  ]
                },
                {
                  "en": "The party is on Saturday at my house.",
                  "zh": "派对周六在我家。",
                  "keywords": [
                    "周六",
                    "家"
                  ]
                },
                {
                  "en": "Please bring your smile, no gifts needed!",
                  "zh": "请带上笑容，不用带礼物！",
                  "keywords": [
                    "笑容",
                    "礼物"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "I'm so excited to invite you to my birthday celebration!",
                  "zh": "我好激动邀请你来参加我的生日庆祝！",
                  "keywords": [
                    "激动",
                    "邀请"
                  ]
                },
                {
                  "en": "The party starts at 2 PM — don't be late!",
                  "zh": "派对下午两点开始——别迟到！",
                  "keywords": [
                    "开始",
                    "迟到"
                  ]
                },
                {
                  "en": "We'll have cake, games, and lots of fun.",
                  "zh": "我们有蛋糕、游戏和很多好玩的。",
                  "keywords": [
                    "蛋糕",
                    "游戏"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "I'd be honored if you could join us for my birthday dinner.",
                  "zh": "如果你能来参加我的生日晚餐我会很荣幸。",
                  "keywords": [
                    "荣幸",
                    "晚餐"
                  ]
                },
                {
                  "en": "Feel free to bring a plus-one if you'd like.",
                  "zh": "如果你想的话可以带一个人来。",
                  "keywords": [
                    "带人",
                    "随意"
                  ]
                },
                {
                  "en": "The theme is 'under the sea' — dress accordingly if you want!",
                  "zh": "主题是「海底世界」——想的话可以穿相应的衣服！",
                  "keywords": [
                    "主题",
                    "海底"
                  ]
                }
              ]
            }
          },
          "decorate": {
            "id": "decorate",
            "name": "布置场地",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Put up balloons!",
                  "zh": "挂气球！",
                  "keywords": [
                    "气球",
                    "挂"
                  ]
                },
                {
                  "en": "Hang the banner!",
                  "zh": "挂横幅！",
                  "keywords": [
                    "横幅",
                    "挂"
                  ]
                },
                {
                  "en": "So colorful!",
                  "zh": "好鲜艳！",
                  "keywords": [
                    "鲜艳"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Let's blow up the balloons together.",
                  "zh": "我们一起吹气球吧。",
                  "keywords": [
                    "吹",
                    "气球"
                  ]
                },
                {
                  "en": "Where should we hang the 'Happy Birthday' banner?",
                  "zh": "「生日快乐」横幅挂哪里？",
                  "keywords": [
                    "横幅",
                    "挂"
                  ]
                },
                {
                  "en": "The streamers make the room look so festive!",
                  "zh": "彩带让房间看起来好有节日气氛！",
                  "keywords": [
                    "彩带",
                    "气氛"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "Can you help me tape the balloons to the wall?",
                  "zh": "你能帮我把气球粘到墙上吗？",
                  "keywords": [
                    "粘",
                    "气球"
                  ]
                },
                {
                  "en": "Let's arrange the party hats and noisemakers on the table.",
                  "zh": "我们把派对帽和哨子摆在桌上吧。",
                  "keywords": [
                    "派对帽",
                    "哨子"
                  ]
                },
                {
                  "en": "The decorations really transform the living room!",
                  "zh": "装饰真的改变了客厅的样子！",
                  "keywords": [
                    "装饰",
                    "改变"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "We should coordinate the color scheme — what about blue and gold?",
                  "zh": "我们应该统一配色——蓝金色怎么样？",
                  "keywords": [
                    "配色",
                    "统一"
                  ]
                },
                {
                  "en": "DIY decorations are more meaningful than store-bought ones.",
                  "zh": "自己做的装饰比买的更有意义。",
                  "keywords": [
                    "DIY",
                    "有意义"
                  ]
                },
                {
                  "en": "Let's create a photo wall with pictures from the past year.",
                  "zh": "我们做一个照片墙，放过去一年的照片。",
                  "keywords": [
                    "照片墙",
                    "过去"
                  ]
                }
              ]
            }
          },
          "birthday_game": {
            "id": "birthday_game",
            "name": "生日游戏",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's play a game!",
                  "zh": "我们玩游戏！",
                  "keywords": [
                    "游戏",
                    "玩"
                  ]
                },
                {
                  "en": "Pin the tail!",
                  "zh": "贴尾巴！",
                  "keywords": [
                    "贴",
                    "尾巴"
                  ]
                },
                {
                  "en": "Spin around!",
                  "zh": "转圈圈！",
                  "keywords": [
                    "转圈",
                    "转"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Let's play 'Pin the Tail on the Donkey'!",
                  "zh": "我们玩「给驴贴尾巴」吧！",
                  "keywords": [
                    "驴",
                    "贴尾巴"
                  ]
                },
                {
                  "en": "Close your eyes and spin around three times.",
                  "zh": "闭上眼睛转三圈。",
                  "keywords": [
                    "闭眼",
                    "转圈"
                  ]
                },
                {
                  "en": "You're so close! Just a little to the left!",
                  "zh": "你很接近了！再往左一点！",
                  "keywords": [
                    "接近",
                    "左"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "The winner of the musical chairs gets a small prize!",
                  "zh": "抢椅子游戏的赢家有小奖品！",
                  "keywords": [
                    "抢椅子",
                    "奖品"
                  ]
                },
                {
                  "en": "Let's do a treasure hunt — I've hidden clues around the house.",
                  "zh": "我们玩寻宝吧——我在屋里藏了线索。",
                  "keywords": [
                    "寻宝",
                    "线索"
                  ]
                },
                {
                  "en": "Everyone sit in a circle for pass-the-parcel.",
                  "zh": "大家围坐一圈玩传包裹。",
                  "keywords": [
                    "围圈",
                    "传包裹"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "We've organized a scavenger hunt with riddles to solve.",
                  "zh": "我们策划了一个需要解谜的寻宝游戏。",
                  "keywords": [
                    "寻宝",
                    "解谜"
                  ]
                },
                {
                  "en": "The piñata is filled with candy and small toys — take turns hitting it!",
                  "zh": "彩罐里装满了糖果和小玩具——轮流敲！",
                  "keywords": [
                    "彩罐",
                    "糖果"
                  ]
                },
                {
                  "en": "Let's do a quiz about the birthday person — who knows them best?",
                  "zh": "我们做关于寿星的问答——谁最了解他们？",
                  "keywords": [
                    "问答",
                    "寿星"
                  ]
                }
              ]
            }
          },
          "thank_guests": {
            "id": "thank_guests",
            "name": "感谢来宾",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Thank you for coming!",
                  "zh": "谢谢你来！",
                  "keywords": [
                    "谢谢",
                    "来"
                  ]
                },
                {
                  "en": "Bye bye!",
                  "zh": "拜拜！",
                  "keywords": [
                    "拜拜"
                  ]
                },
                {
                  "en": "See you soon!",
                  "zh": "回头见！",
                  "keywords": [
                    "回头见"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Thank you for the lovely gift!",
                  "zh": "谢谢你的漂亮礼物！",
                  "keywords": [
                    "谢谢",
                    "礼物"
                  ]
                },
                {
                  "en": "I'm so glad you came to my party.",
                  "zh": "很高兴你来我的派对。",
                  "keywords": [
                    "高兴",
                    "来"
                  ]
                },
                {
                  "en": "Let's take a photo together before you go!",
                  "zh": "走之前我们合个影吧！",
                  "keywords": [
                    "合影",
                    "照片"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "Thank you for making my birthday so special!",
                  "zh": "谢谢你让我的生日这么特别！",
                  "keywords": [
                    "特别",
                    "生日"
                  ]
                },
                {
                  "en": "I'll send you the party photos later.",
                  "zh": "我回头把派对照片发给你。",
                  "keywords": [
                    "照片",
                    "发"
                  ]
                },
                {
                  "en": "Your presence was the best gift I could ask for.",
                  "zh": "你的到来就是我最好的礼物。",
                  "keywords": [
                    "到来",
                    "礼物"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "I truly appreciate you taking the time to celebrate with me.",
                  "zh": "我真的很感谢你花时间来和我一起庆祝。",
                  "keywords": [
                    "感谢",
                    "花时间"
                  ]
                },
                {
                  "en": "I'll write you a thank-you note for the wonderful present.",
                  "zh": "我会给你写感谢卡谢谢你的精美礼物。",
                  "keywords": [
                    "感谢卡",
                    "礼物"
                  ]
                },
                {
                  "en": "This birthday was unforgettable because of friends like you.",
                  "zh": "因为有像你这样的朋友，这个生日令人难忘。",
                  "keywords": [
                    "难忘",
                    "朋友"
                  ]
                }
              ]
            }
          }
        }
      },
      "chinese_festivals": {
        "name": "中国传统节日",
        "keywords": [
          "春节",
          "中秋节",
          "端午节",
          "元宵节",
          "过年",
          "拜年",
          "红包",
          "放烟花",
          "月饼",
          "粽子",
          "汤圆",
          "灯笼",
          "龙舟"
        ],
        "sub_scenes": {
          "spring_festival": {
            "name": "春节",
            "keywords": [
              "春节",
              "过年",
              "拜年",
              "红包",
              "放烟花",
              "鞭炮",
              "春联",
              "年夜饭"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Happy New Year!",
                  "zh": "新年快乐！"
                },
                {
                  "en": "Look! Fireworks!",
                  "zh": "看！烟花！"
                },
                {
                  "en": "Red envelopes! So lucky!",
                  "zh": "红包！好幸运！"
                },
                {
                  "en": "Let's visit grandma and grandpa!",
                  "zh": "我们去看爷爷奶奶！"
                }
              ],
              "A1": [
                {
                  "en": "Happy Chinese New Year! Did you get any red envelopes?",
                  "zh": "春节快乐！收到红包了吗？"
                },
                {
                  "en": "Let's watch the fireworks together. They're so beautiful!",
                  "zh": "我们一起看烟花吧，太美了！"
                },
                {
                  "en": "What do we say when we get a red envelope? 'Thank you and happy new year!'",
                  "zh": "收到红包该说什么？'谢谢，新年快乐！'"
                },
                {
                  "en": "We're having a big family dinner tonight. Everyone will be there!",
                  "zh": "今晚我们吃团圆饭，每个人都会来！"
                }
              ],
              "A2": [
                {
                  "en": "The Spring Festival is the most important holiday in Chinese culture.",
                  "zh": "春节是中国文化中最重要的节日。"
                },
                {
                  "en": "Red is a lucky color in China. That's why we wear red and give red envelopes.",
                  "zh": "红色在中国是幸运的颜色，所以我们穿红色、发红包。"
                },
                {
                  "en": "Let's help paste the Spring Festival couplets on the door.",
                  "zh": "我们帮忙在门上贴春联吧。"
                }
              ],
              "B1": [
                {
                  "en": "Traditions like the Spring Festival connect us to our culture and to generations before us.",
                  "zh": "像春节这样的传统将我们与文化和前几代人联系在一起。"
                },
                {
                  "en": "The best part of any holiday isn't the food or gifts — it's being together with family.",
                  "zh": "任何节日最好的部分不是食物或礼物——而是和家人在一起。"
                }
              ]
            }
          },
          "mid_autumn": {
            "name": "中秋节",
            "keywords": [
              "中秋节",
              "月饼",
              "赏月",
              "灯笼"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Look at the moon! So round!",
                  "zh": "看月亮！好圆！"
                },
                {
                  "en": "Let's eat mooncakes!",
                  "zh": "我们吃月饼吧！"
                },
                {
                  "en": "Yummy mooncake!",
                  "zh": "月饼真好吃！"
                }
              ],
              "A1": [
                {
                  "en": "Tonight is the Mid-Autumn Festival. Let's look at the full moon together.",
                  "zh": "今晚是中秋节，我们一起看满月吧。"
                },
                {
                  "en": "Mooncakes are a special treat for this festival. What flavor do you like?",
                  "zh": "月饼是这个节日的特别美食，你喜欢什么口味的？"
                },
                {
                  "en": "The moon is so bright and round tonight. It's the most beautiful moon of the year!",
                  "zh": "今晚月亮又亮又圆，是一年中最美的月亮！"
                }
              ],
              "A2": [
                {
                  "en": "The Mid-Autumn Festival is about family reunion — being together under the same moon.",
                  "zh": "中秋节是关于家庭团圆——在同一轮明月下相聚。"
                },
                {
                  "en": "There's a legend about a lady named Chang'e who lives on the moon. Want to hear it?",
                  "zh": "有个传说，说有位叫嫦娥的女士住在月亮上，想听吗？"
                }
              ],
              "B1": [
                {
                  "en": "The Mid-Autumn Festival reminds us that no matter how far apart we are, we all share the same moon.",
                  "zh": "中秋节提醒我们，无论相隔多远，我们都共享同一轮明月。"
                }
              ]
            }
          },
          "dragon_boat": {
            "name": "端午节",
            "keywords": [
              "端午节",
              "粽子",
              "龙舟",
              "屈原"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's eat zongzi!",
                  "zh": "我们吃粽子吧！"
                },
                {
                  "en": "Look at the dragon boats! Go go go!",
                  "zh": "看龙舟！加油加油！"
                }
              ],
              "A1": [
                {
                  "en": "Today is the Dragon Boat Festival. We eat special rice dumplings called zongzi.",
                  "zh": "今天是端午节，我们吃一种特别的米粽叫粽子。"
                },
                {
                  "en": "Let's watch the dragon boat race! The teams are paddling so fast!",
                  "zh": "我们看龙舟比赛吧！队员们划得好快！"
                },
                {
                  "en": "Zongzi is made of sticky rice wrapped in bamboo leaves. Do you like it?",
                  "zh": "粽子是用竹叶包的糯米做的，你喜欢吗？"
                }
              ],
              "A2": [
                {
                  "en": "The Dragon Boat Festival honors a great poet named Qu Yuan from ancient China.",
                  "zh": "端午节是为了纪念中国古代一位伟大的诗人屈原。"
                },
                {
                  "en": "Dragon boat racing is now a sport enjoyed all around the world!",
                  "zh": "龙舟赛现在是全世界都喜欢的运动！"
                }
              ],
              "B1": [
                {
                  "en": "Festivals like this keep our cultural heritage alive and pass it on to the next generation.",
                  "zh": "这样的节日让我们的文化遗产保持活力，传承给下一代。"
                }
              ]
            }
          },
          "lantern": {
            "name": "元宵节",
            "keywords": [
              "元宵节",
              "汤圆",
              "花灯",
              "灯笼",
              "猜灯谜"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's eat tangyuan! Yummy!",
                  "zh": "我们吃汤圆吧！好吃！"
                },
                {
                  "en": "Look at the pretty lanterns!",
                  "zh": "看漂亮的花灯！"
                }
              ],
              "A1": [
                {
                  "en": "Today is the Lantern Festival — the last day of Chinese New Year celebrations.",
                  "zh": "今天是元宵节——春节庆祝活动的最后一天。"
                },
                {
                  "en": "We eat sweet rice balls called tangyuan. They're round like the full moon.",
                  "zh": "我们吃甜甜的汤圆，它们像满月一样圆。"
                },
                {
                  "en": "Let's go see the lantern displays! They're so colorful and beautiful.",
                  "zh": "我们去看花灯展吧！五颜六色的好漂亮。"
                }
              ],
              "A2": [
                {
                  "en": "The Lantern Festival marks the end of the Spring Festival celebrations.",
                  "zh": "元宵节标志着春节庆祝活动的结束。"
                },
                {
                  "en": "People write riddles on lanterns for others to solve — it's a fun tradition!",
                  "zh": "人们在灯笼上写谜语给别人猜——是个有趣的传统！"
                }
              ],
              "B1": [
                {
                  "en": "The round shape of tangyuan symbolizes family togetherness and completeness.",
                  "zh": "汤圆的圆形象征着家庭的团圆和圆满。"
                }
              ]
            }
          },
          "qingming": {
            "id": "qingming",
            "name": "清明节",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "We go outside today.",
                  "zh": "今天我们去户外。",
                  "keywords": [
                    "户外",
                    "今天"
                  ]
                },
                {
                  "en": "Fly a kite!",
                  "zh": "放风筝！",
                  "keywords": [
                    "风筝",
                    "放"
                  ]
                },
                {
                  "en": "Green grass!",
                  "zh": "绿绿的草！",
                  "keywords": [
                    "草",
                    "绿"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Today is Qingming Festival, we visit our ancestors.",
                  "zh": "今天是清明节，我们去祭拜祖先。",
                  "keywords": [
                    "清明节",
                    "祭拜"
                  ]
                },
                {
                  "en": "Let's fly a kite — it's a Qingming tradition.",
                  "zh": "我们放风筝吧——这是清明节的传统。",
                  "keywords": [
                    "风筝",
                    "传统"
                  ]
                },
                {
                  "en": "Spring is here, look at the beautiful flowers.",
                  "zh": "春天来了，看这些漂亮的花。",
                  "keywords": [
                    "春天",
                    "花"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "Qingming is a day to remember and honor our ancestors.",
                  "zh": "清明节是纪念和缅怀祖先的日子。",
                  "keywords": [
                    "纪念",
                    "缅怀"
                  ]
                },
                {
                  "en": "We clean the graves and offer flowers and food.",
                  "zh": "我们清扫墓地，献上鲜花和食物。",
                  "keywords": [
                    "扫墓",
                    "鲜花"
                  ]
                },
                {
                  "en": "After paying respects, we can enjoy a spring outing.",
                  "zh": "祭拜之后我们可以踏青游玩。",
                  "keywords": [
                    "踏青",
                    "游玩"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "Qingming Festival combines remembrance with the celebration of spring.",
                  "zh": "清明节融合了缅怀先人和庆祝春天。",
                  "keywords": [
                    "融合",
                    "缅怀"
                  ]
                },
                {
                  "en": "Flying kites on Qingming symbolizes sending messages to heaven.",
                  "zh": "清明节放风筝象征着向天上传信。",
                  "keywords": [
                    "象征",
                    "传信"
                  ]
                },
                {
                  "en": "This festival teaches us to cherish both our roots and the present moment.",
                  "zh": "这个节日教会我们珍惜根源和当下。",
                  "keywords": [
                    "珍惜",
                    "根源"
                  ]
                }
              ]
            }
          }
        }
      },
      "western_festivals": {
        "name": "西方节日",
        "keywords": [
          "圣诞节",
          "万圣节",
          "复活节",
          "圣诞老人",
          "南瓜",
          "彩蛋"
        ],
        "sub_scenes": {
          "christmas": {
            "name": "圣诞节",
            "keywords": [
              "圣诞节",
              "圣诞老人",
              "圣诞树",
              "礼物",
              "驯鹿"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Merry Christmas!",
                  "zh": "圣诞快乐！"
                },
                {
                  "en": "Look! A Christmas tree!",
                  "zh": "看！圣诞树！"
                },
                {
                  "en": "Santa is coming! Ho ho ho!",
                  "zh": "圣诞老人来了！嚯嚯嚯！"
                },
                {
                  "en": "So many presents!",
                  "zh": "好多礼物！"
                }
              ],
              "A1": [
                {
                  "en": "Let's decorate the Christmas tree together. Where should we put the star?",
                  "zh": "我们一起装饰圣诞树吧，星星放哪里？"
                },
                {
                  "en": "Did you write a letter to Santa? What did you ask for?",
                  "zh": "你给圣诞老人写信了吗？要了什么？"
                },
                {
                  "en": "Let's hang the stockings by the fireplace for Santa to fill.",
                  "zh": "我们把袜子挂在壁炉旁，圣诞老人会装满的。"
                },
                {
                  "en": "Christmas is about giving, not just receiving. Let's think about what we can give others.",
                  "zh": "圣诞节在于给予，不只是收获。我们想想能给别人什么。"
                }
              ],
              "A2": [
                {
                  "en": "Christmas is celebrated all around the world, but each country has its own traditions.",
                  "zh": "全世界都庆祝圣诞节，但每个国家有自己的传统。"
                },
                {
                  "en": "The spirit of Christmas is about kindness, generosity, and spending time with loved ones.",
                  "zh": "圣诞精神是关于善良、慷慨和与所爱之人共度时光。"
                }
              ],
              "B1": [
                {
                  "en": "The best gifts aren't the most expensive ones — they're the ones chosen with thought and love.",
                  "zh": "最好的礼物不是最贵的——而是用心和爱挑选的。"
                }
              ]
            }
          },
          "halloween": {
            "name": "万圣节",
            "keywords": [
              "万圣节",
              "南瓜",
              "装扮",
              "糖果",
              "trick or treat"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Happy Halloween!",
                  "zh": "万圣节快乐！"
                },
                {
                  "en": "Look at the pumpkin!",
                  "zh": "看南瓜！"
                },
                {
                  "en": "What a cool costume!",
                  "zh": "好酷的装扮！"
                },
                {
                  "en": "Trick or treat! Give me candy!",
                  "zh": "不给糖就捣蛋！给我糖果！"
                }
              ],
              "A1": [
                {
                  "en": "What do you want to dress up as for Halloween?",
                  "zh": "万圣节你想装扮成什么？"
                },
                {
                  "en": "Let's carve a pumpkin together and make a jack-o'-lantern!",
                  "zh": "我们一起刻南瓜做南瓜灯吧！"
                },
                {
                  "en": "When we go trick-or-treating, remember to say thank you for the candy.",
                  "zh": "去要糖果的时候，记得说谢谢。"
                },
                {
                  "en": "Your costume looks amazing! Let's take a picture!",
                  "zh": "你的装扮太棒了！我们拍张照！"
                }
              ],
              "A2": [
                {
                  "en": "Halloween comes from an ancient tradition. Now it's all about fun, costumes, and candy!",
                  "zh": "万圣节源自古老的传统，现在全是好玩、装扮和糖果！"
                },
                {
                  "en": "Let's make some spooky decorations for the house — fake spider webs and paper bats!",
                  "zh": "我们做些吓人的装饰——假蜘蛛网和纸蝙蝠！"
                }
              ],
              "B1": [
                {
                  "en": "Halloween is a celebration of imagination — it's the one night you can be anyone you want to be.",
                  "zh": "万圣节是想象力的庆典——这是唯一一个你可以成为任何你想成为的人物的夜晚。"
                }
              ]
            }
          },
          "easter": {
            "name": "复活节",
            "keywords": [
              "复活节",
              "彩蛋",
              "兔子",
              "巧克力"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Happy Easter!",
                  "zh": "复活节快乐！"
                },
                {
                  "en": "Find the eggs!",
                  "zh": "找彩蛋！"
                },
                {
                  "en": "Look! A chocolate bunny!",
                  "zh": "看！巧克力兔子！"
                }
              ],
              "A1": [
                {
                  "en": "Let's have an Easter egg hunt! I've hidden some eggs in the garden.",
                  "zh": "我们来找复活节彩蛋吧！我在花园里藏了一些。"
                },
                {
                  "en": "The Easter Bunny brought you some chocolate eggs!",
                  "zh": "复活节兔子给你带了巧克力蛋！"
                },
                {
                  "en": "Can you find all the hidden eggs? Let's count them together.",
                  "zh": "你能找到所有藏的蛋吗？我们一起数。"
                }
              ],
              "A2": [
                {
                  "en": "Easter celebrates new life and the arrival of spring.",
                  "zh": "复活节庆祝新生命和春天的到来。"
                },
                {
                  "en": "Let's decorate some real eggs with paint and stickers. They'll be beautiful!",
                  "zh": "我们用颜料和贴纸装饰真鸡蛋吧，会很漂亮的！"
                }
              ],
              "B1": [
                {
                  "en": "Different cultures celebrate spring in different ways, but they all share the theme of renewal and hope.",
                  "zh": "不同文化以不同方式庆祝春天，但都共享重生和希望的主题。"
                }
              ]
            }
          },
          "thanksgiving": {
            "id": "thanksgiving",
            "name": "感恩节",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Turkey! Yum!",
                  "zh": "火鸡！好吃！",
                  "keywords": [
                    "火鸡",
                    "好吃"
                  ]
                },
                {
                  "en": "Hug your family!",
                  "zh": "抱抱家人！",
                  "keywords": [
                    "抱抱",
                    "家人"
                  ]
                },
                {
                  "en": "Family time!",
                  "zh": "家庭时光！",
                  "keywords": [
                    "家庭"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Thanksgiving is a day to say thank you.",
                  "zh": "感恩节是说谢谢的日子。",
                  "keywords": [
                    "感恩节",
                    "谢谢"
                  ]
                },
                {
                  "en": "We eat turkey and pumpkin pie on Thanksgiving.",
                  "zh": "感恩节我们吃火鸡和南瓜派。",
                  "keywords": [
                    "火鸡",
                    "南瓜派"
                  ]
                },
                {
                  "en": "What are you thankful for this year?",
                  "zh": "今年你感恩什么？",
                  "keywords": [
                    "感恩",
                    "今年"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "Thanksgiving is about gathering with family and sharing a big meal.",
                  "zh": "感恩节是和家人团聚、分享大餐的日子。",
                  "keywords": [
                    "团聚",
                    "大餐"
                  ]
                },
                {
                  "en": "The story of Thanksgiving goes back to the Pilgrims and Native Americans.",
                  "zh": "感恩节的由来可以追溯到清教徒和美洲原住民。",
                  "keywords": [
                    "清教徒",
                    "原住民"
                  ]
                },
                {
                  "en": "Let's go around the table and each share one thing we're grateful for.",
                  "zh": "我们绕着桌子每人分享一件感恩的事。",
                  "keywords": [
                    "绕桌子",
                    "分享"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "Thanksgiving reminds us to appreciate what we have rather than focus on what we lack.",
                  "zh": "感恩节提醒我们珍惜拥有的而非关注缺少的。",
                  "keywords": [
                    "珍惜",
                    "关注"
                  ]
                },
                {
                  "en": "Many families volunteer at food banks on Thanksgiving to help those in need.",
                  "zh": "很多家庭在感恩节去食物银行做志愿者帮助有需要的人。",
                  "keywords": [
                    "志愿者",
                    "食物银行"
                  ]
                },
                {
                  "en": "The tradition of pardoning a turkey at the White House is quite amusing.",
                  "zh": "白宫赦免火鸡的传统挺有趣的。",
                  "keywords": [
                    "赦免",
                    "白宫"
                  ]
                }
              ]
            }
          },
          "new_year": {
            "id": "new_year",
            "name": "新年",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "It's midnight!",
                  "zh": "午夜了！",
                  "keywords": [
                    "午夜",
                    "十二点"
                  ]
                },
                {
                  "en": "Count down! 3, 2, 1!",
                  "zh": "倒数！3，2，1！",
                  "keywords": [
                    "倒数"
                  ]
                },
                {
                  "en": "Fireworks! Boom!",
                  "zh": "烟花！砰！",
                  "keywords": [
                    "烟花",
                    "砰"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Let's count down to the new year together!",
                  "zh": "我们一起倒数迎接新年吧！",
                  "keywords": [
                    "倒数",
                    "新年"
                  ]
                },
                {
                  "en": "My New Year's resolution is to read more books.",
                  "zh": "我的新年决心是多读书。",
                  "keywords": [
                    "决心",
                    "读书"
                  ]
                },
                {
                  "en": "Look at the fireworks in the sky!",
                  "zh": "看天上的烟花！",
                  "keywords": [
                    "烟花",
                    "天上"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "At midnight, everyone shouts 'Happy New Year!' and hugs each other.",
                  "zh": "午夜时，大家喊「新年快乐」互相拥抱。",
                  "keywords": [
                    "午夜",
                    "拥抱"
                  ]
                },
                {
                  "en": "Making New Year's resolutions is a tradition around the world.",
                  "zh": "制定新年决心是世界各地的传统。",
                  "keywords": [
                    "决心",
                    "传统"
                  ]
                },
                {
                  "en": "Let's write down our goals for the coming year.",
                  "zh": "我们写下明年的目标吧。",
                  "keywords": [
                    "目标",
                    "写下"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "The New Year is a fresh start — a chance to become a better version of ourselves.",
                  "zh": "新年是全新的开始——成为更好版本的自己的机会。",
                  "keywords": [
                    "开始",
                    "更好"
                  ]
                },
                {
                  "en": "Different cultures celebrate New Year on different dates and in unique ways.",
                  "zh": "不同文化在不同日期以独特方式庆祝新年。",
                  "keywords": [
                    "文化",
                    "独特"
                  ]
                },
                {
                  "en": "Instead of resolutions, let's set specific, achievable goals for the year ahead.",
                  "zh": "与其下决心，不如为来年制定具体可行的目标。",
                  "keywords": [
                    "具体",
                    "目标"
                  ]
                }
              ]
            }
          }
        }
      },
      "family_days": {
        "name": "家庭纪念日",
        "keywords": [
          "母亲节",
          "父亲节",
          "儿童节",
          "拜访祖父母",
          "爷爷奶奶",
          "姥姥",
          "姥爷",
          "外公",
          "外婆",
          "亲戚",
          "长辈",
          "串门"
        ],
        "sub_scenes": {
          "parents_day": {
            "name": "母亲节/父亲节",
            "keywords": [
              "母亲节",
              "父亲节",
              "妈妈",
              "爸爸"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Happy Mother's Day! I love you!",
                  "zh": "母亲节快乐！我爱你！"
                },
                {
                  "en": "Happy Father's Day! You're the best!",
                  "zh": "父亲节快乐！你最棒！"
                },
                {
                  "en": "This is for you! A present!",
                  "zh": "这是给你的！礼物！"
                }
              ],
              "A1": [
                {
                  "en": "Let's make a special card for mommy. What should we draw?",
                  "zh": "我们给妈妈做张特别的卡片吧，画什么好呢？"
                },
                {
                  "en": "What do you want to do for daddy on Father's Day?",
                  "zh": "父亲节你想为爸爸做什么？"
                },
                {
                  "en": "Let's make breakfast in bed for mom — she'll be so surprised!",
                  "zh": "我们给妈妈做床上早餐吧——她一定会很惊喜的！"
                }
              ],
              "A2": [
                {
                  "en": "Mother's Day and Father's Day are about showing appreciation for everything our parents do.",
                  "zh": "母亲节和父亲节是表达对父母所做一切的感激。"
                },
                {
                  "en": "The best gift you can give is something made with your own hands and heart.",
                  "zh": "你能给的最好的礼物，是用自己的双手和心意做出来的。"
                }
              ],
              "B1": [
                {
                  "en": "Showing gratitude to the people who raised you is one of the most important things you can do.",
                  "zh": "对养育你的人表达感恩是你能做的最重要的事情之一。"
                }
              ]
            }
          },
          "grandparents": {
            "name": "拜访祖父母",
            "keywords": [
              "爷爷奶奶",
              "姥姥",
              "姥爷",
              "外公",
              "外婆",
              "探望",
              "串门"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Let's visit grandma!",
                  "zh": "我们去看奶奶！"
                },
                {
                  "en": "Give grandpa a hug!",
                  "zh": "抱抱爷爷！"
                },
                {
                  "en": "I love grandma!",
                  "zh": "我爱奶奶！"
                },
                {
                  "en": "Grandma has cookies!",
                  "zh": "奶奶有饼干！"
                },
                {
                  "en": "Wave bye bye!",
                  "zh": "挥手拜拜！"
                }
              ],
              "A1": [
                {
                  "en": "We're going to visit grandma and grandpa today. Are you excited?",
                  "zh": "今天去看爷爷奶奶，兴奋吗？"
                },
                {
                  "en": "What do you want to tell grandma about school?",
                  "zh": "你想跟奶奶说学校里的什么事？"
                },
                {
                  "en": "Grandma made your favorite food. What do you say?",
                  "zh": "奶奶做了你最爱吃的，你该说什么？"
                },
                {
                  "en": "Grandpa wants to see how tall you've gotten!",
                  "zh": "爷爷想看看你长多高了！"
                },
                {
                  "en": "Grandparents love spending time with you. It makes them so happy.",
                  "zh": "爷爷奶奶最喜欢和你在一起了，他们可开心了。"
                }
              ],
              "A2": [
                {
                  "en": "Let's prepare a little gift for grandma — maybe the drawing you made?",
                  "zh": "我们给奶奶准备个小礼物吧——你画的那幅画怎么样？"
                },
                {
                  "en": "Grandparents won't be around forever, so let's cherish every visit.",
                  "zh": "爷爷奶奶不会永远在，所以每次探望都要珍惜。"
                },
                {
                  "en": "Why don't you ask grandpa to tell you a story about when he was young?",
                  "zh": "你让爷爷讲一个他年轻时候的故事吧？"
                },
                {
                  "en": "I love seeing the bond between you and your grandparents. It's really special.",
                  "zh": "看到你和爷爷奶奶之间的感情真好，特别珍贵。"
                }
              ],
              "B1": [
                {
                  "en": "The relationship between grandparents and grandchildren is truly one of life's greatest treasures.",
                  "zh": "祖孙之间的感情真的是人生最宝贵的财富之一。"
                },
                {
                  "en": "Ask grandma about her childhood. You might be surprised how different the world was back then.",
                  "zh": "问问奶奶她的童年，你可能会惊讶于那时候的世界多么不同。"
                },
                {
                  "en": "Family isn't just about blood — it's about showing up, time and time again.",
                  "zh": "家庭不只是血缘——而是一次又一次的陪伴。"
                }
              ]
            }
          },
          "childrens_day": {
            "name": "儿童节",
            "keywords": [
              "儿童节",
              "六一"
            ],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Happy Children's Day!",
                  "zh": "儿童节快乐！"
                },
                {
                  "en": "Today is your special day!",
                  "zh": "今天是你的特别日子！"
                }
              ],
              "A1": [
                {
                  "en": "Happy Children's Day! What would you like to do today?",
                  "zh": "儿童节快乐！今天你想做什么？"
                },
                {
                  "en": "It's a day just for kids! Let's do something fun together.",
                  "zh": "这是专属于小朋友的日子！我们一起做点好玩的。"
                },
                {
                  "en": "Being a child is the most magical time. Enjoy every moment!",
                  "zh": "当小孩是最神奇的时光，享受每一刻！"
                }
              ],
              "A2": [
                {
                  "en": "Children's Day reminds us to celebrate the joy and wonder of childhood.",
                  "zh": "儿童节提醒我们庆祝童年的快乐和奇妙。"
                }
              ],
              "B1": [
                {
                  "en": "No matter how old you get, never lose your sense of wonder and playfulness.",
                  "zh": "不管多大，永远不要失去好奇心和玩心。"
                }
              ]
            }
          },
          "family_photo": {
            "id": "family_photo",
            "name": "拍全家福",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Everybody squeeze in!",
                  "zh": "大家挤一挤！",
                  "keywords": [
                    "挤",
                    "靠近"
                  ]
                },
                {
                  "en": "Everyone together!",
                  "zh": "大家一起！",
                  "keywords": [
                    "一起"
                  ]
                },
                {
                  "en": "Big smile!",
                  "zh": "大笑！",
                  "keywords": [
                    "笑"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Let's take a family photo together!",
                  "zh": "我们一起拍全家福吧！",
                  "keywords": [
                    "全家福",
                    "拍照"
                  ]
                },
                {
                  "en": "Stand next to Grandma and smile.",
                  "zh": "站在奶奶旁边笑一个。",
                  "keywords": [
                    "奶奶",
                    "笑"
                  ]
                },
                {
                  "en": "One, two, three — cheese!",
                  "zh": "一、二、三——茄子！",
                  "keywords": [
                    "一二三",
                    "茄子"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "Let's set up the tripod so everyone can be in the photo.",
                  "zh": "我们架好三脚架，这样大家都能入镜。",
                  "keywords": [
                    "三脚架",
                    "入镜"
                  ]
                },
                {
                  "en": "This family photo will be a wonderful memory for years to come.",
                  "zh": "这张全家福会成为未来多年的美好回忆。",
                  "keywords": [
                    "回忆",
                    "多年"
                  ]
                },
                {
                  "en": "Let's take one silly photo and one serious one!",
                  "zh": "我们拍一张搞怪的一张正经的！",
                  "keywords": [
                    "搞怪",
                    "正经"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "A family portrait captures a moment in time that we can cherish forever.",
                  "zh": "全家福捕捉了我们可以永远珍藏的时刻。",
                  "keywords": [
                    "捕捉",
                    "珍藏"
                  ]
                },
                {
                  "en": "Let's recreate this photo every year to see how we've changed.",
                  "zh": "我们每年重拍这张照片看看我们的变化。",
                  "keywords": [
                    "重拍",
                    "变化"
                  ]
                },
                {
                  "en": "The best family photos aren't posed — they capture genuine laughter.",
                  "zh": "最好的全家福不是摆拍的——它们捕捉的是真实的欢笑。",
                  "keywords": [
                    "摆拍",
                    "真实"
                  ]
                }
              ]
            }
          },
          "family_story": {
            "id": "family_story",
            "name": "讲家族故事",
            "keywords": [],
            "sentences": {
              "Pre-A1": [
                {
                  "en": "Tell me a story!",
                  "zh": "给我讲个故事！",
                  "keywords": [
                    "故事",
                    "讲"
                  ]
                },
                {
                  "en": "When you were little?",
                  "zh": "你小时候？",
                  "keywords": [
                    "小时候"
                  ]
                },
                {
                  "en": "Show me photos!",
                  "zh": "给我看照片！",
                  "keywords": [
                    "照片",
                    "看"
                  ]
                }
              ],
              "A1": [
                {
                  "en": "Grandma, tell me about when you were young.",
                  "zh": "奶奶，给我讲讲你小时候的事。",
                  "keywords": [
                    "奶奶",
                    "小时候"
                  ]
                },
                {
                  "en": "Is that Daddy in this old photo?",
                  "zh": "这张老照片里是爸爸吗？",
                  "keywords": [
                    "老照片",
                    "爸爸"
                  ]
                },
                {
                  "en": "Our family has so many interesting stories!",
                  "zh": "我们家有好多有趣的故事！",
                  "keywords": [
                    "有趣",
                    "故事"
                  ]
                }
              ],
              "A2": [
                {
                  "en": "Can you tell me how you and Grandpa first met?",
                  "zh": "你能讲讲你和爷爷是怎么认识的吗？",
                  "keywords": [
                    "爷爷",
                    "认识"
                  ]
                },
                {
                  "en": "I love hearing about what life was like when you were my age.",
                  "zh": "我喜欢听你讲你像我这么大时的生活。",
                  "keywords": [
                    "生活",
                    "年龄"
                  ]
                },
                {
                  "en": "Let's record these stories so we never forget them.",
                  "zh": "我们把这些故事录下来，这样永远不会忘。",
                  "keywords": [
                    "录下来",
                    "忘"
                  ]
                }
              ],
              "B1": [
                {
                  "en": "Family stories connect us to our roots and shape our identity.",
                  "zh": "家族故事把我们和根源连接起来，塑造了我们的身份。",
                  "keywords": [
                    "根源",
                    "身份"
                  ]
                },
                {
                  "en": "Every family has its legends — what's the most famous one in ours?",
                  "zh": "每个家庭都有传说——我们家最出名的是什么？",
                  "keywords": [
                    "传说",
                    "出名"
                  ]
                },
                {
                  "en": "Passing down oral history is a tradition as old as humanity itself.",
                  "zh": "口述历史的传承和人类本身一样古老。",
                  "keywords": [
                    "口述",
                    "传承"
                  ]
                }
              ]
            }
          }
        }
      }
    }
  }
];
