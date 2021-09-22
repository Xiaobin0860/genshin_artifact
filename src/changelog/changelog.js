export default [
    {
        time: "2021/2/20",
        version: "2.0.1",
        changes: [
            "能够计入乐团4、角斗士4的效果",
            "优化了UI",
            "增加甘雨的专属目标函数",
        ]
    },
    {
        time: "2021/2/22",
        version: "2.1.0",
        changes: [
            "增加魈的专属目标函数",
            "增加圣遗物编辑功能",
            "修复若干bug",
            "优化一小部分的推荐算法"
        ]
    },
    {
        time: "2021/2/23",
        version: "2.1.1",
        changes: [
            "增加迪奥娜专属目标函数",
            "新增禁用结果按钮",
            "添加算法说明",
            "修复先选突破后再选突破前等级时无法正确计算的bug",
        ]
    },
    {
        time: "2021/2/24",
        version: "2.2.0",
        changes: [
            "增加护摩之杖、千岩古剑、千岩长枪（粗略计算这些武器都很离谱）",
            "增加诺艾尔专属目标函数",
            "新增“50%暴击”目标函数",
            "新增“全部启用”按钮",
            "新增json增量导入",
            "修复“狼的末路”无法正确计算的bug",
        ]
    },
    {
        time: "2021/2/25",
        version: "2.3.0",
        changes: [
            "重构目标函数的逻辑，使之有能力计算动态buff收益",
            "角色面板可以查看详细属性（详细暴击率、伤害加成）" ,
            "重写甘雨目标函数，使之能够适应阿莫斯之弓、天赋、冰4套的动态加成",
            "重构通用目标函数，可以适应不同角色使用不同的属性",
        ]
    },
    {
        time: "2021/2/26",
        version: "2.3.1",
        changes: [
            "增加了技能等级的支持，某些角色（如诺艾尔、钟离等）计算更精确",
            "修复黎明神剑无法正确计算的bug",
            "新增某些武器的特殊参数",
            "修复甘雨目标函数的bug",
            "新增阿贝多、芭芭拉的目标函数",
        ]
    },
    {
        time: "2021/2/27",
        version: "2.3.2",
        changes: [
            "新增融化反应目标函数",
            "增加胡桃（非正式服数据）",
        ]
    },
    {
        time: "2021/3/2",
        version: "2.4.0",
        changes: [
            "重构目标函数逻辑，目标函数可以进行更精细的配置",
            "大幅优化刻晴目标函数",
        ]
    },
    {
        time: "2021/3/3",
        version: "2.4.1",
        changes: [
            "优化胡桃目标函数，现在可以自定义蒸发、融化频率，重击比例等",
        ]
    },
    {
        time: "2021/3/4",
        version: "2.4.2",
        changes: [
            "增加“温迪-风神之诗”目标函数",
            "增加“期望伤害-充能”目标函数"
        ]
    },
    {
        time: "2021/3/6",
        version: "2.4.3",
        changes: [
            "新增随机副词条功能，方便计算某个角色适合什么圣遗物"
        ]
    },
    {
        time: "2021/3/7",
        version: "2.4.4",
        changes: [
            "新增“元素反应-增幅反应-期望伤害”目标函数",
            "支持限定圣遗物的主词条",
        ]
    },
    {
        time: "2021/3/10",
        version: "3.0.0",
        changes: [
            "新增计算：圣遗物潜力值",
            "圣遗物支持等级和品质",
        ]
    },
    {
        time: "2021/3/11",
        version: "3.0.1",
        changes: [
            "新增“固定暴击率-期望伤害”目标函数",
        ]
    },
    {
        time: "2021/3/12",
        version: "3.0.2",
        changes: [
            "修复阿贝多2命情况下无法计算的问题",
        ]
    },
    {
        time: "2021/3/13",
        version: "3.0.3",
        changes: [
            "圣遗物数量取消上限，新增圣遗物数量的提示",
            "增加胡桃目标函数的最大伤害选项",
            "优化UI"
        ]
    },
    {
        time: "2021/3/18",
        version: "3.1.0",
        changes: [
            "新增终末嗟叹之诗、暗巷的酒与诗、暗巷闪光",
            "增加预设系统",
            "修改圣遗物搭配配置的逻辑",
        ]
    },
    {
        time: "2021/3/20",
        version: "3.1.1",
        changes: [
            "修复无法正确编辑圣遗物的问题",
            "增加“钟离-天动万象-最低生命值”目标函数",
        ]
    },
    {
        time: "2021/3/22",
        version: "3.1.2",
        changes: [
            "新增“比例”圣遗物评分/潜力算法",
            "增加配装结果页面禁用单个圣遗物功能",
        ]
    },
    {
        time: "2021/3/26",
        version: "3.2.0",
        changes: [
            "修复磐岩结绿计算错误的问题",
            "新增部分帮助文档",
        ]
    },
    {
        time: "2021/4/5",
        version: "3.2.1",
        changes: [
            "修复“魈-靖腰傩舞”无法正确计算的问题",
        ]
    },
    {
        time: "2021/4/7",
        version: "3.3.0",
        changes: [
            "增加罗莎莉亚",
            "增加“罗莎莉亚-噬罪的告解”目标函数"
        ]
    },
    {
        time: "2021/4/14",
        version: "3.4.0",
        changes: [
            "新增武器风花之颂、暗巷猎手",
            "增加json文件拖拽",
        ]
    },
    {
        time: "2021/4/15",
        version: "3.5.0",
        changes: [
            "修改迪卢克专属目标函数，更加可定制化",
            "修改若干bug",
            "建立全局API",
        ]
    },
    {
        time: "2021/4/17",
        version: "3.6.0",
        changes: [
            "支持查看前五名最优配装",
            "增加配装最大值的历史记录",
        ]
    },
    {
        time: "2021/4/18",
        version: "3.7.0",
        changes: [
            "增加配装计算时自定义buff支持",
            "增强迪卢克目标函数",
            "优化UI",
            "增加部分globalAPI",
        ]
    },
    {
        time: "2021/4/19",
        version: "3.8.0",
        changes: [
            "支持手机端访问，但不支持手机端运算",
            "增加保存预设功能",
            "升级预设表示，能够保存buff以及限制等全部参数"
        ]
    },
    {
        time: "2021/4/21",
        version: "3.9.0",
        changes: [
            "增加计算时等级过滤器",
            "属性的绿字与白字分开显示",
        ]
    },
    {
        time: "2021/4/21",
        version: "3.9.1",
        changes: [
            "修复限定主词条无效的bug",
            "3星及以下圣遗物不参与潜能计算",
        ]
    },
    {
        time: "2021/4/24",
        version: "3.10.0",
        changes: [
            "增加圣遗物统计页面",
            "优化、修复若干项目",
        ]
    },
    {
        time: "2021/4/25",
        version: "3.10.1",
        changes: [
            "增强胡桃函数，支持设定6命占比",
            "圣遗物潜力结果支持分页",
            "增强词条效率潜力函数，支持自定义权重"
        ]
    },
    {
        time: "2021/4/29",
        version: "3.11.0",
        changes: [
            "新增圣遗物苍白之火、千岩牢固",
            "新增角色烟绯",
            "圣遗物根据星级显示不同的颜色",
        ]
    },
    {
        time: "2021/5/8",
        version: "3.11.1",
        changes: [
            "修复若干bug，详见commit",
            "没有符合条件的圣遗物时提示更友好",
        ]
    },
    {
        time: "2021/5/19",
        version: "3.12.0",
        changes: [
            "增加新角色-优菈",
            "增加新武器-松籁响起之时",
        ]
    },
    {
        time: "2021/6/3",
        version: "4.0.0",
        changes: [
            "增加角色伤害计算器",
            "增加计算预设单独导出/导入与批量导出/导入",
            "增加更详细的武器参数",
            "增加圣遗物参数",
            "增加限定属性最小值",
            "增加简易圣遗物过滤器",
            "增加圣遗物搭配分析、角色面板分析",
            "优化配装页面",
        ]
    },
    {
        time: "2021/6/11",
        version: "4.1.0",
        changes: [
            "新增武器：嘟嘟可故事集，幽夜华尔兹",
            "优化圣遗物显示",
            "升级“温迪-风神之诗”目标函数",
        ]
    },
    {
        time: "2021/6/18",
        version: "4.2.0",
        changes: [
            "新增圣遗物套装（圣遗物组）",
            "修复在筛选情况下无法正确删除、锁定、编辑圣遗物的问题",
        ]
    },
    {
        time: "2021/6/30",
        version: "4.3.0",
        changes: [
            "新增枫原万叶、苍古自由之誓",
            "新增“最大扩散伤害”期望函数",
        ]
    },
    {
        time: "2021/7/22",
        version: "4.4.0",
        changes: [
            "增加角色神里凌华",
            "增加武器天目影打刀、雾切之回光、破魔之弓、喜多院十文字、桂木斩长正、白辰之环",
            "增加圣遗物套装追忆之注连、绝缘之旗印",
        ]
    },
    {
        time: "2021/8/11",
        version: "4.5.0",
        changes: [
            "增加角色宵宫、早柚",
            "增加武器飞雷之弦振",
            "增加目标函数：早柚-呼呼大睡时间"
        ]
    },
    {
        time: "2021/9/1",
        version: "4.6.0",
        changes: [
            "增加角色雷电将军、埃洛伊",
            "增加武器薙草之稻光、衔珠海皇、渔获",
        ]
    },
    {
        time: "2021/9/8",
        version: "4.6.1",
        changes: [
            "增加目标函数：神里绫华-白鹭公主",
            "增加buff：雷电将军-雷罚恶曜之眼",
        ],
    },
    {
        time: "2021/9/21",
        version: "4.7.0",
        changes: [
            "增加角色：珊瑚宫心海",
            "增加武器：不灭月华",
        ],
    }
]