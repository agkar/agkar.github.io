(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{4843:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publications",function(){return i(3324)}])},9871:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var a=i(5893),n=i(8908),r=i(7059),o=i.n(r);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(t){s(e,t,i[t])}))}return e}function l(e){var t,i=e.title,r=e.photoURL,s=e.photoAlt,l=e.photoRef,p=e.description,h=e.projectPosition,d=e.technologies,u=e.links,g=void 0===u?[]:u,m=e.children,b={marginTop:"0.25rem"},f=l?(0,a.jsx)("a",{href:l,children:(0,a.jsx)("img",{className:o().thumbnail,src:r,alt:s})}):(0,a.jsx)("img",{className:o().thumbnail,src:r,alt:s});t=p||m;var v=g.map((function(e,t){return(0,a.jsxs)(a.Fragment,{children:[t?",":""," ",(0,a.jsx)("a",{href:e.link,children:e.title})]})}));return(0,a.jsxs)("article",{className:o().projectStyle,children:[(0,a.jsx)("div",{className:o().perspective,children:(0,a.jsx)("div",{className:o().card_perspective,onMouseMove:function(e){var t=e.currentTarget.getBoundingClientRect(),i=t.width/2,a=t.height/2,r=(e.clientX-t.left-i)/i,o=(0,n.u)(-(e.clientY-t.top-a)/a,-1,1);e.currentTarget.style.transform="rotateY("+10*r+"deg) rotateX("+10*o+"deg)"},onMouseLeave:function(e){e.currentTarget.style.transform="rotateY(0deg) rotateX(0deg)"},children:f})}),(0,a.jsxs)("div",{className:o().description,children:[(0,a.jsx)("div",{className:o().title,children:i}),(0,a.jsx)("div",{className:o().abstract,style:{marginBottom:"0.75rem"},children:t}),(0,a.jsxs)("div",{style:c({},b,{display:h?"block":"none"}),children:[(0,a.jsx)("span",{style:{fontWeight:500,width:"6.5rem",display:"inline-block"},children:"Position"}),": ",h]}),(0,a.jsxs)("div",{style:c({},b,{display:d?"block":"none"}),children:[(0,a.jsx)("span",{style:{fontWeight:500,width:"6.5rem",display:"inline-block"},children:"Technologies"}),": ",d]}),(0,a.jsxs)("div",{style:c({},b,{display:v.length>0?"block":"none"}),children:[(0,a.jsx)("span",{style:{fontWeight:500,width:"6.5rem",display:"inline-block"},children:"Links"}),": ",v]})]})]})}},3324:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var a=i(5893),n=i(9008),r=(i(9871),i(8908)),o=i(8354),s=i.n(o);function c(e){var t=e.title,i=e.photoURL,n=e.photoAlt,o=e.photoRef,c=e.authors,l=e.journal,p=e.abstract,h=e.paper,d=e.bib,u=e.presentation,g=e.video,m=e.website,b=e.code,f=o?(0,a.jsx)("a",{href:o,children:(0,a.jsx)("img",{className:s().thumbnail,src:i,alt:n})}):(0,a.jsx)("img",{className:s().thumbnail,src:i,alt:n}),v=c.match(/(.*)A. Gkaravelis(.*)/),y=(0,a.jsxs)(a.Fragment,{children:[v[1]," ",(0,a.jsx)("strong",{children:"A. Gkaravelis"})," ",v[2]]});return(0,a.jsxs)("article",{className:s().projectStyle,children:[(0,a.jsx)("div",{className:s().perspective,children:(0,a.jsx)("div",{className:s().card_perspective,onMouseMove:function(e){var t=e.currentTarget.getBoundingClientRect(),i=t.width/2,a=t.height/2,n=(e.clientX-t.left-i)/i,o=(0,r.u)(-(e.clientY-t.top-a)/a,-1,1);e.currentTarget.style.transform="rotateY("+10*n+"deg) rotateX("+10*o+"deg)"},onMouseLeave:function(e){e.currentTarget.style.transform="rotateY(0deg) rotateX(0deg)"},children:f})}),(0,a.jsxs)("div",{className:s().projectDescription,children:[(0,a.jsx)("div",{className:s().projectTitle,children:t}),(0,a.jsx)("div",{className:s().abstract,children:y}),(0,a.jsx)("div",{className:s().abstract,style:{marginBottom:"0.75rem"},children:l}),(0,a.jsxs)("div",{className:s().abstract,style:{marginBottom:"0.75rem"},children:[(0,a.jsx)("strong",{children:"Abstract."})," ",p]}),(0,a.jsxs)("div",{className:s().pubMediaContainer,children:[h&&(0,a.jsx)("a",{className:s().pubMediaRef,href:h,target:"__blank",children:(0,a.jsx)("img",{width:"28",height:"28",src:"images/PDF_24.png",alt:"paper_pdf"})}),d&&(0,a.jsx)("a",{className:s().pubMediaRef,href:d,target:"__blank",children:(0,a.jsx)("img",{width:"28",height:"28",src:"images/BibIcon.png",alt:"paper_bib"})}),g&&(0,a.jsx)("a",{className:s().pubMediaRef,href:g,target:"__blank",children:(0,a.jsx)("img",{width:"28",height:"28",src:"images/video.svg",alt:"paper_video"})}),u&&(0,a.jsx)("a",{className:s().pubMediaRef,href:u,target:"__blank",children:(0,a.jsx)("img",{width:"28",height:"28",src:"images/presentation.svg",alt:"paper_presentation"})}),b&&(0,a.jsx)("a",{className:s().pubMediaRef,href:b,target:"__blank",children:(0,a.jsx)("img",{width:"28",height:"28",src:"images/github-mark.png",alt:"paper_code"})}),m&&(0,a.jsx)("a",{className:s().pubMediaRef,href:m,target:"__blank",children:(0,a.jsx)("img",{width:"28",height:"28",src:"images/world.svg",alt:"paper_website"})})]})]})]})}var l=i(7673),p=i(3193),h=(i(7294),"A. Gkaravelis | Publication List"),d="Research Publications of Anastasios Gkaravelis",u="projects/lotus.jpg";function g(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(n.default,{children:[(0,a.jsx)("title",{children:h}),(0,a.jsx)("meta",{name:"description",content:d}),(0,a.jsx)("link",{rel:"icon",href:"images/icon1.jpg"}),(0,a.jsx)("meta",{name:"robots",content:"follow, index"}),(0,a.jsx)("link",{rel:"canonical",href:"https://agkaravelis.com"}),(0,a.jsx)("meta",{property:"og:url",content:"https://agkaravelis.com"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:site_name",content:"Anastasios Gkaravelis"}),(0,a.jsx)("meta",{property:"og:title",content:h}),(0,a.jsx)("meta",{property:"og:description",content:d}),(0,a.jsx)("meta",{property:"og:image",content:u}),(0,a.jsx)("meta",{name:"twitter:card",content:u}),(0,a.jsx)("meta",{name:"twitter:site",content:"@anastasios_Gk"}),(0,a.jsx)("meta",{name:"twitter:title",content:h}),(0,a.jsx)("meta",{name:"twitter:description",content:d}),(0,a.jsx)("meta",{name:"twitter:image",content:u})]}),(0,a.jsx)(l.Z,{}),(0,a.jsxs)("main",{children:[(0,a.jsx)("h1",{children:"Publication List"}),(0,a.jsx)(c,{title:"Opening Design using Bayesian Optimization",photoURL:"publications/od_cgi23.webp",photoAlt:"opening cgi publication",photoRef:"",authors:"N. Vitsas, I. Evangelou, G. Papaioannou, A. Gkaravelis",journal:"Virtual Reality and Intelligent Hardware, Proc. Computer Graphics International, 2023",abstract:"Opening design is a major consideration in architectural buildings during early structural layout specification. Decisions regarding the geometric characteristics of windows, skylights, hatches, etc., greatly impact the overall energy efficiency, airflow and appearance of a building, both internally and externally. In this work, we employ a goal-based, illumination-driven approach to opening design using a Bayesian Optimization approach, based on Gaussian Processes. A method is proposed that allows a designer to easily set lighting intentions along with qualitative and quantitative characteristics of desired openings. All parameters are optimized within a cost minimization framework to calculate geometrically feasible, architecturally admissible and aesthetically pleasing openings of any desired shape, while respecting the designer's lighting constraints.",paper:"dsad"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"A Neural Builder for Spatial Subdivision Hierarchies",photoURL:"publications/VC2023_Neural_3.webp",photoAlt:"neural cgi paper",photoRef:"https://link.springer.com/content/pdf/10.1007/s00371-023-02975-y.pdf",authors:"I. Evangelou, G. Papaioannou, K. Vardis, A. Gkaravelis",journal:"Visual Computer 2023, proc. CGI 2023",abstract:"Spatial data structures, such as k-d trees and bounding volume hierarchies, are extensively used in computer graphics for the acceleration of spatial queries in ray tracing, nearest neighbour searches and other tasks. Typically, the splitting strategy employed during the construction of such structures is based on the greedy evaluation of a predefined objective function, resulting in a less than optimal subdivision scheme. In this work, for the first time, we propose the use of unsupervised deep learning to infer the structure of a fixed-depth k-d tree from a constant, subsampled set of the input primitives, based on the recursive evaluation of the cost function at hand. This results in high-quality upper spatial hierarchy, inferred in constant time and without paying the intractable price of a fully recursive tree optimisation. The resulting fixed-depth tree can then be further expanded, in parallel, into either a full k-d tree or transformed into a bounding volume hierarchy, with any known conventional tree builder. The approach is generic enough to accommodate different cost functions, such as the popular surface area and volume heuristics. We experimentally validate that the resulting hierarchies have competitive traversal performance with respect to established tree builders, while maintaining minimal overhead in construction times.",paper:"https://link.springer.com/content/pdf/10.1007/s00371-023-02975-y.pdf"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"Parallel Transformation of Bounding Volume Hierarchies into Oriented Bounding Box Trees",photoURL:"publications/EG23_OBB_Tree_Builder2.webp",photoAlt:"parallel eg paper",photoRef:"https://lotus.aueb.gr/content/EG23_OBB_Tree_Builder.pdf",authors:"N. Vitsas, I. Evangelou, G. Papaioannou, A. Gkaravelis",journal:"Computer Graphics Forum 2023, proc. Eurographics 2023",abstract:"Oriented bounding box (OBB) hierarchies can be used instead of hierarchies based on axis-aligned bounding boxes (AABB), providing tighter fitting to the underlying geometric structures and resulting in improved interference tests, such as ray-geometry intersections. In this paper, we present a method for the fast, parallel transformation of an existing bounding volume hierarchy (BVH), based on AABBs, into a hierarchy based on oriented bounding boxes. To this end, we parallelise a high-quality OBB extraction algorithm from the literature to operate as a standalone OBB estimator and further extend it to efficiently build an OBB hierarchy in a bottom up manner. This agglomerative approach allows for fast parallel execution and the formation of arbitrary, high-quality OBBs in bounding volume hierarchies. The method is fully implemented on the GPU and extensively evaluated with ray intersections.",paper:"https://lotus.aueb.gr/content/EG23_OBB_Tree_Builder.pdf",presentation:"https://lotus.aueb.gr/content/obvh_presentation.pdf",code:"https://github.com/cgaueb/obvh",video:"https://youtu.be/zCg31NUkZGs"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"Real-Time Volume Editing on Low-Power Virtual Reality Devices",photoURL:"publications/sculpting.webp",photoAlt:"parallel eg paper",photoRef:"http://graphics.cs.aueb.gr/graphics/docs/papers/Virtual_Sculpting.pdf",authors:"I. Evangelou, A. Gkaravelis, G. Papaioannou",journal:"Proc. 18th International Joint Conference on Computer Vision, Imaging and Computer Graphics Theory and Applications (GRAPP), 2023",abstract:"The advent of consumer-grade, low-power, untethered virtual reality devices has spurred the creation of numerous applications, with important implications to training, socialisation, education and entertainment. However, such devices are typically based on modified mobile architectures and processing units, offering limited capabilities in terms of geometry and shading throughput, compared to their desktop counterparts. In this work we provide insights on how to implement two combined and particularly challenging tasks on such a platform, those of real-time volume editing and physically-based rendering. We implement and showcase our techniques in the context of a virtual sculpting edutainment application, intended for mass deployment at a virtual reality exhibition centre.",paper:"http://graphics.cs.aueb.gr/graphics/docs/papers/Virtual_Sculpting.pdf"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"Remote Teaching Advanced Rendering Topics Using the Rayground Platform",photoURL:"publications/remote_teaching.jpg",photoAlt:"parallel eg paper",photoRef:"http://graphics.cs.aueb.gr/graphics/docs/papers/RemoteTeachingRG.pdf",authors:"A. A. Vasilakis, G. Papaioannou, N. Vitsas, A. Gkaravelis",journal:"IEEE Computer Graphics and Applications, 41(5), p. 99-103, 2021.",abstract:"Rayground is a novel online framework for fast prototyping and interactive demonstration of ray tracing algorithms. It aims to set the ground for the online development of ray-traced visualization algorithms in an accessible manner for everyone, stripping off the mechanics that get in the way of creativity and the understanding of the core concepts. Due to the COVID-19 pandemic, remote teaching and online coursework have taken center stage. In this work, we demonstrate how Rayground can incorporate advanced instructive rendering media during online lectures as well as offer attractive student assignments in an engaging, hands-on manner. We cover things to consider when building or porting methods to this new development platform, best practices in remote teaching and learning activities, and time-tested assessment and grading strategies suitable for fully online university courses.",paper:"http://graphics.cs.aueb.gr/graphics/docs/papers/RemoteTeachingRG.pdf",code:"https://cgaueb.github.io/publications/remote_teaching_rg/"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"WEBRAYS: Ray Tracing on the Web",photoURL:"publications/webrays.webp",photoAlt:"parallel eg paper",photoRef:"http://graphics.cs.aueb.gr/graphics/docs/papers/webrays.pdf",authors:"N. Vitsas, A. Gkaravelis, A. A. Vasilakis, G. Papaioannou",journal:"Ray Tracing Gems II, A. Marrs (Ed.), P. Shirley (Ed.), I. Wald (Ed.), ISBN 978-1-4842-4427-2, p. 281-299, 2021.",abstract:"This chapter introduces WebRays, a GPU-accelerated ray intersection engine for the World Wide Web. It aims to offer a flexible and easy-to-use programming interface for robust and high-performance ray intersection tests on modern browsers. We cover design considerations, best practices, and usage examples for several ray tracing tasks.",paper:"http://graphics.cs.aueb.gr/graphics/docs/papers/webrays.pdf",code:"https://cgaueb.github.io/publications/webrays/"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"Rayground: An Online Educational Tool for Ray Tracing",photoURL:"projects/rayground.webp",photoAlt:"parallel eg paper",photoRef:"http://graphics.cs.aueb.gr/graphics/docs/papers/Rayground___EG_2020_Educational.pdf",authors:"N. Vitsas, A. Gkaravelis, A. A. Vasilakis, K. Vardis, G. Papaioannou",journal:"Eurographics 2020 Educational paper track, May, 2020",abstract:"In this paper, we present Rayground; an online, interactive education tool for richer in-class teaching and gradual self-study, which provides a convenient introduction into practical ray tracing through a standard shader-based programming interface. Setting up a basic ray tracing framework via modern graphics APIs, such as DirectX 12 and Vulkan, results in complex and verbose code that can be intimidating even for very competent students. On the other hand, Rayground aims to demystify ray tracing fundamentals, by providing a well-defined WebGL-based programmable graphics pipeline of configurable distinct ray tracing stages coupled with a simple scene description format. An extensive discussion is further offered describing how both undergraduate and postgraduate computer graphics theoretical lectures and laboratory sessions can be enhanced by our work, to achieve a broad understanding of the underlying concepts. Rayground is open, cross-platform, and available to everyone.",paper:"http://graphics.cs.aueb.gr/graphics/docs/papers/Rayground___EG_2020_Educational.pdf",website:"https://rayground.com",video:"https://www.youtube.com/watch?v=CQycwzFrbSo",presentation:"https://www.youtube.com/watch?v=isLY6yUIMMA"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"Illumination-Guided Furniture Layout Optimization",photoURL:"publications/iflo.jpg",photoAlt:"parallel eg paper",photoRef:"https://diglib.eg.org/bitstream/handle/10.1111/cgf13930/v39i2pp291-301.pdf",authors:"N. Vitsas, G. Papaioannou , A. Gkaravelis, A. A. Vasilakis",journal:"Computer Graphics Forum (proc. Eurographics 2020), 39(2), 2020.",abstract:"Lighting plays a very important role in interior design. However, in the specific problem of furniture layout recommendation, illumination has been either neglected or addressed with empirical or very simplified solutions. The effectiveness of a particular layout in its expected task performance can be greatly affected by daylighting and artificial illumination in a non-trivial manner. In this paper, we introduce a robust method for furniture layout optimization guided by illumination constraints. The method takes into account all dominant light sources, such as sun light, skylighting and fixtures, while also being able to handle movable light emitters. For this task, the method introduces multiple generic illumination constraints and physically-based light transport estimators, operating alongside typical geometric design guidelines, in a unified manner. We demonstrate how to produce furniture arrangements that comply with important safety, comfort and efficiency illumination criteria, such as glare suppression, under complex light-environment interactions, which are very hard to handle using empirical or simplified models.",paper:"https://diglib.eg.org/bitstream/handle/10.1111/cgf13930/v39i2pp291-301.pdf",video:"https://www.youtube.com/watch?v=0MtZp-0CHfs",presentation:"https://www.youtube.com/watch?v=d8yRxoVStXs"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"Light Optimization for Detail Highlighting",photoURL:"publications/marbles.jpg",photoAlt:"parallel eg paper",photoRef:"http://graphics.cs.aueb.gr/graphics/docs/papers/DetailHighlighting2.pdf",authors:"A. Gkaravelis, G. Papaioannou",journal:"Computer Graphics Forum (proc. Pacific Graphics 2018), 37(7), pp. 37-44, October, 2018.",abstract:"In this paper we propose an effective technique for the automatic arrangement of spot lights and other luminaires on or near user-provided arbitrary mounting surfaces in order to highlight the geometric details of complex objects. Since potential applications include the lighting design for exhibitions and similar installations, the method takes into account obstructing geometry and potential occlusion from visitors and other non-permanent blocking geometry. Our technique generates the most appropriate position and orientation for light sources based on a local contrast maximization near salient geometric features and a clustering mechanism, producing consistent and view-independent results, with minimal user intervention. We validate our method with realistic test cases including multiple and disjoint exhibits as well as high occlusion scenarios.",paper:"http://graphics.cs.aueb.gr/graphics/docs/papers/DetailHighlighting2.pdf",bib:"publications/lodh2018.bib"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"Detail Highlighting using a Shadow Edge Histogram",photoURL:"publications/seh.webp",photoAlt:"parallel eg paper",photoRef:"http://graphics.cs.aueb.gr/graphics/docs/papers/FeatureHighlighting.pdf",authors:"A. Gkaravelis, G. Papaioannou",journal:"proc. Eurograhpics (short paper), 2017",abstract:"In this paper we propose a simple and effective technique for setting up a configuration of directional light sources to accentuate the prominent geometric features of complex objects by increasing the local shadow contrast near them. Practical applications of such a task are encountered among others in professional photography, and cinematography. The method itself, which is based on a voting mechanism, quickly produces consistent and view-independent results, with minimal user intervention.",paper:"http://graphics.cs.aueb.gr/graphics/docs/papers/FeatureHighlighting.pdf",bib:"publications/seh2017.bib"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"Inverse Lighting Design using a Coverage Optimization Strategy",photoURL:"publications/cgi2016.jpg",photoAlt:"parallel eg paper",photoRef:"https://dl.acm.org/citation.cfm?id=2962791",authors:"A. Gkaravelis, G. Papaioannou",journal:"The Visual Computer: International Journal of Computer Graphics, Volume 32, Issue 6-8, pp. 771-780, June 2016",abstract:"Lighting design is an essential process in computer cinematography, games, architectural design and various other applications for correctly illuminating or highlighting parts of a scene and enhancing storytelling. When targeting specific illumination goals and constraints, this process can be tedious and counterintuitive, even for experienced users and thus automatic, goal-driven methods have emerged for the estimation of a lighting configuration to match the desired result. We present a general automatic approach to such an inverse lighting design problem, where the number of light sources along with their position and emittance are computed given a set of user-specified lighting goals. To this end, we employ a special hierarchical light clustering that operates in the lighting goal coverage domain and overcomes limitations of previous approaches in environments with high occlusion or structural complexity. Our approach is independent of the underlying light transport model and can quickly converge to usable solutions. We validate our results and provide comparative evaluation with the current state of the art.",paper:"https://dl.acm.org/citation.cfm?id=2962791",bib:"publications/ild2016.bib",video:"publications/CGI_2016_Supplementary_material_24.mp4"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"A Generic Physically-based Approach to the Opening Design Problem",photoURL:"publications/igp15.jpg",photoAlt:"parallel eg paper",photoRef:"http://graphics.cs.aueb.gr/graphics/docs/papers/IGP-short.pdf",authors:"K. Kalampokis, G. Papaioannou, A. Gkaravelis",journal:"Proc. Eurographics 2016 (short paper), 2016",abstract:"Today architectural design harnesses photorealistic rendering to accurately assess energy transport for the design of energyefficient buildings. In this context, we present an automatic physically-based solution to the opening design problem, i.e. the goal-driven process of defining openings on the input geometry given a set of lighting constraints, to better exploit natural daylight. Based on a hierarchical approach that combines a linear optimization strategy and a genetic algorithm, our method computes the optimal number, position, size and shape of openings, using a path tracing-based estimator to precisely model the light transport for arbitrary materials and geometry. The method quickly converges to an opening configuration that optimally approximates the desired illumination, with no special geometry editing requirements and the ability to trade quality for performance for interactive applications. We validate our results against ground truth experiments for various scenes and time-of-day intervals.",paper:"http://graphics.cs.aueb.gr/graphics/docs/papers/IGP-short.pdf"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"Inverse Light Design for High-Occlusion Environments",photoURL:"publications/ilp1.jpg",photoAlt:"parallel eg paper",photoRef:"http://graphics.cs.aueb.gr/graphics/docs/papers/LightDesign.pdf",authors:"A. Gkaravelis, G. Papaioannou, K. Kalampokis",journal:"GRAPP 2015 Proceedings of the 10th International Conference on Computer Graphics Theory and Applications , pp. 26-34, Berlin, Germany",abstract:"Lighting design is a demanding but very important task in computer cinematography, games and architectural design. Computer-assisted lighting design aims at providing the designers with tools to describe the desired outcome and derive a suitable lighting configuration to match their goal. In this paper, we present an automatic approach to the inverse light source emittance and positioning problem, based on a layered linear / non-linear optimization strategy and the introduction of a special light source indexing according to the compatibility of each individual luminary position with the desired illumination. Our approach is independent of a particular light transport model and can quickly converge to an appropriate and plausible light configuration that approximates the desired illumination and can handle environments with high occlusion.",paper:"http://graphics.cs.aueb.gr/graphics/docs/papers/LightDesign.pdf",bib:"publications/ild1.bib"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"Real-time Radiance Caching using Chrominance Compression",photoURL:"publications/crc.jpg",photoAlt:"parallel eg paper",photoRef:"http://jcgt.org/published/0003/04/06/",authors:"K. Vardis, G. Papaioannou, A. Gkaravelis",journal:"Journal of Computer Graphics Techniques (JCGT), 3(4), pp. 111-131, 2014",abstract:"This paper introduces the idea of expressing the radiance field in luminance/chrominance values and encoding the directional chrominance in lower detail. Reducing the spherical harmonics coefficients for the chrominance components allows the storage of luminance in higher order spherical harmonics in the same memory budget resulting in finer representation of intensity transitions. We combine the radiance field chrominance compression with an optimized cache population scheme, by generating cache points only at locations, which are guaranteed to contribute to the reconstructed surface irradiance. These computation and storage savings allow the use of higher-order spherical harmonics representation to sufficiently capture and reconstruct the directionality of diffuse irradiance, while maintaining fast and customizable performance. We exploit this radiance representation in a low-cost real-time radiance caching scheme, with support for arbitrary light bounces and view-independent indirect occlusion and showcase the improvements in highly complex and dynamic environments. Furthermore, our general qualitative evaluation indicates benefits for offline rendering application as well.",paper:"http://jcgt.org/published/0003/04/06/",bib:"https://jcgt.org/published/0003/04/06/bibtex.bib",code:"https://jcgt.org/published/0003/04/06/demo.zip",video:"https://jcgt.org/published/0003/04/06/video.mp4"}),(0,a.jsx)("br",{}),(0,a.jsx)("h2",{children:" Phd Thesis "}),(0,a.jsx)(c,{title:"Efficient Algorithms for Inverse Lighting Design",photoURL:"publications/teaserPhd.jpg",photoAlt:"parallel eg paper",photoRef:"https://drive.google.com/open?id=1k2TjDT6-lHh8jlYZGc9yMVnTavVg7-iR",authors:"A. Gkaravelis, G. Papaioannou",journal:"",abstract:"A dissertation submitted to the Department of Informatics of Athens University of Economics & Business.",paper:"https://drive.google.com/open?id=1k2TjDT6-lHh8jlYZGc9yMVnTavVg7-iR"}),(0,a.jsx)("br",{}),(0,a.jsx)("h2",{children:" Technical Reports "}),(0,a.jsx)(c,{title:"State of the Art Report on Opening and Urban Lighting Design",photoURL:"https://lotus.aueb.gr/news/goalvsindirect3.png",photoAlt:"STAR on Opening and Urban Lighting Design",photoRef:"https://lotus.aueb.gr/content/Lotus_STAR.pdf",authors:"Nikolaos Vitsas, Iordanis Evangelou, Georgios Papaioannou, Eleni Kovanidou, A. Gkaravelis",journal:"",abstract:"This report presents a thorough investigation of the complex and active research area in both opening and urban lighting design.",paper:"https://lotus.aueb.gr/content/Lotus_STAR.pdf"}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{title:"State of the Art Report on Interactive Global Illumination Techniques and Inverse Lighting Problems",photoURL:"publications/T1_1.jpg",photoAlt:"STAR on Interactive Global Illumination Techniques and Inverse Lighting Problems",photoRef:"http://graphics.cs.aueb.gr/graphics/docs/GLIDE-D1.1.pdf",authors:"A. A. Vasilakis, K. Vardis, A. Gkaravelis, G. Papaioannou, K. Kalampokis",journal:"",abstract:"This report presents a thorough investigation of the complex and active research area in both interactive global illumination and inverse lighting problems, with a focus on interactive applications and dynamic environments.",paper:"http://graphics.cs.aueb.gr/graphics/docs/GLIDE-D1.1.pdf"}),(0,a.jsx)("br",{})]}),(0,a.jsx)(p.Z,{})]})}},8908:function(e,t,i){"use strict";i.d(t,{u:function(){return a}});var a=function(e,t,i){return Math.max(Math.min(e,i),t)}},7059:function(e){e.exports={thumbnail:"Project_thumbnail__YRlMf",description:"Project_description__ZviaA",abstract:"Project_abstract__j_moZ",title:"Project_title__3qKnA",projectStyle:"Project_projectStyle__qPSRG",card_perspective:"Project_card_perspective__779dp",thumb:"Project_thumb__LMwpk",perspective:"Project_perspective__8Asok"}},8354:function(e){e.exports={abstract:"Publication_abstract__qipCa",pubMediaContainer:"Publication_pubMediaContainer__nkElB",pubMediaRef:"Publication_pubMediaRef__9Ek0E",projectStyle:"Publication_projectStyle__2jWzH",thumbnail:"Publication_thumbnail__lL9FI",projectDescription:"Publication_projectDescription__TR8Nq",projectAbstract:"Publication_projectAbstract__ihXt3",projectTitle:"Publication_projectTitle__yTLBh",card_perspective:"Publication_card_perspective__sUX45",thumb:"Publication_thumb__IhvFi",perspective:"Publication_perspective__HvdNv"}}},function(e){e.O(0,[706,774,888,179],(function(){return t=4843,e(e.s=t);var t}));var t=e.O();_N_E=t}]);