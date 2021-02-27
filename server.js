/* eslint-disable max-len */
const express = require('express');
const app = express()
const cors = require('cors');

app.use(cors());

app.set('port', process.env.port || 3001);
app.locals.title = 'Urban Native';

app.get('/', (request, response) => {
  response.send('This is Urban Native');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on
    http://localhost:${app.get('port')}`);
});

app.get(`/api/v1/crops`, (request, response) => {
  const crops = app.locals.crops;

  if (!crops) {
    return response.sendStatus(404)
  }

  response.status(200).json({ crops });
})

app.get(`/api/v1/users/:id`, (request, response) => {
  const users = app.locals.users
  const id = parseInt(request.params.id);
  const currentUser = users.find(user => user.id == id)

  if (!currentUser) {
    return response.sendStatus(404)
  }

  response.status(200).json(currentUser);
  });

app.locals.crops = [
  {
    id: 1,
    name: 'Blackberries',
    description: `Deeply colored, sweet, clustered berries. The blackberry
    plant is a perennial plant that bears biennial stems or canes. The plant
    often has thorns, though some cultivars do not. Most varieties have greater
    berry yields from the second year on. In peak season, expect to harvest twice a week.`,
    sunReqs: `Full Sun.`,
    sowingMethod: `Transplant canes into soil or pot.`,
    spread: 75,
    rowSpacing: 100,
    height: 175,
    daysToMaturity: `A blackberry bush will produce fruit for 3 to 4 weeks
      sometime between late June and early September in most areas of the U.S.
      Some blackberry bushes can produce fruit on first year canes (primocanes),
      but most will not produce fruit until 1 or 2 years after planting.`,
    photoLinks: ["https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dc7793732390003750100.jpg?1428014965"]
  },
  {
    id: 2,
    name: `Cucumber`,
    description: `Cucumbers are the fruit of a creeping vine. They are generally oblong and have a high water content.
      Their edible skin is often green but can also be yellow, white, or striped. The vine can be left to spread along
      the ground, or it can be trained to a trellis. The vine's large leaves hide the cucumbers and shade them.
      There are three main varieties of cucumber: slicing, pickling, and seedless.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Direct seed outdoors in groups of 2-3, 1/2" deep. Thin to 1 plant.`,
    spread: 90,
    rowSpacing: 20,
    height: 20,
    daysToMaturity:
      `It mainly depends on variety, weather conditions, nutrients etc.,
      Generally cucumber plants take approximately 55 to 70 days from germination to harvesting stage.
      1. The germination stage alone takes 7 to 10 days.
      2. After germination the first male flower would be seen within 35 to 55 days roughly, which will be later followed by developing a female flower in one or two weeks (i.e., 42 to 62 days).
      3. The fertilized female flower will take 10 to 12 days to produce fruits.`,
    photoLinks: [`https://www.thespruce.com/thmb/otEJQ4c7WgHNKUVJNFsTr5Opo4A=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/companion-plants-for-cucumbers-2540044-16-d691b5c0f19f44a8b1303e805be9c99d.jpg`]
  },
  {
    id: 3,
    name: `Kale`,
    description:
     `Kale is a cultivar of the species Brassica oleracea. It has green or purple leaves that
      branch off from one to multiple upright stems and do not form a head like cabbage. The plant is usually
      grown as an annual, but if grown as a perennial, it will form seeds in the second year. Current popular
      varieties include Curly kale, Italian kale, and Red Russian kale (green leaves with pale purple stems).
      It can be grown as baby salad greens or for bunching adult leaves. Leaves are sweeter after a frost and
      delicious eaten raw, added to salads, sautéed, or added to stews and casseroles.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Direct seed. If planting indoors, harden off before transplanting seedlings outside.`,
    spread: 75,
    rowSpacing: 45,
    height: 75,
    daysToMaturity:
     `Kale has a relatively fast growth rate and can grow from seed to harvest in about two months.
      It is a biennial plant that typically is grown as an annual. It is best planted in spring
      in cooler climates, and in late summer in warmer climates.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/55b6b7ce6465380003910200.jpg?1438037945`]
  },
  {
    id: 4,
    name: `Broccoli`,
    description: `Broccoli has large flower heads known as "crowns" that are green to blue-green
    in color, grouped tightly together atop a thick stem, and surrounded by leaves. Broccoli
    resembles cauliflower, a different cultivar in its species. It thrives in cool weather.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Sow seeds indoors and transplant outside`,
    spread: 60,
    rowSpacing: 40,
    height: 75,
    daysToMaturity: `Broccoli grown from seed will come to harvest in 100 to 150 days.
    Grown from transplants broccoli will come to harvest in 55 to 80 days. Cut buds
    when they are still green and tight. Cut the central head with five to six inches of stem.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54b4b5ea61306500020b0000.jpg?1421129190`]
  },
  {
    id: 5,
    name: `Carrots`,
    description: `The carrot is a root vegetable. It is usually orange in color, but some cultivars are purple,
    black, red, white, and yellow. The most commonly eaten part of the plant is the taproot, but the greens
    are sometimes eaten as well. The leaves appear first, and the taproot grows more slowly beneath the soil.
    Fast-growing cultivars mature within three months of sowing the seed. Slower-maturing cultivars are harvested four months after sowing.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Direct Seed, thin to 3cm apart when seedlings are 8cm high`,
    spread: 5,
    rowSpacing: 5,
    height: 10,
    daysToMaturity: `Harvesting. Carrots should be ready for harvest 70 to 80 days after planting.
    Pull them from the soil when the roots are 1 to 1½ inches in diameter. To avoid breaking the
    carrot while pulling, loosen the soil around the carrot with a spade.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58c312395865650004000000.jpg?1489179191`]
  },
  {
    id: 6,
    name: `Cherry Tomatoes`,
    description: `Cherry tomatoes range in size from a thumbtip to the size of a golf ball.
    Their shape ranges from spherical to slightly oblong to pointed at the bottom.
    They are often red, but can also be yellow, green, striped, and even black.
    More oblong cherry tomatoes often share characteristics with plum tomatoes, and are
    known as grape tomatoes. Cherry tomatoes can be quite sweet (such as the Sungold or Sunsweet
    yellow varieties), more traditionally acidic, or deep in flavor. They are delicious for
    snacking, in salads, lightly roasted or grilled, or baked. They require little to no pruning unlike larger tomato plants.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Sow seeds indoors 6-8 weeks before the last expected frost`,
    spread: 45,
    rowSpacing: 60,
    height: 60,
    daysToMaturity: `Because of the small fruit size, typically one to two inches, these high
    yielding plants often bear fruit in just 55 to 65 days, with some ready for harvest in as
    little as 45 days. However, there are those that can take up to 80 days to mature as well.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/57073ebd4a3af70003000006.jpg?1460092602`]
  },
  {
    id: 7,
    name: `Brussels Sprouts`,
    description: `Brussels sprouts grow on the sides of stalks up to 91cm tall.
    The stalks are covered with leaves and the sprouts look like miniature cabbages.
    They are a cool weather crop and are delicious roasted.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Sow seeds indoors, harden off seedlings before transplanting outdoors`,
    spread: 30,
    rowSpacing: 60,
    height: 91,
    daysToMaturity: `Brussels Sprouts are a slow growing vegetable, taking 26 to 31 weeks to reach
    maturity and produce a crop of sprouts. However, there are few other vegetables that
    can be enjoyed fresh from September right through February.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551e27c53732390003830100.jpg?1428039620`]
  },
  {
    id: 8,
    name: `Potatoes`,
    description: `Potatoes are starchy root vegetables in the Solanaceae, or Nightshade, family,
    which also includes tomatoes, eggplants, and peppers. They originated in South America,
    and spread to become a worldwide staple. The leaves and fruit are usually poisonous
    and the stem tuber is the only edible part once it is cooked. The potato can be cooked in
    many ways, brewed into alcohol, and also used as the basis for creating bioplastics.
    More growing information is available in individual species entries.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Direct seed outdoors after last frost. Each piece must have one eye.`,
    spread: 30,
    rowSpacing: 90,
    height: 60,
    daysToMaturity: `Two weeks after the vines have flowered, you can, if you wish, reach
    into the soil or mulch and retrieve a few baby potatoes. Otherwise, wait until the vines die back.
    Dead vines signal that the tubers have reached maturity. Now reach into the soil with your hands and pull the tubers up.
    Small new potatoes can be ready as early as ten weeks. However, full sized potatoes take about 80-100 days to reach maturity.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dbd5d3732390003620100.jpg?1428012380`]
  },
  {
    id: 9,
    name: `Cauliflower`,
    description: `Cauliflower is a vegetable in the Brassicaceae family. The solid, firm head
    resembles that of broccoli and is usually white, but can also be yellow, purple, or green
    in color. Like broccoli, it sits atop a stalk. The head is wrapped in thick leaves that
    begin to open when the plant is ready for harvest. All cauliflower does best in cool weather.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Sow seeds indoors, harden seedlings off before transplanting`,
    spread: 30,
    rowSpacing: 60,
    height: 75,
    daysToMaturity: `Time from planting to harvest is 55 to 100 days for cauliflower grown
    from transplants 85 to 130 days for cauliflower grown from seed. Under good growing
    conditions, the heads develop rapidly to about six to eight inches in diameter.
    The mature head should be compact, firm, and white. Cut the whole head from the main stem.
    The leaves can be cooked like collards or cabbage.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58c3bdf07b12f80004000012.jpg?1489223147`]
  },
  {
    id: 10,
    name: `Shishito Pepper`,
    description: `Shishito peppers are mild, thin-walled, slightly sweet peppers
    native to East Asia. They are small, slender peppers, usually 5-10cm long, with
    slightly wrinkled flesh. They have a Scoville rating of 50-200, but about 1 in 10
    peppers can be significantly spicy. Shishitos are usually harvested while still
    green and unripe, but they can be left on the plant to ripen and turn orange and red.
    Shishitos are popular in Japan and Korea and are often grilled, roasted, sautéed, or fried into tempura.`,
    sunReqs: `Full Sun`,
    sowingMethod: String,
    spread: 50,
    rowSpacing: 50,
    height: 75,
    daysToMaturity: `60 to 80 days. Start by planting in a sunny area with well-drained, fertile soil.
    When planting, amend the soil with compost or worm castings. This gives the peppers plenty of nutrients
    as they grow. Finish by mulching each plant with a few inches of straw or compost. This helps keep the
    roots moist, and the plants protected from temperature swings.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59f386eb33d94e000400000a.jpg?1509132007`]
  },
  {
    id: 11,
    name: `Turnip`,
    description: `Turnips are smooth, round root vegetables 5-20 cm in diameter. 
    They are often white below the soil line and bright purple or green above. 
    Turnips usually have white flesh and a slightly sweet and bitter taste, similar to cabbage. 
    The edible foliage tastes similar to mustard greens. Turnips are a cool-weather crop and do best as spring or fall plantings.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Direct seed outdoors, thin to 10cm when seedlings are 3cm tall`,
    spread: 30,
    rowSpacing: 10,
    height: 30,
    daysToMaturity: `Most turnip varieties produce greens in 40 days. 
    Turnip roots generally take 50 to 60 days to produce. 
    Harvest turnip greens by pulling the entire plant when the leaves are 4 to 6 inches long Turnip roots can be harvested when they are 2 to 2½ inches in diameter. 
    If left longer they will get tough and stringy. The ideal size of turnip roots harvested for bunching is 2 inches in diameter.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58cf353eaea93d0004000018.jpg?1489974585`]
  },
  {
    id: 12,
    name: `Beets`,
    description: `Typically grown for its round or cylindrical taproot, the leaves of the beet are also edible. 
    Leaves resemble Swiss chard on a smaller scale and are good sautéed. 
    The taproot, or beet, ranges in color from deep red to gold, orange, or white and red striped. 
    The beet has a delicious, earthy flavor with a touch of sweetness to it when roasted.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Direct seed into soil. Thin to 7cm apart when seedlings are 5cm tall.`,
    spread: 10,
    rowSpacing: 10,
    height: 25,
    daysToMaturity: `7 to 8 weeks. Young, tender tops often have a mild quality, but the greens can be used until they get large and strong flavored. 
    Young plants can be cooked with the root and top together, or you can use the root alone when it is the size of a golf ball or larger.
    Pull the plants and cut off the root. If the tops are to be used, wash and place them in plastic bags in the refrigerator for 1 or 2 days. 
    Roots will keep 1 to 2 weeks in plastic bags in the refrigerator.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b747ffe8d7500030002ef.jpg?1466659964`]
  },
  {
    id: 13,
    name: `Spinach`,
    description: `Spinach is an annual plant whose deep green leaves are eaten as a vegetable. It grows best in cooler weather. It can be eaten raw or cooked.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Direct seed outdoors, thin to 15cm when seedlings are 3cm high`,
    spread: 20,
    rowSpacing: 30,
    height: 15,
    daysToMaturity: `Harvest spinach when plants are 6 to 8 inches tall. Pull up the entire plant in the spring, since it stops producing in hot weather. 
    For the fall crop, clip the leaves just above the crown about 1 to 2 inches above ground level. 
    Water and fertilize lightly and the plants will continue growing`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/591defc984b25a00040000ba.jpg?1495134119`]
  },
  {
    id: 14,
    name: `Lettuce`,
    description: `Lettuce is a cool weather crop and high temperatures will impede germination and/or cause the plant to bolt (go to seed quickly). 
    Some hybrid cultivars have been bred to be more heat-resistant.`,
    sunReqs: `Partial Sun`,
    sowingMethod: `Direct seed outdoors, thin to 20cm when seedlings are 3cm tall`,
    spread: 15,
    rowSpacing: 40,
    height: 20,
    daysToMaturity: `Once leaves begin to appear and they are about 4 inches (10 cm.) long, you can begin harvesting leaf lettuce. 
    Simply snip either single outer leaves or grab a bunch of them and cut them with shears or scissors an inch above the crown of the plant. 
    If you cut into or below the crown, the plant will probably die, so be careful.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b87bafe8d750003000424.jpg?1466664889`]
  },
  {
    id: 15,
    name: `Peas`,
    description: `A pea is a most commonly green, occasionally golden yellow, or infrequently purple pod-shaped vegetable, widely grown as a cool-season vegetable crop.`,
    sunReqs: `Full Sun`,
    sowingMethod: `Direct seed outdoors`,
    spread: 3,
    rowSpacing: 30,
    height: 60,
    daysToMaturity: `Harvest 3 weeks after the flowers appear. Shelling peas are ready when the pods have swelled and are nearly cylindrical shape. 
    Edible pod peas are ready when they are 2-3 inches long, before the seeds begin to swell.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b8edefe8d75000300043c.jpg?1466666716`]
  },
  {
    id: 16,
    name: `Apple`,
    description: `The apple is a deciduous tree in the Rose family grown for it's sweet fruit. The apple originated in Central Asia and has spread across the world. There are now over 7,500 cultivars bred for a variety of climates and characteristics. Apples are propagated through grafting because seeds do not breed true.`,
    sunReqs: `Full Sun`,
    spread: 500,
    rowSpacing: null,
    height: 300,
    daysToMaturity: 200,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59f386eb33d94e000400000a.jpg?1509132007`]
  },
  {
    id: 17,
    name: `Strawberry`,
    description: "Strawberries are a hybrid species of the genus Fragaria that produce sweet, bright red fruits. \n\nThere are three main types of strawberries: \n\n1) summer-fruiting: produce a single, large crop of fruit the year after planting.  All types of strawberries begin to produce fewer and less sweet fruit once they are two years or older. Because strawberries are a hybrid, seeds will not breed true. Strawberries are predominantly propagated using bare root plugs or crowns or dividing runners. Make sure not to bury the crown when transplanting plugs.",
    sunReqs: `Full Sun`,
    spread: 30,
    rowSpacing: 35,
    height: 30,
    daysToMaturity: `To grow, transplant plugs or crowns in early spring in rows spaced at least 120cm apart. Pinch off all flowers the first season and train the plant's runners, pressing them into the soil 15-22cm apart from the mother plant. Mulch with straw or pine needles in the fall when the plants have died back. When the plants start to grow back in the spring, move the mulch aside. After harvest the second season, set a lawnmower to about 10cm high and mow, being sure not to damage crowns.\n\n The other two types are \n\n2) Ever-bearing and 3) Day Neutral, both of which send out less runners and bear several crops of smaller fruit throughout the season. These two types can be grown using raised beds about 20cm high and 60cm wide. Transplant crowns or plugs in staggered double rows, about 30cm apart. Remove runners and flowers until July of the first year to give the roots time to develop, and then allow plants to produce fruit.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dc6103732390003730100.jpg?1428014606`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5a2091bd4ef55e0004000007.jpg?1512083897`]
  },
  {
    id: 18,
    name: `Raspberry`,
    description: `Raspberries are a perennial plant with erect to trailing canes that often have spines or thorns. The plants produce fruit in their second year of growth, but some \"primocane\" varieties exist that flower and fruit their first year. Canes are light green to blue in hue with alternate, compound leaves. Fruits are sweet, many-seeded, and hollow.`,
    sunReqs: `Partial Sun`,
    spread: 75, 
    rowSpacing: 200,
    height: 150,
    daysToMaturity: `Raspberry bush growth depends on cultivar and environment, but most varieties should be ready for harvest within 16 to 18 months after the initial planting. Bushes planted in U.S. Department of Agriculture plant hardiness zones 8 to 10 can tolerate some shade, but they thrive in full sunlight and well-draining soil with pH of 5.6 to 6.2. Hot, dry, windy weather can damage fruiting canes. Raspberry primocanes may grow 8 or 9 feet high during the spring and summer.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dc30837323900036b0100.jpg?1428013830`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b8fa8fe8d75000300043f.jpg?1466666918`]
  },
  {
    id: 19,
    name: `Plum`,
    description: `The plum is a fruit of the subgenus Prunus of the genus Prunus. The Prunus genus also includes the cherry, apricot, almond, and peach. Within the subgenus Prunus, there are many species. The two largest species groups are European Plums (Prunus domestica) and Japanese Plums (Prunus salicina). Apricots are also classified as a section of the Prunus subgenus. The skin of plums can be coated with a waxy bloom or it can be shiny. Plums can be purple, green, yellow, or red. Shape varies from oval to globular. Plums can be dried to make prunes. European Plums require 800-900 hours of chilling during the winter, Japanese Plums require 300-500. Some varieties are self-pollinating, but all plum trees benefit from a pollination partner with the same bloom time within 15 meters. Standard and dwarf rootstocks are available. Dwarf trees can grow to 3 meters, standard to 4.5 meters.`,
    sunReqs: `Full Sun`,
    spread: 500,
    rowSpacing: 500,
    height: 500,
    daysToMaturity: `Depending on the size chosen, the tree will bear fruit within 3-6 years of planting`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54b4af6c6130650002060000.jpg?1421127529`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59b1dc3044d62e0004000009.jpg?1504828462`]
  },
  {
    id: 20,
    name: `Peach`,
    description: `The peach tree is a deciduous tree native to Northwest China that produces stone, or drupe, fruits. It belongs to the genus Prunus which includes the cherry, apricot, almond, and plum. The peach is classified with the almond in the subgenus Amygdalus because their stones are corrugated rather than smooth. Peaches and nectarines are the same species - nectarines have a recessive gene that makes their skin smooth rather than fuzzy. Cultivated peaches are divided into two groups: clingstones and freestones, depending on whether the flesh sticks to the stone or not. Peaches can have white or yellow fuzzy skin. Yellow peaches usually have an acidic tang coupled with sweetness. White peaches are very sweet with little acidity. Most cultivars require 500 hours of chilling around 0 to 10 °C during the winter, and hot temperatures in the summer to ripen fruit. Some varieties are self-pollinating, while others require pollination by a peach tree of another variety with the same bloom period within 50 feet. Peaches should be thinned to 7-12cm apart when fruit are 2-3cm in diameter to increase mature fruit size. Standard and dwarf rootstocks are available. Dwarf trees can grow to 3 meters, standard to 4.5 meters.`,
    sunReqs: `Full Sun`,
    spread: 365,
    rowSpacing: 300,
    height: 1000,
    daysToMaturity: `Depending on the size chosen, the tree will bear fruit within 2-4 years of planting.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59b1a6e444d62e0004000006.jpg?1504814816`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59b1a6e844d62e0004000007.jpg?1504814821`]
  },
  {
    id: 21,
    name: `Nectarine`,
    description: `The nectarine is a deciduous tree that produces stone, or drupe, fruits. It is actually the same species as a Peach, it just has a recessive gene that makes it's skin smooth rather than fuzzy. Both fruits belong to the genus Prunus which includes the cherry, apricot, almond, and plum. The peach and nectarine are classified with the almond in the subgenus Amygdalus because their stones are corrugated rather than smooth. Most cultivars require 500 hours of chilling at temperatures between 0 and 10 °C during the winter, and hot temperatures in the summer to ripen fruit. Some varieties are self-pollinating, while others require pollination by a peach or nectarine tree of another variety with the same bloom period within 50 feet. Standard and dwarf rootstocks are available. Dwarf trees can grow to 3 meters, standard to 4.5 meters.`,
    sunReqs: `Full Sun`,
    spread: 365,
    rowSpacing: 300,
    height: 1000,
    daysToMaturity: `Depending on the size chosen, the tree will bear fruit within 2-4 years of planting.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59b1b2a544d62e0004000008.jpg?1504817824`]
  },
  {
    id: 22,
    name: `Apricot`,
    description: `The apricot is a small fruiting tree in the genus Prunus (of which other stone fruits like peaches, plums and cherries are also members). It is a section of the Prunus (Plum) subgenus. The apricot tree has a dense, spreading canopy with white to pinkish flowers. It's fruit are yellow to orange, smaller than peaches, and have smooth or velvety skin. The apricot can tolerate winter temperatures down to −30 °C, making it slightly more cold-hardy than peach trees. However, it is susceptible to spring frosts killing the blooms because it tends to flower very early. Some varieties are self-pollinating, but all apricot trees benefit from a pollination partner with the same bloom time within 15 meters. Standard and dwarf rootstocks are available. Dwarf trees can grow to 3 meters, standard to 4.5 meters.`,
    sunReqs: `Full Sun`,
    spread: 450,
    rowSpacing: 450,
    height: 450,
    daysToMaturity: `Depending on the size chosen, the tree will bear fruit within 2-4 years of planting.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939e8f401f8790004000008.jpg?1496967407`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939e8fc01f8790004000009.jpg?1496967413`]
  },
  {
    id: 23,
    name: `Pear`,
    description: `Pears are fruiting trees or shrubs in the Pyrus genus, in the family Rosaceae. There are approximately 3000 varieties worldwide, and they are commonly divided into two major groups: European and Asian. European Pears are wider at the bottom and taper at the top. Asian Pears are shaped more like apples, and have a different texture and flavor. Most pear species are deciduous, but some in southeast Asia are evergreen. Pears are generally cold-hardy, surviving winter temperatures between -25 to -40°C. In the spring, they produce white (and sometimes, yellow or pink) flowers with 5 petals. Like apples, pears are propagated by grafting the selected variety onto a rootstock. `,
    sunReqs: `Full Sun`,
    spread: null,
    rowSpacing: null,
    height: null,
    daysToMaturity: `More growing information is available in our resources section`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b8e47fe8d750003000439.jpg?1466666567`, `https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b8e49fe8d75000300043a.jpg?1466666568`]
  }
]

app.locals.users = [
  {
    id: 1,
    firstName: `Merlin`,
    lastName: `Crumpacker`,
    myGarden: [1, 7]
  },
  {
    id: 2,
    firstName: `Jerry`,
    lastName: `Garcia`,
    myGarden: [1, 3, 8, 10]
  },
  {
    id: 3,
    firstName: `John`,
    lastName: `Dillinger`,
    myGarden: [1, 2, 3]
  },
  {
    id: 4,
    firstName: `Steven`,
    lastName: `Universe`,
    myGarden: [2, 5, 7, 8, 9, 10]
  },
  {
    id: 5,
    firstName: `Finn`,
    lastName: `Mertens`,
    myGarden: [6]
  },
]
