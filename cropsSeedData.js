/* eslint-disable max-len */
const cropsSeedData = [
  {
    name: 'Blackberries',
    description: `Deeply colored, sweet, clustered berries. The blackberry
    plant is a perennial plant that bears biennial stems or canes. The plant
    often has thorns, though some cultivars do not. Most varieties have greater
    berry yields from the second year on. In peak season, expect to harvest twice a week.`,
    sun_reqs: `Full Sun.`,
    sowing_method: `Transplant canes into soil or pot.`,
    spread: 75,
    row_spacing: 100,
    height: 175,
    days_to_maturity: `A blackberry bush will produce fruit for 3 to 4 weeks
      sometime between late June and early September in most areas of the U.S.
      Some blackberry bushes can produce fruit on first year canes (primocanes),
      but most will not produce fruit until 1 or 2 years after planting.`,
    photo_links: ["https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dc7793732390003750100.jpg?1428014965"]
  },
  {
    name: `Cucumber`,
    description: `Cucumbers are the fruit of a creeping vine. They are generally oblong and have a high water content.
      Their edible skin is often green but can also be yellow, white, or striped. The vine can be left to spread along
      the ground, or it can be trained to a trellis. The vine's large leaves hide the cucumbers and shade them.
      There are three main varieties of cucumber: slicing, pickling, and seedless.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Direct seed outdoors in groups of 2-3, 1/2" deep. Thin to 1 plant.`,
    spread: 90,
    row_spacing: 20,
    height: 20,
    days_to_maturity:
      `It mainly depends on variety, weather conditions, nutrients etc.,
      Generally cucumber plants take approximately 55 to 70 days from germination to harvesting stage.
      1. The germination stage alone takes 7 to 10 days.
      2. After germination the first male flower would be seen within 35 to 55 days roughly, which will be later followed by developing a female flower in one or two weeks (i.e., 42 to 62 days).
      3. The fertilized female flower will take 10 to 12 days to produce fruits.`,
    photo_links: [`https://www.thespruce.com/thmb/otEJQ4c7WgHNKUVJNFsTr5Opo4A=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/companion-plants-for-cucumbers-2540044-16-d691b5c0f19f44a8b1303e805be9c99d.jpg`]
  },
  {
    name: `Kale`,
    description:
     `Kale is a cultivar of the species Brassica oleracea. It has green or purple leaves that
      branch off from one to multiple upright stems and do not form a head like cabbage. The plant is usually
      grown as an annual, but if grown as a perennial, it will form seeds in the second year. Current popular
      varieties include Curly kale, Italian kale, and Red Russian kale (green leaves with pale purple stems).
      It can be grown as baby salad greens or for bunching adult leaves. Leaves are sweeter after a frost and
      delicious eaten raw, added to salads, sautéed, or added to stews and casseroles.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Direct seed. If planting indoors, harden off before transplanting seedlings outside.`,
    spread: 75,
    row_spacing: 45,
    height: 75,
    days_to_maturity:
     `Kale has a relatively fast growth rate and can grow from seed to harvest in about two months.
      It is a biennial plant that typically is grown as an annual. It is best planted in spring
      in cooler climates, and in late summer in warmer climates.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/55b6b7ce6465380003910200.jpg?1438037945`]
  },
  {
    name: `Broccoli`,
    description: `Broccoli has large flower heads known as "crowns" that are green to blue-green
    in color, grouped tightly together atop a thick stem, and surrounded by leaves. Broccoli
    resembles cauliflower, a different cultivar in its species. It thrives in cool weather.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Sow seeds indoors and transplant outside`,
    spread: 60,
    row_spacing: 40,
    height: 75,
    days_to_maturity: `Broccoli grown from seed will come to harvest in 100 to 150 days.
    Grown from transplants broccoli will come to harvest in 55 to 80 days. Cut buds
    when they are still green and tight. Cut the central head with five to six inches of stem.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54b4b5ea61306500020b0000.jpg?1421129190`]
  },
  {
    name: `Carrots`,
    description: `The carrot is a root vegetable. It is usually orange in color, but some cultivars are purple,
    black, red, white, and yellow. The most commonly eaten part of the plant is the taproot, but the greens
    are sometimes eaten as well. The leaves appear first, and the taproot grows more slowly beneath the soil.
    Fast-growing cultivars mature within three months of sowing the seed. Slower-maturing cultivars are harvested four months after sowing.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Direct Seed, thin to 3cm apart when seedlings are 8cm high`,
    spread: 5,
    row_spacing: 5,
    height: 10,
    days_to_maturity: `Harvesting. Carrots should be ready for harvest 70 to 80 days after planting.
    Pull them from the soil when the roots are 1 to 1½ inches in diameter. To avoid breaking the
    carrot while pulling, loosen the soil around the carrot with a spade.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58c312395865650004000000.jpg?1489179191`]
  },
  {
    name: `Cherry Tomatoes`,
    description: `Cherry tomatoes range in size from a thumbtip to the size of a golf ball.
    Their shape ranges from spherical to slightly oblong to pointed at the bottom.
    They are often red, but can also be yellow, green, striped, and even black.
    More oblong cherry tomatoes often share characteristics with plum tomatoes, and are
    known as grape tomatoes. Cherry tomatoes can be quite sweet (such as the Sungold or Sunsweet
    yellow varieties), more traditionally acidic, or deep in flavor. They are delicious for
    snacking, in salads, lightly roasted or grilled, or baked. They require little to no pruning unlike larger tomato plants.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Sow seeds indoors 6-8 weeks before the last expected frost`,
    spread: 45,
    row_spacing: 60,
    height: 60,
    days_to_maturity: `Because of the small fruit size, typically one to two inches, these high
    yielding plants often bear fruit in just 55 to 65 days, with some ready for harvest in as
    little as 45 days. However, there are those that can take up to 80 days to mature as well.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/57073ebd4a3af70003000006.jpg?1460092602`]
  },
  {
    name: `Brussels Sprouts`,
    description: `Brussels sprouts grow on the sides of stalks up to 91cm tall.
    The stalks are covered with leaves and the sprouts look like miniature cabbages.
    They are a cool weather crop and are delicious roasted.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Sow seeds indoors, harden off seedlings before transplanting outdoors`,
    spread: 30,
    row_spacing: 60,
    height: 91,
    days_to_maturity: `Brussels Sprouts are a slow growing vegetable, taking 26 to 31 weeks to reach
    maturity and produce a crop of sprouts. However, there are few other vegetables that
    can be enjoyed fresh from September right through February.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551e27c53732390003830100.jpg?1428039620`]
  },
  {
    name: `Potatoes`,
    description: `Potatoes are starchy root vegetables in the Solanaceae, or Nightshade, family,
    which also includes tomatoes, eggplants, and peppers. They originated in South America,
    and spread to become a worldwide staple. The leaves and fruit are usually poisonous
    and the stem tuber is the only edible part once it is cooked. The potato can be cooked in
    many ways, brewed into alcohol, and also used as the basis for creating bioplastics.
    More growing information is available in individual species entries.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Direct seed outdoors after last frost. Each piece must have one eye.`,
    spread: 30,
    row_spacing: 90,
    height: 60,
    days_to_maturity: `Two weeks after the vines have flowered, you can, if you wish, reach
    into the soil or mulch and retrieve a few baby potatoes. Otherwise, wait until the vines die back.
    Dead vines signal that the tubers have reached maturity. Now reach into the soil with your hands and pull the tubers up.
    Small new potatoes can be ready as early as ten weeks. However, full sized potatoes take about 80-100 days to reach maturity.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dbd5d3732390003620100.jpg?1428012380`]
  },
  {
    name: `Cauliflower`,
    description: `Cauliflower is a vegetable in the Brassicaceae family. The solid, firm head
    resembles that of broccoli and is usually white, but can also be yellow, purple, or green
    in color. Like broccoli, it sits atop a stalk. The head is wrapped in thick leaves that
    begin to open when the plant is ready for harvest. All cauliflower does best in cool weather.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Sow seeds indoors, harden seedlings off before transplanting`,
    spread: 30,
    row_spacing: 60,
    height: 75,
    days_to_maturity: `Time from planting to harvest is 55 to 100 days for cauliflower grown
    from transplants 85 to 130 days for cauliflower grown from seed. Under good growing
    conditions, the heads develop rapidly to about six to eight inches in diameter.
    The mature head should be compact, firm, and white. Cut the whole head from the main stem.
    The leaves can be cooked like collards or cabbage.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58c3bdf07b12f80004000012.jpg?1489223147`]
  },
  {
    name: `Shishito Pepper`,
    description: `Shishito peppers are mild, thin-walled, slightly sweet peppers
    native to East Asia. They are small, slender peppers, usually 5-10cm long, with
    slightly wrinkled flesh. They have a Scoville rating of 50-200, but about 1 in 10
    peppers can be significantly spicy. Shishitos are usually harvested while still
    green and unripe, but they can be left on the plant to ripen and turn orange and red.
    Shishitos are popular in Japan and Korea and are often grilled, roasted, sautéed, or fried into tempura.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Sow seeds indoors and transplant outside.`,
    spread: 50,
    row_spacing: 50,
    height: 75,
    days_to_maturity: `60 to 80 days. Start by planting in a sunny area with well-drained, fertile soil.
    When planting, amend the soil with compost or worm castings. This gives the peppers plenty of nutrients
    as they grow. Finish by mulching each plant with a few inches of straw or compost. This helps keep the
    roots moist, and the plants protected from temperature swings.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59f386eb33d94e000400000a.jpg?1509132007`]
  },
  {
    name: `Turnip`,
    description: `Turnips are smooth, round root vegetables 5-20 cm in diameter.
    They are often white below the soil line and bright purple or green above.
    Turnips usually have white flesh and a slightly sweet and bitter taste, similar to cabbage.
    The edible foliage tastes similar to mustard greens. Turnips are a cool-weather crop and do best as spring or fall plantings.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Direct seed outdoors, thin to 10cm when seedlings are 3cm tall`,
    spread: 30,
    row_spacing: 10,
    height: 30,
    days_to_maturity: `Most turnip varieties produce greens in 40 days.
    Turnip roots generally take 50 to 60 days to produce.
    Harvest turnip greens by pulling the entire plant when the leaves are 4 to 6 inches long Turnip roots can be harvested when they are 2 to 2½ inches in diameter.
    If left longer they will get tough and stringy. The ideal size of turnip roots harvested for bunching is 2 inches in diameter.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58cf353eaea93d0004000018.jpg?1489974585`]
  },
  {
    name: `Beets`,
    description: `Typically grown for its round or cylindrical taproot, the leaves of the beet are also edible.
    Leaves resemble Swiss chard on a smaller scale and are good sautéed.
    The taproot, or beet, ranges in color from deep red to gold, orange, or white and red striped.
    The beet has a delicious, earthy flavor with a touch of sweetness to it when roasted.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Direct seed into soil. Thin to 7cm apart when seedlings are 5cm tall.`,
    spread: 10,
    row_spacing: 10,
    height: 25,
    days_to_maturity: `7 to 8 weeks. Young, tender tops often have a mild quality, but the greens can be used until they get large and strong flavored.
    Young plants can be cooked with the root and top together, or you can use the root alone when it is the size of a golf ball or larger.
    Pull the plants and cut off the root. If the tops are to be used, wash and place them in plastic bags in the refrigerator for 1 or 2 days.
    Roots will keep 1 to 2 weeks in plastic bags in the refrigerator.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b747ffe8d7500030002ef.jpg?1466659964`]
  },
  {
    name: `Spinach`,
    description: `Spinach is an annual plant whose deep green leaves are eaten as a vegetable. It grows best in cooler weather. It can be eaten raw or cooked.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Direct seed outdoors, thin to 15cm when seedlings are 3cm high`,
    spread: 20,
    row_spacing: 30,
    height: 15,
    days_to_maturity: `Harvest spinach when plants are 6 to 8 inches tall. Pull up the entire plant in the spring, since it stops producing in hot weather.
    For the fall crop, clip the leaves just above the crown about 1 to 2 inches above ground level.
    Water and fertilize lightly and the plants will continue growing`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/591defc984b25a00040000ba.jpg?1495134119`]
  },
  {
    name: `Lettuce`,
    description: `Lettuce is a cool weather crop and high temperatures will impede germination and/or cause the plant to bolt (go to seed quickly).
    Some hybrid cultivars have been bred to be more heat-resistant.`,
    sun_reqs: `Partial Sun`,
    sowing_method: `Direct seed outdoors, thin to 20cm when seedlings are 3cm tall`,
    spread: 15,
    row_spacing: 40,
    height: 20,
    days_to_maturity: `Once leaves begin to appear and they are about 4 inches (10 cm.) long, you can begin harvesting leaf lettuce.
    Simply snip either single outer leaves or grab a bunch of them and cut them with shears or scissors an inch above the crown of the plant.
    If you cut into or below the crown, the plant will probably die, so be careful.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b87bafe8d750003000424.jpg?1466664889`]
  },
  {
    name: `Peas`,
    description: `A pea is a most commonly green, occasionally golden yellow, or infrequently purple pod-shaped vegetable, widely grown as a cool-season vegetable crop.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Direct seed outdoors`,
    spread: 3,
    row_spacing: 30,
    height: 60,
    days_to_maturity: `Harvest 3 weeks after the flowers appear. Shelling peas are ready when the pods have swelled and are nearly cylindrical shape.
    Edible pod peas are ready when they are 2-3 inches long, before the seeds begin to swell.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b8edefe8d75000300043c.jpg?1466666716`]
  },
  {
    name: `Apple`,
    description: `The apple is a deciduous tree in the Rose family grown for it's sweet fruit. The apple originated in Central Asia and has spread across the world. There are now over 7,500 cultivars bred for a variety of climates and characteristics. Apples are propagated through grafting because seeds do not breed true.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Before planting: soak the apple tree’s roots in a bucket or large tub of water for one to two hours. This helps keep the roots from drying out while you dig the planting hole. Avoid soaking roots for more than six hours. Remember: do not expose roots to freezing temperatures (or below) prior to planting.
    Dig the planting hole deep and wide enough so the root system has plenty of room and room to spread and grow. When digging the planting hole, make sure it is deep and wide enough so the apple tree’s root system has plenty of room to easily expand. Keep the more-nutritious topsoil in a separate pile so you can put it in the bottom of the hole, where it’ll do the most good.
    Place the apple tree in the center of the planting hole with its roots down and spread out. Holding onto the trunk to keep it vertical, backfill the hole, putting the topsoil back in first. You can avoid creating air pockets by working the soil carefully around the roots and tamping down firmly as you refill the planting hole around your apple tree.`,
    spread: 500,
    row_spacing: 548,
    height: 300,
    days_to_maturity: 200,
    photo_links: [`https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7401f8790004000005.jpg?1496964975`]
  },
  {
    name: `Strawberry`,
    description: "Strawberries are a hybrid species of the genus Fragaria that produce sweet, bright red fruits. \n\nThere are three main types of strawberries: \n\n1) summer-fruiting: produce a single, large crop of fruit the year after planting.  All types of strawberries begin to produce fewer and less sweet fruit once they are two years or older. Because strawberries are a hybrid, seeds will not breed true. Strawberries are predominantly propagated using bare root plugs or crowns or dividing runners. Make sure not to bury the crown when transplanting plugs.",
    sun_reqs: `Full Sun`,
    sowing_method: `Transplant bare root plants/plugs or divide runners`,
    spread: 30,
    row_spacing: 35,
    height: 30,
    days_to_maturity: `To grow, transplant plugs or crowns in early spring in rows spaced at least 120cm apart. Pinch off all flowers the first season and train the plant's runners, pressing them into the soil 15-22cm apart from the mother plant. Mulch with straw or pine needles in the fall when the plants have died back. When the plants start to grow back in the spring, move the mulch aside. After harvest the second season, set a lawnmower to about 10cm high and mow, being sure not to damage crowns.\n\n The other two types are \n\n2) Ever-bearing and 3) Day Neutral, both of which send out less runners and bear several crops of smaller fruit throughout the season. These two types can be grown using raised beds about 20cm high and 60cm wide. Transplant crowns or plugs in staggered double rows, about 30cm apart. Remove runners and flowers until July of the first year to give the roots time to develop, and then allow plants to produce fruit.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dc6103732390003730100.jpg?1428014606`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5a2091bd4ef55e0004000007.jpg?1512083897`]
  },
  {
    name: `Raspberry`,
    description: `Raspberries are a perennial plant with erect to trailing canes that often have spines or thorns. The plants produce fruit in their second year of growth, but some \"primocane\" varieties exist that flower and fruit their first year. Canes are light green to blue in hue with alternate, compound leaves. Fruits are sweet, many-seeded, and hollow.`,
    sun_reqs: `Partial Sun`,
    sowing_method: `Transplant from roots or juvenile plants`,
    spread: 75,
    row_spacing: 200,
    height: 150,
    days_to_maturity: `Raspberry bush growth depends on cultivar and environment, but most varieties should be ready for harvest within 16 to 18 months after the initial planting. Bushes planted in U.S. Department of Agriculture plant hardiness zones 8 to 10 can tolerate some shade, but they thrive in full sunlight and well-draining soil with pH of 5.6 to 6.2. Hot, dry, windy weather can damage fruiting canes. Raspberry primocanes may grow 8 or 9 feet high during the spring and summer.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dc30837323900036b0100.jpg?1428013830`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b8fa8fe8d75000300043f.jpg?1466666918`]
  },
  {
    name: `Plum`,
    description: `The plum is a fruit of the subgenus Prunus of the genus Prunus. The Prunus genus also includes the cherry, apricot, almond, and peach. Within the subgenus Prunus, there are many species. The two largest species groups are European Plums (Prunus domestica) and Japanese Plums (Prunus salicina). Apricots are also classified as a section of the Prunus subgenus. The skin of plums can be coated with a waxy bloom or it can be shiny. Plums can be purple, green, yellow, or red. Shape varies from oval to globular. Plums can be dried to make prunes. European Plums require 800-900 hours of chilling during the winter, Japanese Plums require 300-500. Some varieties are self-pollinating, but all plum trees benefit from a pollination partner with the same bloom time within 15 meters. Standard and dwarf rootstocks are available. Dwarf trees can grow to 3 meters, standard to 4.5 meters.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Transplant bare-root plant`,
    spread: 500,
    row_spacing: 500,
    height: 500,
    days_to_maturity: `Depending on the size chosen, the tree will bear fruit within 3-6 years of planting`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54b4af6c6130650002060000.jpg?1421127529`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59b1dc3044d62e0004000009.jpg?1504828462`]
  },
  {
    name: `Peach`,
    description: `The peach tree is a deciduous tree native to Northwest China that produces stone, or drupe, fruits. It belongs to the genus Prunus which includes the cherry, apricot, almond, and plum. The peach is classified with the almond in the subgenus Amygdalus because their stones are corrugated rather than smooth. Peaches and nectarines are the same species - nectarines have a recessive gene that makes their skin smooth rather than fuzzy. Cultivated peaches are divided into two groups: clingstones and freestones, depending on whether the flesh sticks to the stone or not. Peaches can have white or yellow fuzzy skin. Yellow peaches usually have an acidic tang coupled with sweetness. White peaches are very sweet with little acidity. Most cultivars require 500 hours of chilling around 0 to 10 °C during the winter, and hot temperatures in the summer to ripen fruit. Some varieties are self-pollinating, while others require pollination by a peach tree of another variety with the same bloom period within 50 feet. Peaches should be thinned to 7-12cm apart when fruit are 2-3cm in diameter to increase mature fruit size. Standard and dwarf rootstocks are available. Dwarf trees can grow to 3 meters, standard to 4.5 meters.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Growing from a peach pit:
    They should be planted in well-draining soil, preferably with the addition of compost or other organic material.
    Plant the peach pit about 3-4 inches deep and then cover it with about an inch or so of straw or similar mulch for overwintering. Water during planting and then only when dry. By spring, if the peach was any good, you should see sprouting and a new peach seedling will grow. For those germinated via the refrigerator, once germination occurs, transplant to a pot or in a permanent position outdoors (weather permitting).
    Growing from seed:
    Growing peaches from seed isn’t difficult once you’ve gotten through the germination process. Transplants can be treated and grown in pots just like any other fruit tree. Here is an article about growing peach trees if you’d like to learn more about peach tree care. Some peach pits germinate quick and easy and some take a little longer—or may not germinate at all. Whatever the case may be, don’t give up. With a little persistence and trying more than one variety, growing peaches from seed can be well worth the extra patience. Of course, then there’s the wait for fruit (up to three years or more). Remember, patience is a virtue! `,
    spread: 365,
    row_spacing: 300,
    height: 1000,
    days_to_maturity: `Depending on the size chosen, the tree will bear fruit within 2-4 years of planting.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59b1a6e444d62e0004000006.jpg?1504814816`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59b1a6e844d62e0004000007.jpg?1504814821`]
  },
  {
    name: `Nectarine`,
    description: `The nectarine is a deciduous tree that produces stone, or drupe, fruits. It is actually the same species as a Peach, it just has a recessive gene that makes it's skin smooth rather than fuzzy. Both fruits belong to the genus Prunus which includes the cherry, apricot, almond, and plum. The peach and nectarine are classified with the almond in the subgenus Amygdalus because their stones are corrugated rather than smooth. Most cultivars require 500 hours of chilling at temperatures between 0 and 10 °C during the winter, and hot temperatures in the summer to ripen fruit. Some varieties are self-pollinating, while others require pollination by a peach or nectarine tree of another variety with the same bloom period within 50 feet. Standard and dwarf rootstocks are available. Dwarf trees can grow to 3 meters, standard to 4.5 meters.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Remove the nectarine pit from the fruit and place it in a bowl of water to soak off any remaining pulp. If the pit floats then its not viable and you will need to try again with another pit. Air dry the seeds on the counter top for a 1 or 2 days.
    Remove the seeds from the pit by cracking it open - try using a pair of nutcrackers to crack it open. Once removed, soak the seeds in a bowl of water overnight
    Straitify (cold treat) the seeds. This process essentially simulates winter conditions and breaks the dormancy of the seed. Fill a lidded container half full with some moist potting soil and place the seeds on top of the soil. Close the lid of the container and place in the fridge. Leave for several weeks, make sure that the soil is kept slightly moist and does not dry out. After about a month, the seeds should begin to germinate
    Plant each germinated seed in a small pot (about 6" diameter) filled with good quality potting soil. Plant the seed 0.5-1.0" deep in the center of the pot. Keep the soil moist but not wet and continue to grow the seedlings.`,
    spread: 365,
    row_spacing: 300,
    height: 1000,
    days_to_maturity: `Depending on the size chosen, the tree will bear fruit within 2-4 years of planting.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59b1b2a544d62e0004000008.jpg?1504817824`]
  },
  {
    name: `Apricot`,
    description: `The apricot is a small fruiting tree in the genus Prunus (of which other stone fruits like peaches, plums and cherries are also members). It is a section of the Prunus (Plum) subgenus. The apricot tree has a dense, spreading canopy with white to pinkish flowers. It's fruit are yellow to orange, smaller than peaches, and have smooth or velvety skin. The apricot can tolerate winter temperatures down to −30 °C, making it slightly more cold-hardy than peach trees. However, it is susceptible to spring frosts killing the blooms because it tends to flower very early. Some varieties are self-pollinating, but all apricot trees benefit from a pollination partner with the same bloom time within 15 meters. Standard and dwarf rootstocks are available. Dwarf trees can grow to 3 meters, standard to 4.5 meters.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Lay the pit on its side and use a nutcracker, hammer, or a vise to gently crack it open and reveal the apricot seed inside. Prepare the seed for germination by soaking it overnight in a bowl of room-temperature water. Then, wrap the seed in a wet paper towel, place it into a sealed plastic bag, and store the bag in a refrigerator set between 32 and 45 degrees Fahrenheit. Keep the seed in the refrigerator until it sprouts, which typically takes one to two months. Wait to plant until after the last frost. Apricot trees can grow in USDA hardiness zones five through nine. They thrive in climates where winters are cold enough to induce a dormancy period and summers are warm but not sweltering hot. Place your seed in the hole and cover it with a well-blended mix of soil and organic compost.`,
    spread: 450,
    row_spacing: 450,
    height: 450,
    days_to_maturity: `Depending on the size chosen, the tree will bear fruit within 2-4 years of planting.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939e8f401f8790004000008.jpg?1496967407`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939e8fc01f8790004000009.jpg?1496967413`]
  },
  {
    name: `Pear`,
    description: `Pears are fruiting trees or shrubs in the Pyrus genus, in the family Rosaceae. There are approximately 3000 varieties worldwide, and they are commonly divided into two major groups: European and Asian. European Pears are wider at the bottom and taper at the top. Asian Pears are shaped more like apples, and have a different texture and flavor. Most pear species are deciduous, but some in southeast Asia are evergreen. Pears are generally cold-hardy, surviving winter temperatures between -25 to -40°C. In the spring, they produce white (and sometimes, yellow or pink) flowers with 5 petals. Like apples, pears are propagated by grafting the selected variety onto a rootstock. `,
    sun_reqs: `Full Sun`,
    sowing_method: `Pears prefer slightly acid soil (pH 5.9-6.5). Now dig a hole about three times the size of your pot and the same depth as the root ball. Set the soil you have dug out aside and mix it 50/50 with aged mushroom compost, aged manure, or rotten pine bark. Remove the plant from its pot and gently loosen the root ball. Cut any roots that swirl around the edges of the root ball. Place the plant in the planting hole and replace the soil with the mix 50/50 and gently pack down the dirt. To avoid planting too deep make sure the plant is at a position with the top most roots at the soil line. Next we need to thoroughly water the tree to settle the roots and eliminate air pockets. DO NOT PUT FERTILIZER IN THE PLANTING HOLE! Only apply fertilizer at the correct time of year.
    If desired, construct a water basin at the base of the tree about 36 inches in diameter. Mulch in the spring & summer time should be about 4-6 inches deep. Keep mulch a few inches away from the trunk of the tree. Good mulch for pears in the spring, is a mix of compost and weed-free hay, while summer use weed-free hay or grass clippings alone.`,
    spread: 610,
    row_spacing: 610,
    height: 915,
    days_to_maturity: `3 to 10 years before fruiting`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b8e47fe8d750003000439.jpg?1466666567`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b8e49fe8d75000300043a.jpg?1466666568`]
  },
  {
    name: `Eggplant`,
    description: `Eggplants commonly are egg-shaped with glossy black skin, but can come in a
    ariety of other shapes and colors. They can be white, yellow, and pale to deep purple.
    Some are as small as goose eggs. The 'Rosa Bianca' cultivar is squat and round, while
    Asian cultivars can be long and thin. Eggplant stems are often spiny and their flowers
    range from white to purple. Their flesh is generally white with a meaty texture and
    small seeds in the center. They are delicious grilled, roasted, in soups and stews, and breaded and fried.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Start seeds indoors in flats or peat pots 8–9 weeks prior to the last spring frost date.
    Seeds germinate quickly at temperatures between 70 to 90°F. Alternatively, buy 6- to 8-week-old nursery
    transplants just before planting. Do not plant eggplant transplants into the garden until after the last
    threat of frost. If purchasing transplants: Buy high-quality specimens. Do not purchase tall,
    spindly plants or young plants that have blossoms or you will have a lower yield. Choose a very sunny spot for the best results.
    Eggplant grows best in a well-drained sandy loam or loam soil, fairly high in organic matter.
    Soil pH should be between 5.8 and 6.5 for best growth. Use a covering of black plastic mulch to
    warm soils before setting out transplants. Eggplant requires moderate amounts of fertilizer.
    Mix 1 inch or so of well-rotted manure or a general fertilizer such as 5-10-10 throughout the
    planting bed about a week before planting. (Apply 2 to 3 pounds per 100 square feet. Or,
    apply 1¼ pounds of 5-10-10 per 10 feet of row when the row spacing is 4 feet.)
    If you’re growing eggplant in pots, use a dark-colored container that will absorb more sunlight.
    Each plant needs five-gallon (or, larger) pots and should be placed in full sun and outdoors so it can be pollinated.
    Use a premium potting mix to avoid disease. Stake the plants right away (just an inch or two from the plant) to
    provide support as they climb and to avoid disturbing the soil later. If you live in a cold climate, consider using
    row covers to keep the eggplants warm and sheltered. Open the ends of the row covers on warm days so that the bees may pollinate.
    If transplanting, set 3- to 4-inch tall seedlings 2 to 2½ feet apart in rows that are 3 to 4 feet apart.
    After planting, water well. Add a layer of mulch to retain moisture and suppress weeds.`,
    spread: 30,
    row_spacing: 60,
    height: 50,
    days_to_maturity: `Harvest eggplant 65 to 80 days after transplanting, depending on the variety.
    When starting from seed, expect 100 to 120 days to maturity. July, August, and September (even into October)
    are all harvest months for eggplant, depending on where you live and the variety you planted.
    Don't wait too long to harvest!`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b79ddfe8d75000300038a.jpg?1466661339`
    },
    {
    name: `Tomatoes`,
    description: `Tomato plants are vines, initially decumbent, typically growing 180 cm (6 ft) or more
    above the ground if supported, although erect bush varieties have been bred, generally 100 cm (3 ft 3 in)
    tall or shorter. Indeterminate types are "tender" perennials, dying annually in temperate climates
    (they are originally native to tropical highlands), although they can live up to three years in a
    greenhouse in some cases. Determinate types are annual in all climates.`,
    sun_reqs: `Full Sun, shade as necessary`,
    sowing_method: `Start tomato seeds indoors about 6 to 8 weeks before the last frost in spring.
    (Transplant tomato seedlings to the garden just after the last frost in spring.)
    Sow tomatoes in individual pots with a light potting mix. Pots should have drain holes in the bottom.
    Sow two to three seeds ½ inch deep and 1 inch (2.5 cm) apart in a small pot or flat.
    Germination soil temperature can range between 65-86°F (18-30°C); the optimum soil temperature for
    germinating seed is 86°F (30°C). Seeds can be started in a bright window or under fluorescent lights
    set about 2 inches (5 cm) above the plants. Keep seed starting mix just moist until seeds germinate.
    Germination takes 5 to 7 days at 75°F (24°C) or warmer. Clip away the weaker seedlings once the
    strongest seedling is about 2 inches (5 cm) tall. Grow young seedlings on at 60° to 70°F (15-21°C);
    allow a gentle breeze from a fan to rustle over young seedlings each day so that they grow strong stems.
    About two weeks after germination seedlings can be transferred to larger 4-inch (10cm) pots;
    be careful not to disturb the roots. This is called potting up. Garden soil is usually warm enough for tomato transplants
    about 2 to 3 weeks after the last frost in spring. Tomato seedlings can be transplanted into the garden
    when the outdoor soil temperature is at least 55°F (13°C) and the nighttime air temperatures are consistently
    50°F (10°C) or warmer. Set young plants out protected from direct sun during the day for two weeks to harden off
    and acclimatize before transplanting. This is called hardening off. Plants will not thrive in temperature cooler
    than 50°F (10°C). If an unexpected frost threatens, transplants must be covered and protected. Set a tomato transplant
    into the garden deeper than it was growing in its pot. Remove the lower leaves on the stem up to the top two sets of leaves.
    Bury the stem up to the top two sets of leaves. New roots will grow on the buried stem. Burying stems at transplanting will
    make for sturdier plants. Water newly transplanted seedlings. Give transplants a B-1 solution to guard against transplant shock.`,
    spread: 120,
    row_spacing: 90,
    height: 120,
    days_to_maturity: `Early-season tomatoes require 50 to 60 days to reach harvest from transplanting;
    mid-season tomatoes require 60 to 80 days; late-season tomatoes require 80 or more days.
    In hot summer-mild winter regions such as USDA zone 10 or warmer, tomatoes can be grown as a fall and winter crop.`,
    photo_links: [`https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg`]
    },
    {
    name: `Swiss Chard`,
    description: `Swiss Chard is a leafy green vegetable in the Beet family. The thick stems come in a
    variety of colors including white, pink, red, yellow, orange, and pale green. It has large,
    crinkly leaves with distinctive veins. The leaves and stems are edible and high in nutrients.
    Swiss chard can be eaten raw or sautéed, baked, or steamed.`,
    sun_reqs: `Full Sun`,
    sowing_method: `Since its seeds come several to a pod, so you’ll have little clusters of seedlings that need to be
    thinned out before transplanting. Keep the sturdiest and rinse and enjoy the rest as nutritious microgreens. Start
    seeds indoors three to four weeks before the last frost date, or direct sowing two weeks before this date. Seedlings
    may be placed outside just after the last frost date has passed. For those in warmer regions, she says to direct sow
    seeds about 10 weeks before the first frost date. Place seedlings outside at four weeks old. Sow seed in organically-rich
    soil supplemented by compost and/or fertilizer as needed. A soil test is your best indicator of what’s required. Leafy vegetables
    benefit from nitrogen supplementation, so consider a well-balanced, slow-release fertilizer if you decide to forgo the test.
    At the recommended time, harden-off your seedlings. Acclimate them to the outdoors for a couple of hours each day for several
    days prior to transplanting them into the garden or containers. If you choose to pot them, provide containers with good drainage
    holes and a depth of at least 12 inches. Choose a smaller-stature variety, and trim leaves as soon as they reach six inches, to
    encourage more leaf than root growth.  For garden plants, you may cut leaves at heights from six inches to two feet, depending upon plant size.
    The smaller the leaf and stalk, the more tender the texture. In addition, leaving mature leaves unharvested may result in more root growth and fewer new leaves.
    Prepare your garden soil to a depth of about 12 inches, working in any recommended amendments, and fertilizing if you so choose.
    Place one seedling every 12 inches, leaving about 18 inches between rows. Water and maintain even moisture, never allowing the soil
    to completely dry out during the plants’ acclimation to their new location. Some folks like to grow “baby greens,” meaning they like
    to harvest them at a height of at least six inches tall. If this is your plan, consider planting much closer together, about six inches,
    to get more leaves little leaves per square foot. Once established, plants need an inch or so of water throughout the growing season.
    Supplement in the absence of rain, or plants will slow leaf production until moisture is restored.`,
    spread: 20,
    row_spacing: 30,
    height: 35,
    days_to_maturity: `This vegetable is a cut-and-come-again species that provides multiple harvests during the growing season.
    You may be able to cut your first tender leaves as early as late spring. Harvesting stalks when they are young and tender, at about
    six inches tall, is an excellent way to get the maximum number of harvests per year.`,
    photo_links: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58c3b93f7b12f80004000001.jpg?1489221948`]
    }
]

module.exports = cropsSeedData;
