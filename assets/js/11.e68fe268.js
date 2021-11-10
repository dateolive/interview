(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{453:function(t,a,s){"use strict";s.r(a);var n=s(27),v=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_1-线程和进程有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-线程和进程有什么区别"}},[t._v("#")]),t._v(" 1. 线程和进程有什么区别？")]),t._v(" "),s("p",[t._v("线程具有许多传统进程所具有的特征，故又称为轻型进程(Light—Weight Process)或进程元；而把传统的进程称为重型进程(Heavy—Weight Process)，它相当于只有一个线程的任务。在引入了线程的操作系统中，通常一个进程都有若干个线程，至少包含一个线程。")]),t._v(" "),s("p",[s("strong",[t._v("根本区别")]),t._v("：进程是操作系统资源分配的基本单位，而线程是处理器任务调度和执行的基本单位")]),t._v(" "),s("p",[s("strong",[t._v("资源开销")]),t._v("：每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换的开销小。")]),t._v(" "),s("p",[s("strong",[t._v("包含关系")]),t._v("：如果一个进程内有多个线程，则执行过程不是一条线的，而是多条线（线程）共同完成的；线程是进程的一部分，所以线程也被称为轻权进程或者轻量级进程。")]),t._v(" "),s("p",[s("strong",[t._v("内存分配")]),t._v("：同一进程的线程共享本进程的地址空间和资源，而进程之间的地址空间和资源是相互独立的")]),t._v(" "),s("p",[s("strong",[t._v("影响关系")]),t._v("：一个进程崩溃后，在保护模式下不会对其他进程产生影响，但是一个线程崩溃整个进程都死掉。所以多进程要比多线程健壮。")]),t._v(" "),s("p",[s("strong",[t._v("执行过程")]),t._v("：每个独立的进程有程序运行的入口. 顺序执行序列和程序出口。但是线程不能独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制，两者均可并发执行")]),t._v(" "),s("h3",{attrs:{id:"_2-创建线程的三种方式的对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建线程的三种方式的对比"}},[t._v("#")]),t._v(" 2.创建线程的三种方式的对比？")]),t._v(" "),s("p",[t._v("1）采用实现Runnable和Callable接口的方式创建多线程")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("p",[t._v("线程类只是实现了接口，还可以继承其他类。")]),t._v(" "),s("p",[t._v("在这种方式下，多个线程可以共享一个target对象，所以非常适合多个相同线程来处理同一份资源的情况，从而可以将CPU，代码和数据分开，形成清晰的模型，较好地体现了面向对象的思想。")]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("p",[t._v("如果想要访问当前线程，需要通过"),s("code",[t._v("Thread.currentThread()")]),t._v("方法")]),t._v(" "),s("p",[t._v("2）采用继承Thread类创建多线程")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("p",[t._v("编写简单，如果需要访问当前线程，则无需使用Thread.currentThread()方法，直接使用this即可获得当前线程。")]),t._v(" "),s("p",[t._v("缺点：Java是单继承，线程类已经继承了Thread类，就不能继承其他类了。")]),t._v(" "),s("p",[t._v("3）Runnable和Callable的区别？")]),t._v(" "),s("ul",[s("li",[t._v("Callable规定重写的方法是call()，而Runnable重写的方法是run()。")]),t._v(" "),s("li",[t._v("Callable的任务执行方法后可返回值，而Runnable的任务是不能返回值的。")]),t._v(" "),s("li",[t._v("call()方法可以抛出异常，而run()方法不行。")]),t._v(" "),s("li",[t._v("运行Callable任务可以拿到一个Future对象，表示异步计算的结果。它提供了检查计算是否完成的方法，以等待计算的完成，并检索计算的结果。通过Future对象可以了解任务执行情况，可取消任务的执行，还可获取执行结果。")])]),t._v(" "),s("h3",{attrs:{id:"_3-为什么要使用多线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么要使用多线程"}},[t._v("#")]),t._v(" 3.为什么要使用多线程？")]),t._v(" "),s("ul",[s("li",[t._v("从计算机底层来说： 线程可以比作是轻量级的进程，是程序执行的最小单位,"),s("strong",[t._v("线程间的切换和调度的成本远远小于进程")]),t._v("。另外，多核 CPU 时代意味着多个线程可以同时运行，这减少了线程上下文切换的开销。")]),t._v(" "),s("li",[t._v("从当代互联网发展趋势来说： 现在的系统动不动就要求百万级甚至千万级的并发量，而"),s("strong",[t._v("多线程并发编程正是开发高并发系统的基础")]),t._v("，利用好多线程机制可以大大提高系统整体的并发能力以及性能。")])]),t._v(" "),s("p",[t._v("从计算机底层来说：")]),t._v(" "),s("ul",[s("li",[t._v("单核时代： "),s("strong",[t._v("在单核时代多线程主要是为了提高 CPU 和 IO 设备的综合利用率")]),t._v("。举个例子：当只有一个线程的时候会导致 CPU 计算时，IO 设备空闲；进行 IO 操作时，CPU 空闲。我们可以简单地说这两者的利用率目前都是 50%左右。但是当有两个线程的时候就不一样了，当一个线程执行 CPU 计算时，另外一个线程可以进行 IO 操作，这样两个的利用率就可以在理想情况下达到 100%了。")]),t._v(" "),s("li",[t._v("多核时代:"),s("strong",[t._v("多核时代多线程主要是为了提高 CPU 利用率")]),t._v("。举个例子：假如我们要计算一个复杂的任务，我们只用一个线程的话，CPU 只会一个 CPU 核心被利用到，而创建多个线程就可以让多个 CPU 核心被利用到，这样就提高了 CPU 的利用率。")])]),t._v(" "),s("h3",{attrs:{id:"_4-线程的生命周期和状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-线程的生命周期和状态"}},[t._v("#")]),t._v(" 4.线程的生命周期和状态？")]),t._v(" "),s("p",[t._v("线程的生命周期以及五种基本状态：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/zhangrenfeng/images/raw/master/img/20210913143912.png",alt:"11"}})]),t._v(" "),s("p",[s("strong",[t._v("Java线程具有五中基本状态")])]),t._v(" "),s("p",[s("strong",[t._v("1）新建状态（New）")]),t._v("：当线程对象对创建后，即进入了新建状态，如：Thread t = new MyThread();")]),t._v(" "),s("p",[s("strong",[t._v("2）就绪状态（Runnable）")]),t._v("：当调用线程对象的start()方法（t.start();），线程即进入就绪状态。处于就绪状态的线程，只是说明此线程已经做好了准备，随时等待CPU调度执行，并不是说执行了t.start()此线程立即就会执行；")]),t._v(" "),s("p",[s("strong",[t._v("3）运行状态（Running）")]),t._v("：当CPU开始调度处于就绪状态的线程时，此时线程才得以真正执行，即进入到运行状态。注：就 绪状态是进入到运行状态的唯一入口，也就是说，线程要想进入运行状态执行，首先必须处于就绪状态中；")]),t._v(" "),s("p",[s("strong",[t._v("4）阻塞状态（Blocked）")]),t._v("：处于运行状态中的线程由于某种原因，暂时放弃对CPU的使用权，停止执行，此时进入阻塞状态，直到其进入到就绪状态，才 有机会再次被CPU调用以进入到运行状态。根据阻塞产生的原因不同，阻塞状态又可以分为三种：")]),t._v(" "),s("p",[t._v("1.等待阻塞：运行状态中的线程执行wait()方法，使本线程进入到等待阻塞状态；")]),t._v(" "),s("p",[t._v("2.同步阻塞 — 线程在获取synchronized同步锁失败(因为锁被其它线程所占用)，它会进入同步阻塞状态；")]),t._v(" "),s("p",[t._v("3.其他阻塞 — 通过调用线程的sleep()或join()或发出了I/O请求时，线程会进入到阻塞状态。当sleep()状态超时. join()等待线程终止或者超时. 或者I/O处理完毕时，线程重新转入就绪状态。")]),t._v(" "),s("p",[s("strong",[t._v("5）死亡状态（Dead）")]),t._v("：线程执行完了或者因异常退出了run()方法，该线程结束生命周期。")]),t._v(" "),s("h3",{attrs:{id:"_5-线程死锁是什么-如何避免"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-线程死锁是什么-如何避免"}},[t._v("#")]),t._v(" 5.线程死锁是什么？如何避免？")]),t._v(" "),s("p",[t._v("死锁：多个线程同时被阻塞，它们中一个或多个在等待某资源被释放，由于线程被无限期地阻塞，因此程序不可能正常终止。")]),t._v(" "),s("p",[t._v("死锁的四个必要条件：")]),t._v(" "),s("ul",[s("li",[t._v("互斥条件：该资源任意时刻只能由一个线程占用。")]),t._v(" "),s("li",[t._v("请求与保持条件：一个进程因请求资源而阻塞，对已获得的资源不释放。")]),t._v(" "),s("li",[t._v("非抢占式：线程已获得的资源在未使用完之前不能被其他线程强行剥夺，只有自己使用完毕后才能释放。")]),t._v(" "),s("li",[t._v("循环等待：若干进程之前形成一种头尾相接的循环等待资源关系。")])]),t._v(" "),s("h4",{attrs:{id:"如何避免死锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何避免死锁"}},[t._v("#")]),t._v(" 如何避免死锁？")]),t._v(" "),s("p",[t._v("只要破坏死锁的四个条件中的一个就可以了。")]),t._v(" "),s("ul",[s("li",[t._v("破坏互斥条件\n这个条件我们没有办法破坏，因为我们用锁本来就是想让他们互斥的（临界资源需要互斥访问）")]),t._v(" "),s("li",[t._v("破坏请求与保持条件\n一次性申请所有的资源。")]),t._v(" "),s("li",[t._v("破坏不剥夺条件\n占用部分资源的线程进一步申请其他资源时，如果申请不到，可以主动释放它占有的资源。")]),t._v(" "),s("li",[t._v("破坏循环等待条件\n靠按序申请资源来预防。按某一顺序申请资源，释放资源则反序释放。破坏循环等待条件。")]),t._v(" "),s("li",[t._v("锁排序法：（必须回答出来的点）\n指定获取锁的顺序，比如某个线程只有获得A锁和B锁，才能对某资源进行操作，在多线程条件下，如何避免死锁？\n通过指定锁的获取顺序，比如规定，只有获得A锁的线程才有资格获取B锁，按顺序获取锁就可以避免死锁。这通常被认为是解决死锁很好的一种方法。")]),t._v(" "),s("li",[t._v("使用显式锁中的ReentrantLock.try(long,TimeUnit)来申请锁")])]),t._v(" "),s("h3",{attrs:{id:"_6-常见的对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-常见的对比"}},[t._v("#")]),t._v(" 6.常见的对比？")]),t._v(" "),s("h3",{attrs:{id:"runnable-vs-callable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runnable-vs-callable"}},[t._v("#")]),t._v(" Runnable VS Callable")]),t._v(" "),s("ul",[s("li",[t._v("Callable仅在 Java 1.5 中引入,目的就是为了来处理Runnable不支持的用例。Callable 接口可以返回结果或抛出检查异常")]),t._v(" "),s("li",[t._v("Runnable 接口不会返回结果或抛出检查异常，")]),t._v(" "),s("li",[t._v("如果任务不需要返回结果或抛出异常推荐使用 Runnable接口，这样代码看起来会更加简洁")]),t._v(" "),s("li",[t._v("工具类 Executors 可以实现 Runnable 对象和 Callable 对象之间的相互转换。（Executors.callable（Runnable task）或 Executors.callable（Runnable task，Object resule））")])]),t._v(" "),s("h3",{attrs:{id:"shutdown-vs-shutdownnow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shutdown-vs-shutdownnow"}},[t._v("#")]),t._v(" shutdown() VS shutdownNow()")]),t._v(" "),s("ul",[s("li",[t._v("shutdown（） :关闭线程池，线程池的状态变为 SHUTDOWN。线程池不再接受新任务了，但是队列里的任务得执行完毕。")]),t._v(" "),s("li",[t._v("shutdownNow（） :关闭线程池，线程的状态变为 STOP。线程池会终止当前正在运行的任务，并停止处理排队的任务并返回正在等待执行的 List。\nshutdownNow的原理是遍历线程池中的工作线程，然后逐个调用线程的interrupt方法来中断线程，所以无法响应中断的任务可能永远无法终")])]),t._v(" "),s("h3",{attrs:{id:"isterminated-vs-isshutdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isterminated-vs-isshutdown"}},[t._v("#")]),t._v(" isTerminated() VS isShutdown()")]),t._v(" "),s("ul",[s("li",[t._v("isShutDown 当调用 shutdown() 方法后返回为 true。")]),t._v(" "),s("li",[t._v("isTerminated 当调用 shutdown() 方法后，并且所有提交的任务完成后返回为 true")])]),t._v(" "),s("h3",{attrs:{id:"_7-sleep-方法和wait-方法的区别和共同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-sleep-方法和wait-方法的区别和共同点"}},[t._v("#")]),t._v(" 7.sleep()方法和wait()方法的区别和共同点？")]),t._v(" "),s("p",[t._v("区别：")]),t._v(" "),s("ul",[s("li",[t._v("sleep方法：是Thread类的静态方法，当前线程将睡眠n毫秒，线程进入阻塞状态。当睡眠时间到了，会解除阻塞，进入可运行状态，等待CPU的到来。睡眠不释放锁（如果有的话）。")]),t._v(" "),s("li",[t._v("wait方法：是Object的方法，必须与synchronized关键字一起使用，线程进入阻塞状态，当notify或者notifyall被调用后，会解除阻塞。但是，只有重新占用互斥锁之后才会进入可运行状态。睡眠时，会释放互斥锁。")]),t._v(" "),s("li",[t._v("sleep 方法没有释放锁，而 wait 方法释放了锁 。")]),t._v(" "),s("li",[t._v("sleep 通常被用于暂停执行Wait 通常被用于线程间交互/通信")]),t._v(" "),s("li",[t._v("sleep() 方法执行完成后，线程会自动苏醒。或者可以使用 wait(long timeout)超时后线程会自动苏醒。wait() 方法被调用后，线程不会自动苏醒，需要别的线程调用同一个对象上的 notify() 或者 notifyAll() 方法")])]),t._v(" "),s("p",[t._v("相同：")]),t._v(" "),s("ul",[s("li",[t._v("两者都可以暂停线程的执行。")])]),t._v(" "),s("h3",{attrs:{id:"_8-为什么我们调用start方法时会执行run方法-为什么我们不直接调用run方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-为什么我们调用start方法时会执行run方法-为什么我们不直接调用run方法"}},[t._v("#")]),t._v(" 8.为什么我们调用start方法时会执行run方法，为什么我们不直接调用run方法？")]),t._v(" "),s("ul",[s("li",[t._v("new 一个 Thread，线程进入了新建状态，调用start方法后，线程会进入执行线程的准备工作，然后自动执行run方法（调用 start() 方法，会启动一个线程并使线程进入了就绪状态，当分配到时间片后就可以开始运行了。）这是真正的多线程工作。")]),t._v(" "),s("li",[t._v("直接调用run方法，会把run方法看成一个main线程下的普通方法执行，并不会在某个线程中执行它，所以这不是多线程工作，  "),s("strong",[t._v("调用 start 方法方可启动线程并使线程进入就绪状态，而 run 方法只是 thread 的一个普通方法调用，还是在主线程里执行。")])])]),t._v(" "),s("h3",{attrs:{id:"_9-thread类中的yield方法有什么作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-thread类中的yield方法有什么作用"}},[t._v("#")]),t._v(" 9.Thread类中的yield方法有什么作用？")]),t._v(" "),s("p",[t._v("Yield方法可以暂停当前执行的线程对象，并让其他优先级相同的线程执行。它是一个静态方法而且只保证当前线程放弃CPU占用而不能保证其他线程一定能占用CPU，执行yield方法的线程可能进入状态状态hou马上又被执行。")]),t._v(" "),s("h3",{attrs:{id:"_10-谈谈对volatile的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-谈谈对volatile的理解"}},[t._v("#")]),t._v(" 10.谈谈对volatile的理解？")]),t._v(" "),s("p",[t._v("volatile的两个语义：")]),t._v(" "),s("ul",[s("li",[t._v("volatile保证变量对所有线程可见：当volatile变量被修改时，新值对所有线程会立即更新，或者理解为多线程状态下使用volatile修饰的变量一定是最新值。")]),t._v(" "),s("li",[t._v("volatile能够避免指令重排，实现了有序性。")])]),t._v(" "),s("p",[t._v("volatile的原理：")]),t._v(" "),s("p",[t._v("获取JIT（即时Java编译器，把字节码解释为机器语言发送给处理器）的汇编代码，发现volatile多加了lock addl指令，这个操作相当于一个内存屏障，使得lock指令后的指令不能重排序到内存屏障前的位置。这也是为什么JDK1.5以后可以使用双锁检测实现单例模式。")]),t._v(" "),s("p",[t._v("lock前缀的另一层意义是使得本线程工作内存中的volatile变量值立即写入到主内存中，并且使得其他线程共享的该volatile变量无效化，这样其他线程必须重新从主内存中读取变量值。")]),t._v(" "),s("h3",{attrs:{id:"_11-如何创建线程实例并运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-如何创建线程实例并运行"}},[t._v("#")]),t._v(" 11.如何创建线程实例并运行？")]),t._v(" "),s("p",[s("code",[t._v("Thread")]),t._v(" 类本质上是实现 "),s("code",[t._v("Runnable")]),t._v(" 接口的一个实例，代表一个线程的实例。创建线程实例一般有两种方法：")]),t._v(" "),s("ol",[s("li",[t._v("创建 Thread 的子类并重写 "),s("code",[t._v("run()")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"#"}},[t._v("复制代码")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyThread")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyThread running"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[s("code",[t._v("run()")]),t._v(" 方在调用 "),s("code",[t._v("start()")]),t._v(" 方法后被执行，而且一旦线程启动后 "),s("code",[t._v("start()")]),t._v(" 方法后就会立即返回，而不是等到 "),s("code",[t._v("run()")]),t._v(" 方法执行完毕后再返回。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyThread")]),t._v(" myThread "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("实现 Runnable 接口")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyRunnable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyRunnable running"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("在新建类时实现 "),s("code",[t._v("Runnable")]),t._v(" 接口，然后在 "),s("code",[t._v("Thread")]),t._v(" 类的构造函数中传入 "),s("code",[t._v("MyRunnable")]),t._v(" 的实例对象，最后执行 "),s("code",[t._v("start()")]),t._v(" 方法即可；")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),t._v(" thread "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyRunnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nthread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"_12-线程阻塞的三种情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-线程阻塞的三种情况"}},[t._v("#")]),t._v(" 12.线程阻塞的三种情况")]),t._v(" "),s("p",[t._v("当线程因为某种原因放弃CPU后，即让出了CPU时间片，暂时就会停止运行，直到线程进入了可运行（Runnable）状态，才有机会再次获得CPU时间片转入Running状态，一般来说，线程阻塞有三种情况：")]),t._v(" "),s("ol",[s("li",[t._v("等待阻塞（Object.wait -> 等待队列）")])]),t._v(" "),s("p",[t._v("Running状态的线程执行Object.wait()方法后，jvm会将线程放入等待队列（waiting queue）")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("同步阻塞（lock -> 锁池）")])]),t._v(" "),s("p",[s("code",[t._v("RUNNING")]),t._v(" 状态的线程在获取对象的同步锁时，若该 "),s("strong",[t._v("同步锁被其他线程占用，则 JVM 将该线程放入锁池（lock pool）中")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("其他阻塞（sleep/join）")])]),t._v(" "),s("p",[s("code",[t._v("RUNNING")]),t._v(" 状态的线程执行 "),s("code",[t._v("Thread.sleep(long ms)")]),t._v(" 或 "),s("code",[t._v("Thread.join()")]),t._v(" 方法，或发出 I/O 请求时，JVM 会将该线程置为阻塞状态。当 "),s("code",[t._v("sleep()")]),t._v(" 状态超时，"),s("code",[t._v("join()")]),t._v(" 等待线程终止或超时. 或者 I/O 处理完毕时，线程重新转入可运行状态（"),s("code",[t._v("RUNNABLE")]),t._v("）")]),t._v(" "),s("h3",{attrs:{id:"_13-线程死亡的三种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-线程死亡的三种方法"}},[t._v("#")]),t._v(" 13.线程死亡的三种方法")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("正常结束")])])]),t._v(" "),s("p",[s("code",[t._v("run()")]),t._v(" 或者 "),s("code",[t._v("call()")]),t._v(" 方法执行完成后，线程正常结束；")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("strong",[t._v("异常结束")])])]),t._v(" "),s("p",[t._v("线程抛出一个未捕获的 "),s("code",[t._v("Exception")]),t._v(" 或 "),s("code",[t._v("Error")]),t._v("，导致线程异常结束；")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[t._v("调用 stop()")])])]),t._v(" "),s("p",[t._v("直接调用线程的 "),s("code",[t._v("stop()")]),t._v(" 方法来结束该线程，但是一般不推荐使用该种方式，"),s("strong",[t._v("因为该方法通常容易导致死锁")]),t._v("；")]),t._v(" "),s("h3",{attrs:{id:"_14-守护线程是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-守护线程是什么"}},[t._v("#")]),t._v(" 14.守护线程是什么？")]),t._v(" "),s("p",[t._v("守护线程是运行在后台的一种特殊进程。它独立于控制终端并且周期性地执行某种任务或等待处理某些发生的事件。在Java中垃圾回收线程就是特殊的守护线程。")]),t._v(" "),s("h3",{attrs:{id:"_15-了解fork-join框架吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-了解fork-join框架吗"}},[t._v("#")]),t._v(" 15.了解Fork/Join框架吗？")]),t._v(" "),s("p",[t._v("Fork/Join框架是JDK1.7提供的一个用于并行执行任务的框架，是一个把大任务分隔成若干个小任务，最终汇总每个小任务结后得到大任务结果的框架。")]),t._v(" "),s("p",[t._v("Fork/Join 框架特点 分而治之和工作窃取算法")]),t._v(" "),s("p",[s("strong",[t._v("「分而治之」")])]),t._v(" "),s("p",[t._v("以上Fork/Join框架的定义，就是分而治之思想的体现")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/zhangrenfeng/images/raw/master/img/20210913162648.png",alt:"111"}})]),t._v(" "),s("p",[s("strong",[t._v("「工作窃取算法」")])]),t._v(" "),s("p",[t._v("把大任务拆分成小任务，放到不同队列执行，交由不同的线程分别执行时。有的线程优先把自己负责的任务执行完了，其他线程还在慢慢悠悠处理自己的任务，这时候为了充分提高效率，就需要工作盗窃算法。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/zhangrenfeng/images/raw/master/img/20210913162906.png",alt:"1111"}})]),t._v(" "),s("p",[t._v("工作盗窃算法就是，「某个线程从其他队列中窃取任务进行执行的过程」。一般就是指做得快的线程（盗窃线程）抢慢的线程的任务来做，同时为了减少锁竞争，通常使用双端队列，即快线程和慢线程各在一端。")]),t._v(" "),s("h3",{attrs:{id:"_16-cas了解吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-cas了解吗"}},[t._v("#")]),t._v(" 16.CAS了解吗？")]),t._v(" "),s("ul",[s("li",[t._v("CAS：全称Compare and swap，即比较并交换。它是一条CPU同步原语。是一种硬件对并发的支持，针对多处理器而设计的一种特殊指令，用于对共享数据的并发访问。")]),t._v(" "),s("li",[t._v("CAS 是一种无锁的非阻塞算法的实现。")]),t._v(" "),s("li",[t._v("CAS 包含了三个参数\n"),s("ul",[s("li",[t._v("需要读写的内存值V")]),t._v(" "),s("li",[t._v("旧的预期值A")]),t._v(" "),s("li",[t._v("需要修改的更新值B")])])])]),t._v(" "),s("p",[t._v("当且仅当 V 的值等于 A 时，CAS 通过原子方式用新值 B 来更新 V 的 值，否则不会执行任何操作（他的功能是判断内存某个位置的值是否为预期值，如果是则更改为新的值，这个过程是原子的。）")]),t._v(" "),s("p",[t._v("CAS 并发原语体现在 Java 语言中的 "),s("code",[t._v("sum.misc.Unsafe")]),t._v(" 类中的各个方法。调用 Unsafe 类中的 CAS 方法， JVM 会帮助我们实现出 CAS 汇编指令。这是一种完全依赖于硬件的功能，通过它实现了原子操作。再次强调，由于 CAS是一种系统原语，"),s("strong",[t._v("原语属于操作系统用于范畴，是由若干条指令组成的，用于完成某个功能的一个过程，并且原语的执行必须是连续的")]),t._v("，"),s("strong",[t._v("在执行过程中不允许被中断")]),t._v("，"),s("strong",[t._v("CAS 是一条 CPU 的原子指令")]),t._v("，不会造成数据不一致问题。")]),t._v(" "),s("h3",{attrs:{id:"_17-cas会造成什么问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-cas会造成什么问题"}},[t._v("#")]),t._v(" 17.CAS会造成什么问题？")]),t._v(" "),s("p",[t._v("CAS会导致ABA问题，循环时间长开销，只能保证一个变量的原子操作。")]),t._v(" "),s("ol",[s("li",[t._v("ABA问题：")])]),t._v(" "),s("p",[t._v("并发环境下，假设初始条件是A,去修改数据时，发现是A就会执行修改，但是看到的虽然是A，中间可能发生了A变B，B又变回A的情况。此时A已经非彼A，数据即使成功修改，也可能有问题。")]),t._v(" "),s("p",[t._v("可以通过AtomicStampedReference解决ABA问题，它，一个带有标记的原子引用类，通过控制变量值的版本来保证CAS的正确性。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("循环时间长开销")])]),t._v(" "),s("p",[t._v("自旋CAS，如果一直循环执行，一直不成功，会给CPU带来很大的执行开销。\n很多时候，CAS是有自旋次数的，为了避免这个耗时问题。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("只能保证一个变量是原子操作的。")])]),t._v(" "),s("p",[t._v("CAS 保证的是对一个变量执行操作的原子性，如果对多个变量操作时，CAS 目前无法直接保证操作的原子性的。")]),t._v(" "),s("p",[t._v("可以通过这两个方式解决这个问题：")]),t._v(" "),s("ul",[s("li",[t._v("使用互斥锁来保证原子性；")]),t._v(" "),s("li",[t._v("将多个变量封装成对象，通过AtomicReference来保证原子性。")])]),t._v(" "),s("h3",{attrs:{id:"_18-synchronized和volatile的区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18-synchronized和volatile的区别是什么"}},[t._v("#")]),t._v(" 18.synchronized和volatile的区别是什么？")]),t._v(" "),s("p",[s("code",[t._v("volatile")]),t._v("解决的是内存可见性问题，会使得所有对"),s("code",[t._v("volatile")]),t._v("变量的读写都直接写入内存，即保证了变量的可见性。")]),t._v(" "),s("p",[s("code",[t._v("synchronized")]),t._v(" 解决的事执行控制的问题，它会阻止其他线程获取当前对象的监控锁，这样一来就让当前对象中被 "),s("code",[t._v("synchronized")]),t._v(" 关键字保护的代码块无法被其他线程访问，也就是无法并发执行。而且，"),s("code",[t._v("synchronized")]),t._v(" 还会创建一个 "),s("strong",[t._v("内存屏障")]),t._v("，内存屏障指令保证了所有 CPU 操作结果都会直接刷到主存中，从而 "),s("strong",[t._v("保证操作的内存可见性")]),t._v("，同时也使得这个锁的线程的所有操作都 "),s("code",[t._v("happens-before")]),t._v(" 于随后获得这个锁的线程的操作。")]),t._v(" "),s("p",[t._v("两者的区别主要有如下：")]),t._v(" "),s("ol",[s("li",[t._v("volatile 本质是在告诉 JVM 当前变量在寄存器（工作内存）中的值是不确定的，需要从主存中读取； synchronized 则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。")]),t._v(" "),s("li",[t._v("volatile "),s("strong",[t._v("仅能使用在变量级别")]),t._v("；synchronized 则可以使用在 "),s("strong",[t._v("变量. 方法. 和类级别的")])]),t._v(" "),s("li",[t._v("volatile 仅能实现变量的修改可见性，"),s("strong",[t._v("不能保证原子性")]),t._v("；而synchronized 则可以 "),s("strong",[t._v("保证变量的修改可见性和原子性")])]),t._v(" "),s("li",[t._v("volatile "),s("strong",[t._v("不会造成线程的阻塞")]),t._v("；synchronized "),s("strong",[t._v("可能会造成线程的阻塞")]),t._v("。")]),t._v(" "),s("li",[t._v("volatile 标记的变量不会被编译器优化；synchronized 标记的变量可以被编译器优化。")])]),t._v(" "),s("h3",{attrs:{id:"_19-synchronized和reentrantlock区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_19-synchronized和reentrantlock区别是什么"}},[t._v("#")]),t._v(" 19.synchronized和ReentrantLock区别是什么？")]),t._v(" "),s("ol",[s("li",[t._v("两者都是可重入锁")])]),t._v(" "),s("p",[t._v("可重入锁：重入锁，也叫递归锁，可重入锁指的是一个线程中可以多次获取同一把锁，比如：一个线程在执行一个带锁的方法，该方法中又调用了另一个需要相同锁的方法，则该线程可以直接执行调用的方法，而无需重新获得锁， 两者都是同一个线程每进入一次，锁的计数器都自增1，所以要等到锁的计数器下降为0时才能释放锁。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("synchronized依赖于JVM而ReentrantLock依赖于API")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("synchronized 是依赖于 JVM 实现的，前面我们也讲到了 虚拟机团队在 JDK1.6 为 synchronized 关键字进行了很多优化，但是这些优化都是在虚拟机层面实现的")])]),t._v(" "),s("li",[s("p",[t._v("ReentrantLock 是 JDK 层面实现的（也就是 API 层面，需要 lock() 和 unlock() 方法配合 try/finally 语句块来完成）")])])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("ReentrantLock比synchronized 增加了一些高级功能。")])]),t._v(" "),s("p",[t._v("相比synchronized，ReentrantLock增加了一些高级功能。主要来说有三点：①等待可中断；②可实现公平锁；③可实现选择性通知（锁可以绑定多个条件）")]),t._v(" "),s("ul",[s("li",[t._v("等待可中断，通过lock.lockInterruptibly()来实现这个机制。也就是说正在等待的线程可以选择放弃等待，改为处理其他事情。")]),t._v(" "),s("li",[t._v("ReentrantLock可以指定是公平锁还是非公平锁。而synchronized只能是非公平锁。所谓的公平锁就是先等待的线程先获得锁。 ReentrantLock默认情况是非公平的，可以通过 ReentrantLock类的ReentrantLock(boolean fair)构造方法来制定是否是公平的。")]),t._v(" "),s("li",[t._v("ReentrantLock类线程对象可以注册在指定的Condition中，从而可以有选择性的进行线程通知，在调度线程上更加灵活。 在使用notify()/notifyAll()方法进行通知时，被通知的线程是由 JVM 选择的，用ReentrantLock类结合Condition实例可以实现“选择性通知”")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("使用选择？")])]),t._v(" "),s("ul",[s("li",[t._v("除非需要使用 ReentrantLock 的高级功能，否则优先使用 synchronized。")]),t._v(" "),s("li",[t._v("synchronized 是 JVM 实现的一种锁机制，JVM 原生地支持它，而 ReentrantLock 不是所有的 JDK 版本都支持。并且使用 synchronized 不用担心没有释放锁而导致死锁问题，因为 JVM 会确保锁的释放。")])]),t._v(" "),s("h3",{attrs:{id:"_20-synchronized的用法有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20-synchronized的用法有哪些"}},[t._v("#")]),t._v(" 20.synchronized的用法有哪些？")]),t._v(" "),s("ul",[s("li",[t._v("修饰普通方法：作用于当前对象实例，进入同步代码前要获得当前对象实例的锁。")]),t._v(" "),s("li",[t._v("修饰静态方法:作用于当前类，进入同步代码前要获得当前类对象的锁,synchronized 关键字加到 static 静态方法和 synchronized(class)代码块上都是是给 Class 类上锁")]),t._v(" "),s("li",[t._v("修饰代码块:指定加锁对象，对给定对象加锁，进入同步代码库前要获得给定对象的锁")])]),t._v(" "),s("p",[t._v("特别注意：")]),t._v(" "),s("p",[t._v("①如果一个线程A调用一个实例对象的非静态 synchronized 方法，而线程B需要调用这个实例对象所属类的静态 synchronized 方法，是允许的，不会发生互斥现象，因为访问静态 synchronized 方法占用的锁是当前类的锁")]),t._v(" "),s("p",[t._v("②尽量不要使用 synchronized(String s) ,因为JVM中，字符串常量池具有缓冲功能")]),t._v(" "),s("h3",{attrs:{id:"_21-synchronized的作用有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_21-synchronized的作用有哪些"}},[t._v("#")]),t._v(" 21.synchronized的作用有哪些？")]),t._v(" "),s("ol",[s("li",[t._v("原子性：确保线程互斥的访问同步代码。")]),t._v(" "),s("li",[t._v("可见性：保证共享变量的修改：保证共享变量的修改能够及时可见，其实是通过Java内存模型中的 “对一个变量unlock操作之前，必须要同步到主内存中；如果对一个变量进行lock操作，则将会清空工作内存中此变量的值，在执行引擎使用此变量前，需要重新从主内存中load操作或assign操作初始化变量值” 来保证的；")]),t._v(" "),s("li",[t._v("有序性：有效解决重排序问题，即 “一个unlock操作先行发生(happen-before)于后面对同一个锁的lock操作”。")])]),t._v(" "),s("h3",{attrs:{id:"_22-说一下synchronized底层实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_22-说一下synchronized底层实现原理"}},[t._v("#")]),t._v(" 22.说一下synchronized底层实现原理？")]),t._v(" "),s("p",[t._v("synchronized 同步代码块的实现是通过 monitorenter 和 monitorexit 指令，其中 monitorenter 指令指向同步代码块的开始位置，monitorexit 指令则指明同步代码块的结束位置。当执行 monitorenter 指令时，线程试图获取锁也就是获取 monitor(monitor对象存在于每个Java对象的对象头中，synchronized 锁便是通过这种方式获取锁的，也是为什么Java中任意对象可以作为锁的原因) 的持有权。")]),t._v(" "),s("p",[t._v("其内部包含一个计数器，当计数器为0则可以成功获取，获取后将锁计数器设为1也就是加1。相应的在执行 monitorexit 指令后，将锁计数器设为0，表明锁被释放。如果获取对象锁失败，那当前线程就要阻塞等待，直到锁被另外一个线程释放为止")]),t._v(" "),s("p",[t._v("synchronized 修饰的方法并没有 monitorenter 指令和 monitorexit 指令，取得代之的确实是 ACC_SYNCHRONIZED 标识，该标识指明了该方法是一个同步方法，JVM 通过该 ACC_SYNCHRONIZED 访问标志来辨别一个方法是否声明为同步方法，从而执行相应的同步调用。")]),t._v(" "),s("h3",{attrs:{id:"其他内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他内容"}},[t._v("#")]),t._v(" 其他内容")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/cosen1024/Java-Interview/blob/main/Java%E5%B9%B6%E5%8F%91/Java%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%80%BB%E7%BB%93%E7%89%88.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/cosen1024/Java-Interview/blob/main/Java并发/Java多线程总结版.md"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=v.exports}}]);